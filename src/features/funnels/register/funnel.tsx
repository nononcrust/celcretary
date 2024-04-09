"use client";

import { Header } from "@/components/layouts/header";
import { Form } from "@/components/ui/form";
import { RegisterFunnelContextProvider } from "@/features/funnels/register/context";
import { useFunnel } from "@/hooks/use-funnel";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { RegisterAge } from "./register-age";
import { RegisterGender } from "./register-gender";
import { RegisterName } from "./register-name";
import { RegisterOccupation } from "./register-occupation";

const STEPS = ["name", "age", "gender", "occupation"] as const;

const formSchema = z.object({
  name: z.string().min(1),
  age: z.string().min(1),
  gender: z.string().min(1),
  occupation: z.string().min(1),
});

export type FormSchema = z.infer<typeof formSchema>;

export const RegisterFunnel = () => {
  const router = useRouter();

  const funnel = useFunnel(STEPS);
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      age: "",
      gender: "",
      occupation: "",
    },
  });

  const onSubmit = form.handleSubmit((data) => {
    console.log(data);
  });

  return (
    <RegisterFunnelContextProvider funnel={funnel} form={form}>
      <div className="px-4">
        <Header>{funnel.canMoveToPrevious && <Header.Previous onClick={funnel.previous} />}</Header>
        <Form {...form}>
          <form className="mt-5" onSubmit={onSubmit}>
            {funnel.current === "name" && <RegisterName />}
            {funnel.current === "age" && <RegisterAge />}
            {funnel.current === "gender" && <RegisterGender />}
            {funnel.current === "occupation" && <RegisterOccupation />}
          </form>
        </Form>
      </div>
    </RegisterFunnelContextProvider>
  );
};
