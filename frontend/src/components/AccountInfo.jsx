import { Avatar } from "@material-tailwind/react";
import { FaUserLock } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";

import avatar from "../assets/icons/avatar.svg";
import { useUserStore } from "../stores/useUserStore";

export const AccountInfo = () => {
  const { userId, username, email } = useUserStore((state) => ({
    userId: state.userId,
    username: state.username,
    email: state.email,
  }));
  return (
    <div className="flex w-full max-w-sm flex-col gap-6">
      <div className="mb-4 flex flex-col items-center justify-center gap-4">
        <Avatar src={avatar} alt="avatar" size="xl" />
        <p className="font-montserrat text-xl font-bold">{username}</p>
      </div>

      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-3">
          <FaUserLock className="h-7 w-8 text-blue" />
          <p className="font-montserrat text-sm font-bold lg:text-lg">ID</p>
        </div>
        <p className="font-lato text-sm lg:text-lg">{userId}</p>
      </div>
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-3">
          <MdOutlineMail
            className="h-8 w-8 text-blue"
            aria-label="send email"
          />
          <p className="font-montserrat text-sm font-bold lg:text-lg">Email</p>
        </div>
        <p className="font-lato text-sm lg:text-lg">{email}</p>
      </div>
    </div>
  );
};
