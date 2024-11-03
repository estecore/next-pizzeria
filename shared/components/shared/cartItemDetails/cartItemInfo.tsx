export const CartItemInfo = ({
  name,
  details,
}: {
  name: string;
  details: string;
}) => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold flex-1 leading-6">{name}</h2>
      </div>
      {details && (
        <p className="text-xs text-gray-400 max-w-[90%]">{details}</p>
      )}
    </div>
  );
};
