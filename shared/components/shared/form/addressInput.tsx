import { AddressSuggestions } from "react-dadata";
import "react-dadata/dist/react-dadata.css";

const token = process.env.NEXT_PUBLIC_DADATA_API;

if (!token) {
  throw new Error("NEXT_PUBLIC_DADATA_API is not defined");
}

export const AddressInput = ({
  onChange,
}: {
  onChange?: (value?: string) => void;
}) => {
  return (
    <AddressSuggestions
      token={token}
      onChange={(data) => onChange?.(data?.value)}
    />
  );
};
