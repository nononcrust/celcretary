"use client";

import { Header } from "@/components/layouts/header";
import { Form } from "@/components/ui/form";
import { ROUTE } from "@/constants/route";
import { useFunnel } from "@/hooks/use-funnel";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { FriendAddFunnelContextProvider } from "./context";
import { FriendAddBirthday } from "./friend-add-birthday";
import { FriendAddComplete } from "./friend-add-complete";
import { FriendAddGender } from "./friend-add-gender";
import { FriendAddName } from "./friend-add-name";
import { FriendAddPhoto } from "./friend-add-photo";
import { FriendAddRelationship } from "./friend-add-relationship";

const STEPS = ["name", "birthday", "gender", "relationship", "photo", "complete"] as const;

const formSchema = z.object({
  name: z.string().min(1),
  gender: z.string().min(1).optional(),
  birthday: z.string().min(1),
  relationship: z.string().min(1),
  photo: z.instanceof(File).optional(),
});

export type FormSchema = z.infer<typeof formSchema>;

export const FriendAddFunnel = () => {
  const funnel = useFunnel(STEPS);
  const router = useRouter();

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      gender: "",
      birthday: "",
      relationship: "",
      photo: undefined,
    },
  });

  const onSubmit = form.handleSubmit((data) => {
    console.log(data);
  });

  return (
    <FriendAddFunnelContextProvider funnel={funnel} form={form}>
      <div className="px-4">
        <Header className={cn(!funnel.canMoveToPrevious && "justify-end")}>
          {funnel.canMoveToPrevious && <Header.Previous onClick={funnel.previous} />}
          <Header.Close onClick={() => router.push(ROUTE.HOME)} />
        </Header>
        <Form {...form}>
          <form onSubmit={onSubmit}>
            {funnel.current === "name" && <FriendAddName />}
            {funnel.current === "birthday" && <FriendAddBirthday />}
            {funnel.current === "gender" && <FriendAddGender />}
            {funnel.current === "relationship" && <FriendAddRelationship />}
            {funnel.current === "photo" && <FriendAddPhoto />}
            {funnel.current === "complete" && <FriendAddComplete />}
          </form>
        </Form>
      </div>
    </FriendAddFunnelContextProvider>
  );
};
