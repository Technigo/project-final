import { Avatar } from "@material-tailwind/react";
import { useEffect } from "react";
import { FaUserLock } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";

import avatar from "../assets/avatar.png";
import { Breadcrumb } from "../components/Breadcrumb";
import { Button } from "../components/Button";
import { Error } from "../components/Error";
import { Loading } from "../components/Loading";
import { ProductCard } from "../components/ProductCard";
import { useProductStore } from "../stores/useProductStore";
import { useUserStore } from "../stores/useUserStore";

export const MyPage = () => {
  const products = useProductStore((state) => state.products);
  const { favorite, logout, loading, error } = useUserStore((state) => ({
    favorite: state.favorite,
    logout: state.logout,
    loading: state.loading,
    error: state.error,
  }));
  const navigate = useNavigate();
  const { userId, username, email, displayUserInfo, deleteAccount } =
    useUserStore();

  useEffect(() => {
    displayUserInfo();
  }, [displayUserInfo]);

  const handleDelete = async () => {
    const response = await deleteAccount();
    if (response) navigate("/login");
  };

  return (
    <main>
      <Breadcrumb />
      <div className="mx-6 mb-20 flex flex-col items-center">
        {error && <Error error={error} />}
        {!loading ? (
          <div className="grid w-5/6 grid-cols-1 gap-6 text-base text-blue md:max-w-screen-sm lg:w-full lg:gap-8">
            <h1 className="my-10 text-center font-poppins font-bold text-black lg:my-20">
              My Account
            </h1>
            <div className="mb-4 flex flex-col items-center justify-center gap-4">
              <Avatar src={avatar} alt="avatar" size="xl" />
              <p className="font-montserrat text-xl font-bold">{username}</p>
            </div>

            <div className="flex flex-col items-center justify-between lg:flex-row">
              <div className="flex flex-row items-center gap-2">
                <FaUserLock className="h-7 w-8 text-blue" />
                <p className="font-montserrat text-base font-bold">ID</p>
              </div>
              <p className="font-lato text-base">{userId}</p>
            </div>
            <div className="flex flex-col items-center justify-between lg:flex-row">
              <div className="flex flex-row items-center gap-2">
                <MdOutlineMail
                  className="h-8 w-8 text-blue"
                  aria-label="send email"
                />
                <p className="font-montserrat text-base font-bold">Email</p>
              </div>
              <p className="font-lato text-base">{email}</p>
            </div>
            <div className="flex flex-col items-center justify-between lg:flex-row">
              <div className="flex flex-row items-center gap-2">
                <MdDelete
                  className="h-8 w-8 text-blue"
                  aria-label="delete product"
                />
                <p className="font-montserrat font-bold">Delete account</p>
              </div>
              <button
                className="font-lato text-base underline"
                onClick={handleDelete}
              >
                Delete your account
              </button>
            </div>
            <div className="my-6 flex w-full items-center justify-center lg:mb-20 lg:mt-10">
              <Button text="LOG OUT" navTo="/" onClickFunc={logout} />
            </div>
          </div>
        ) : (
          <Loading />
        )}

        <div>
          <h2 className="mt-10 font-bold">Your Favorite Items</h2>
        </div>
        <div className="my-10 grid grid-cols-1 items-center justify-center gap-6 md:grid-cols-2 lg:w-full lg:max-w-screen-md lg:grid-cols-3">
          {favorite.length > 0 &&
            products
              .filter((product) => favorite.includes(product._id))
              .map((product) => (
                <ProductCard
                  id={product._id}
                  key={product._id}
                  templateImg={product.image}
                  tags={product.tags}
                  name={product.templateName}
                  price={product.price}
                  category={product.category}
                />
              ))}
        </div>
      </div>
    </main>
  );
};
