import { Controller, useFormContext } from "react-hook-form";

import { WhiteBlock } from "../whiteBlock";
import { AddressInput, FormTextarea } from "../form";
import { ErrorText } from "../errorText";

export const CheckoutAddressForm = ({ className }: { className?: string }) => {
  const { control } = useFormContext();
  return (
    <WhiteBlock title="3. Address" className={className}>
      <div className="flex flex-col gap-5">
        <Controller
          control={control}
          name="address"
          render={({ field, fieldState }) => (
            <>
              <AddressInput onChange={field.onChange} />

              {fieldState.error?.message && (
                <ErrorText text={fieldState.error.message} />
              )}
            </>
          )}
        />

        <FormTextarea
          name="comment"
          rows={5}
          className="text-base"
          placeholder="Comment to order"
        />
      </div>
    </WhiteBlock>
  );
};
