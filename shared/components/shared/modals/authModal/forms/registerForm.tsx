import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerFormSchema, TypeRegisterFormSchema } from "@/shared/schemas";

import toast from "react-hot-toast";

import { registerUser } from "@/app/actions";

import { FormInput } from "../../../form";
import { Button } from "@/shared/components/ui";

export const RegisterForm = ({ onClose }: { onClose?: () => void }) => {
  const form = useForm<TypeRegisterFormSchema>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      email: "",
      fullName: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: TypeRegisterFormSchema) => {
    try {
      await registerUser({
        email: data.email,
        fullName: data.fullName,
        password: data.password,
      });

      toast.error("Registration successful 📝. Please confirm your email", {
        icon: "✅",
      });

      onClose?.();
    } catch (error) {
      return toast.error("Invalid E-Mail or password", {
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
        <FormInput name="email" label="Email" required />
        <FormInput name="fullName" label="Full name" required />
        <FormInput name="password" label="Password" type="password" required />
        <FormInput
          name="confirmPassword"
          label="Confirm password"
          type="password"
          required
        />

        <Button
          loading={form.formState.isSubmitting}
          className="h-12 text-base"
          type="submit"
        >
          Sign up
        </Button>
      </form>
    </FormProvider>
  );
};
