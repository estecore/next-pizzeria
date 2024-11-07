import { InfoBlock } from "@/shared/components/shared";

const NotAuthPage = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-40">
      <InfoBlock
        title="Access Denied"
        text="This page can only be viewed by authorized users"
        imageUrl="/assets/images/lock.png"
      />
    </div>
  );
};

export default NotAuthPage;