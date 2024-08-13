import { Input } from "../ui/index";

import {
  CheckboxFiltersGroup,
  FilterCheckbox,
  RangeSlider,
  Title,
} from "./index";

export const Filters = ({ className }: { className?: string }) => {
  return (
    <div className={className}>
      <Title
        text="Filters "
        size="sm"
        className="mb-5 font-bold pb-4 border-b border-b-neutral-100"
      />

      <div className="flex flex-col gap-4">
        <FilterCheckbox text="Can be collected" value="1" />
        <FilterCheckbox text="New" value="2" />
      </div>

      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Price from and to:</p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={1000}
            defaultValue={0}
          />
          <Input type="number" placeholder="1000" min={100} max={1000} />
        </div>

        <RangeSlider min={0} max={1000} step={10} value={[0, 1000]} />
      </div>

      <CheckboxFiltersGroup
        className="mt-5 "
        title="Categories"
        limit={6}
        defaultItems={[
          {
            text: "Cheese sauce1",
            value: "1",
          },
          {
            text: "Cheese sauce2",
            value: "2",
          },
          {
            text: "Cheese sauce3",
            value: "3",
          },
          {
            text: "Cheese sauce4",
            value: "4",
          },
          {
            text: "Cheese sauce5",
            value: "5",
          },
        ]}
        items={[
          {
            text: "Cheese sauce1",
            value: "1",
          },
          {
            text: "Cheese sauce2",
            value: "2",
          },
          {
            text: "Cheese sauce3",
            value: "3",
          },
          {
            text: "Cheese sauce4",
            value: "4",
          },
          {
            text: "Cheese sauce5",
            value: "5",
          },
          {
            text: "Cheese sauce5",
            value: "5",
          },
          {
            text: "Cheese sauce5",
            value: "5",
          },
          {
            text: "Cheese sauce5",
            value: "5",
          },
          {
            text: "Cheese sauce5",
            value: "5",
          },
          {
            text: "Cheese sauce5",
            value: "5",
          },
          {
            text: "Cheese sauce5",
            value: "5",
          },
          {
            text: "Cheese sauce5",
            value: "5",
          },
        ]}
      />
    </div>
  );
};
