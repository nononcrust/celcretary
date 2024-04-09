"use client";

import { FriendListItem } from "@/components/friend/friend-list-item";
import { UpcomingEvents } from "@/components/friend/upcoming-events";
import { Header } from "@/components/layouts/header";
import { Icon } from "@/components/ui/icon";
import { IconButton } from "@/components/ui/icon-button";
import { SearchInput } from "@/components/ui/search-input";
import { Title } from "@/components/ui/title";
import { ROUTE } from "@/constants/route";
import Link from "next/link";

export default function FriendListPage() {
  return (
    <div className="px-4">
      <Header className="justify-end">
        <IconButton size="large" asChild>
          <Link href={ROUTE.FRIEND.ADD}>
            <Icon.Plus className="w-8" />
          </Link>
        </IconButton>
      </Header>
      <main>
        <Title className="mt-5">친구 목록</Title>
        <SearchInput className="mt-5" placeholder="친구 검색" />
        <UpcomingEvents className="mt-4" />
        <ul className="mt-2 flex flex-col">
          <FriendListItem />
          <FriendListItem />
          <FriendListItem />
          <FriendListItem />
          <FriendListItem />
          <FriendListItem />
          <FriendListItem />
          <FriendListItem />
          <FriendListItem />
          <FriendListItem />
          <FriendListItem />
          <FriendListItem />
          <FriendListItem />
          <FriendListItem />
          <FriendListItem />
          <FriendListItem />
          <FriendListItem />
          <FriendListItem />
          <FriendListItem />
        </ul>
      </main>
    </div>
  );
}
