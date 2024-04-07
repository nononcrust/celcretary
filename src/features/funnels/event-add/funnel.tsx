"use client";

import { Header } from "@/components/layouts/header";
import { Form } from "@/components/ui/form";
import { ROUTE } from "@/constants/route";
import { EventAddFunnelContextProvider } from "@/features/funnels/event-add/context";
import { EventAddComplete } from "@/features/funnels/event-add/event-add-complete";
import { EventAddDate } from "@/features/funnels/event-add/event-add-date";
import { EventAddFriend } from "@/features/funnels/event-add/event-add-friend";
import { EventAddName } from "@/features/funnels/event-add/event-add-name";
import { EventAddOverview } from "@/features/funnels/event-add/event-add-overview";
import { EventAddPriority } from "@/features/funnels/event-add/event-add-priority";
import { useFunnel } from "@/hooks/use-funnel";
import { cn } from "@/lib/utils";
import { PRIORITY } from "@/services/shared";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { EventAddType } from "./event-add-type";

const STEPS = ["type", "name", "date", "friend", "priority", "overview", "complete"] as const;

const formSchema = z.object({
  type: z.string().min(1),
  name: z.string().min(1),
  priority: z.enum([Object.values(PRIORITY)[0], ...Object.values(PRIORITY).slice(1), ""]),
  date: z.date(),
  time: z.string().min(1),
});

export type FormSchema = z.infer<typeof formSchema>;

export const EventAddFunnel = () => {
  const funnel = useFunnel(STEPS);
  const router = useRouter();

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      type: "",
      name: "",
      priority: "",
      time: "",
    },
  });

  const onSubmit = form.handleSubmit((data) => {
    console.log(data);
  });

  return (
    <EventAddFunnelContextProvider funnel={funnel} form={form}>
      <div className="px-4">
        <Header className={cn(!funnel.canMoveToPrevious && "justify-end")}>
          {funnel.canMoveToPrevious && <Header.Previous onClick={funnel.previous} />}
          <Header.Close onClick={() => router.push(ROUTE.HOME)} />
        </Header>
        <Form {...form}>
          <form onSubmit={onSubmit}>
            {funnel.current === "type" && <EventAddType />}
            {funnel.current === "name" && <EventAddName />}
            {funnel.current === "date" && <EventAddDate />}
            {funnel.current === "friend" && <EventAddFriend />}
            {funnel.current === "priority" && <EventAddPriority />}
            {funnel.current === "overview" && <EventAddOverview />}
            {funnel.current === "complete" && <EventAddComplete />}
          </form>
        </Form>
      </div>
    </EventAddFunnelContextProvider>
  );
};
