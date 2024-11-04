import { useFormContext } from "react-hook-form";

import { Input } from "../../ui";
import { ClearButton } from "../clearButton";
import { ErrorText } from "../errorText";
import { RequiredSymbol } from "../requiredSymbol";

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  required?: boolean;
  className?: string;
}

export const FormInput = ({
  name,
  label,
  required,
  className,
  ...props
}: FormInputProps) => {
  const {
    register,
    formState: { errors },
    watch,
    setValue,
  } = useFormContext();

  const value = watch(name);
  const errorText = errors[name]?.message as string;

  const onClickClear = () => {
    setValue(name, "", { shouldValidate: true });
  };

  return (
    <div className={className}>
      {label && (
        <p className="font-medium mb-2">
          {label} {required && <RequiredSymbol />}
        </p>
      )}

      <div className="relative">
        <Input className="h-12 text-md" {...register(name)} {...props} />

        {Boolean(value) && <ClearButton onClick={onClickClear} />}
      </div>

      {Boolean(errorText) && <ErrorText text={errorText} className="mt-2" />}
    </div>
  );
};
