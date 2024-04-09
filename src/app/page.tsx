"use client";

import { EventCard } from "@/components/home/event-card";
import { ReminderCard } from "@/components/home/reminder-card";
import { ReminderPlaceholder } from "@/components/home/reminder-placeholder";
import { Calendar } from "@/components/ui/calendar";
import { Icon } from "@/components/ui/icon";
import { IconButton } from "@/components/ui/icon-button";
import { SectionTitle } from "@/components/ui/section-title";
import { Subtitle } from "@/components/ui/subtitle";
import { Title } from "@/components/ui/title";
import { useCalendar } from "@/hooks/use-calendar";
import { useCheckboxGroup } from "@/hooks/use-checkbox-group";
import { isIn10DaysFromNow } from "@/lib/date";
import { useCalenderItemList } from "@/services/calender";
import { Event, EventType, Priority, useDeleteEvent } from "@/services/event";
import { Reminder } from "@/services/reminder";
import { format, isSameDay } from "date-fns";
import { ko } from "date-fns/locale";

const DUMMY_REMINDERS: Reminder[] = [
  {
    id: 1,
    name: "김밤비 결혼식",
    priority: Priority.CRUCIAL,
    scheduledAt: new Date().toISOString(),
  },
  {
    id: 2,
    name: "김밤비 결혼식",
    priority: Priority.CRUCIAL,
    scheduledAt: new Date().toISOString(),
  },
  {
    id: 3,
    name: "김밤비 결혼식",
    priority: Priority.CRUCIAL,
    scheduledAt: new Date().toISOString(),
  },
];

const DUMMY_EVENTS: Event[] = [
  {
    id: "1",
    friendId: "1",
    name: "김밤비 결혼식",
    priority: Priority.CRUCIAL,
    scheduledAt: new Date().toISOString(),
    type: EventType.WEDDING,
  },
  {
    id: "2",
    friendId: "2",
    name: "김밤비 결혼식",
    priority: Priority.CRUCIAL,
    scheduledAt: new Date().toISOString(),
    type: EventType.WEDDING,
  },
  {
    id: "3",
    friendId: "3",
    name: "김밤비 결혼식",
    priority: Priority.CRUCIAL,
    scheduledAt: new Date().toISOString(),
    type: EventType.WEDDING,
  },
];

export default function HomePage() {
  const { data } = useCalenderItemList({
    year: 2024,
    month: 3,
  });

  const calendar = useCalendar();
  const reminderCheckGroup = useCheckboxGroup();
  const eventCheckGroup = useCheckboxGroup();

  const deleteEventMutation = useDeleteEvent();

  const reminders = DUMMY_REMINDERS;
  const events = DUMMY_EVENTS;

  const remindersIn10Days = reminders.filter((reminder) =>
    isIn10DaysFromNow(new Date(reminder.scheduledAt)),
  );

  const remindersOnSelectedDate = reminders.filter((reminder) =>
    isSameDay(reminder.scheduledAt, calendar.selected?.toISOString() || ""),
  );

  const onCalenderSelect = (date?: Date) => {
    eventCheckGroup.uncheckAll();
    calendar.onSelect(date);
  };

  const onReminderDelete = () => {
    deleteEventMutation.mutate(reminderCheckGroup.checkedItems, {
      onSuccess: () => {
        reminderCheckGroup.uncheckAll();
      },
    });
  };

  const onEventDelete = () => {
    deleteEventMutation.mutate(eventCheckGroup.checkedItems, {
      onSuccess: () => {
        eventCheckGroup.uncheckAll();
      },
    });
  };

  return (
    <main className="px-4 pb-20 pt-4">
      <div className="mt-[72px] flex items-center justify-between">
        <Title>
          경조사 리마인더
          <span className="ml-3 text-primary">{reminderCheckGroup.checkedItems.length || ""}</span>
        </Title>
        {reminderCheckGroup.checkedItems.length > 0 && (
          <IconButton onClick={onReminderDelete}>
            <Icon.Trash2 />
          </IconButton>
        )}
      </div>
      <Subtitle>10일 이내의 경조사를 확인할 수 있어요</Subtitle>
      <div className="mt-5 flex flex-col gap-[10px]">
        {reminders.length === 0 && <ReminderPlaceholder />}
        {remindersIn10Days.map((reminder) => (
          <ReminderCard
            key={reminder.id}
            id={String(reminder.id)}
            checked={reminderCheckGroup.checked(String(reminder.id))}
            name={reminder.name}
            priority={reminder.priority}
            onChange={reminderCheckGroup.onChange}
          />
        ))}
      </div>
      <Calendar
        className="mt-10"
        selected={calendar.selected}
        onSelect={onCalenderSelect}
        events={events}
      />
      {calendar.selected && (
        <div className="mt-10 flex items-center justify-between">
          <SectionTitle>{format(calendar.selected, "M월 d일", { locale: ko })} 경조사</SectionTitle>
          {eventCheckGroup.checkedItems.length > 0 && (
            <IconButton onClick={onEventDelete}>
              <Icon.Trash2 />
            </IconButton>
          )}
        </div>
      )}
      <div className="mt-3 flex flex-col gap-[10px]">
        {remindersOnSelectedDate.map((event) => (
          <EventCard
            key={event.id}
            id={String(event.id)}
            checked={eventCheckGroup.checked(String(event.id))}
            name={event.name}
            priority={event.priority}
            date={new Date(event.scheduledAt)}
            onChange={eventCheckGroup.onChange}
          />
        ))}
      </div>
    </main>
  );
}
