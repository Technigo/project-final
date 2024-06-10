import { Avatar } from "@material-tailwind/react";
import { useEffect } from "react";
import { FaUserLock } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";

import avatar from "../assets/avatar.png";
import { ProductCard } from "../components/ProductCard";
import { useUserStore } from "../stores/useUserStore";

export const MyPage = () => {
  const navigate = useNavigate();
  const { userId, username, email, displayUserInfo, loading, deleteAccount } =
    useUserStore();

  useEffect(() => {
    displayUserInfo();
  }, [displayUserInfo]);

  const handleDelete = async () => {
    const response = await deleteAccount();
    if (response) navigate("/login");
  };

  return (
    <div className="flex flex-col items-center">
      {!loading ? (
        <div className="my-6 grid w-5/6 grid-cols-1 gap-6 text-base text-blue">
          <h1 className="text-center font-bold text-black">My Account</h1>
          <div className="mb-4 flex flex-row items-center gap-4">
            <Avatar src={avatar} alt="avatar" size="xl" />
            <p className="font-montserrat text-xl font-bold">{username}</p>
          </div>
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center gap-2">
              <FaUserLock className="h-7 w-8 text-blue" />
              <p className="font-montserrat text-base font-bold">ID</p>
            </div>
            <p className="font-lato text-base">{userId}</p>
          </div>
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center gap-2">
              <MdOutlineMail className="h-8 w-8 text-blue" />
              <p className="font-montserrat text-base font-bold">Email</p>
            </div>
            <p className="font-lato text-base">{email}</p>
          </div>
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center gap-2">
              <MdDelete className="h-8 w-8 text-blue" />
              <p className="font-montserrat font-bold">Delete account</p>
            </div>
            <button
              className="font-lato text-base underline"
              onClick={handleDelete}
            >
              Delete your account
            </button>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}

      <div className="my-12 flex w-5/6 flex-col items-center gap-6">
        <h2 className="mb-4 font-bold">Your Favorite Items</h2>
        <ProductCard
          templateImg="https://res.cloudinary.com/ddpsnaef5/image/upload/v1717358234/cld-sample-5.jpg"
          tags="Health, Wellness, Holistic"
          name="Health and Wellness"
          price={34.99}
          category="Health and Wellness"
        />
        <ProductCard
          templateImg="https://res.cloudinary.com/ddpsnaef5/image/upload/v1717358234/cld-sample-5.jpg"
          tags="Health, Wellness, Holistic"
          name="Health and Wellness"
          price={34.99}
          category="Health and Wellness"
        />
      </div>
    </div>
  );
};
