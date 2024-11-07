import { signIn } from "next-auth/react";

import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import toast from "react-hot-toast";

import { loginFormSchema, TypeLoginFormSchema } from "@/shared/schemas";

import { Title } from "../../../title";
import { FormInput } from "../../../form";
import { Button } from "@/shared/components/ui";

export const LoginForm = ({ onClose }: { onClose: () => void }) => {
  const form = useForm<TypeLoginFormSchema>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: TypeLoginFormSchema) => {
    try {
      const resp = await signIn("credentials", {
        ...data,
        redirect: false,
      });

      if (!resp?.ok) {
        return toast.error("Invalid email or password", {
          icon: "❌",
        });
      }

      toast.success("Signed in successfully", {
        icon: "✅",
      });

      onClose();
    } catch (error) {
      console.log("Error [LOGIN]", error);
      toast.error("Failed to sign in", {
        icon: "❌",
      });
    }
  };

  return (
    <FormProvider {...form}>
      <form
        className="flex flex-col gap-5"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className="flex justify-between items-center">
          <div className="mr-2">
            <Title
              text="Sign in to your account"
              size="md"
              className="font-bold"
            />
            <p className="text-gray-400">
              Enter your email to sign in to your account
            </p>
          </div>
        </div>

        <FormInput name="email" label="Email" required />
        <FormInput type="password" name="password" label="Password" required />

        <Button
          disabled={form.formState.isSubmitting}
          className="h-12 text-base"
          type="submit"
        >
          {form.formState.isSubmitting ? "Signing in..." : "Sign in"}
        </Button>
      </form>
    </FormProvider>
  );
};
