import { Avatar } from "@material-tailwind/react";
import { FaUserLock } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";

import avatar from "../assets/avatar.png";
import { useUserStore } from "../stores/useUserStore";

export const AccountInfo = () => {
  const { userId, username, email } = useUserStore((state) => ({
    userId: state.userId,
    username: state.username,
    email: state.email,
  }));
  return (
    <div className="flex w-full flex-col">
      <div className="mb-4 flex flex-col items-center justify-center gap-4">
        <Avatar src={avatar} alt="avatar" size="xl" />
        <p className="font-montserrat text-xl font-bold">{username}</p>
      </div>

      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-2">
          <FaUserLock className="h-7 w-8 text-blue" />
          <p className="font-montserrat text-sm font-bold">ID</p>
        </div>
        <p className="font-lato text-xs">{userId}</p>
      </div>
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-2">
          <MdOutlineMail className="h-8 w-8 text-blue" />
          <p className="font-montserrat text-sm font-bold">Email</p>
        </div>
        <p className="font-lato text-xs">{email}</p>
      </div>
    </div>
  );
};
