"use client";

import { signOut } from "next-auth/react";

import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerFormSchema, TypeRegisterFormSchema } from "@/shared/schemas";

import toast from "react-hot-toast";

import { User } from "@prisma/client";

import { updateUserInfo } from "@/app/actions";

import { Button } from "../ui";
import { Container } from "./container";
import { Title } from "./title";
import { FormInput } from "./form";

export const ProfileForm = ({ data }: { data: User }) => {
  const form = useForm({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      fullName: data.fullName,
      email: data.email,
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: TypeRegisterFormSchema) => {
    try {
      await updateUserInfo({
        email: data.email,
        fullName: data.fullName,
        password: data.password,
      });

      toast.success("Data updated successfully", {
        icon: "✅",
      });
    } catch (error) {
      return toast.error("Error updating data", {
        icon: "❌",
      });
    }
  };

  const onClickSignOut = () => {
    signOut({
      callbackUrl: "/",
    });
  };

  return (
    <Container className="my-10">
      <Title
        text={`Personal data | #${data?.id}`}
        size="md"
        className="font-bold"
      />

      <FormProvider {...form}>
        <form
          className="flex flex-col gap-5 w-96 mt-10"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormInput name="email" label="Email" required />
          <FormInput name="fullName" label="Full name" required />

          <FormInput
            type="password"
            name="password"
            label="New password"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            label="Repeat password"
            required
          />

          <Button
            disabled={form.formState.isSubmitting}
            className="text-base mt-10"
            type="submit"
          >
            Save
          </Button>

          <Button
            onClick={onClickSignOut}
            variant="secondary"
            disabled={form.formState.isSubmitting}
            className="text-base"
            type="button"
          >
            Sign out
          </Button>
        </form>
      </FormProvider>
    </Container>
  );
};
