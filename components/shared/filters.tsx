import { FilterCheckbox, Title } from "./index";

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
    </div>
  );
};
