import { Icon } from "../ui/icon";

export const UserProfile = () => {
  return (
    <div className="flex flex-col items-center">
      <Icon.AvatarMale className="h-10 w-10 rounded-full" />
      <p className="mt-0.5 text-xs">03.29</p>
      <p className="mt-0.5 text-xs">김밤비</p>
    </div>
  );
};
