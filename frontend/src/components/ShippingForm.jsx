import PropTypes from "prop-types";

export const ShippingForm = ({ register }) => {
  return (
    <div className="my-6">
      <div className="grid grid-cols-2 grid-rows-4 gap-3 text-start font-montserrat text-sm lg:text-lg">
        <div>
          <label
            htmlFor="firstName"
            className="mb-1 block font-bold text-gray-700 dark:text-white"
          >
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            className="w-full rounded-md border border-light-blue px-3 py-2"
            {...register("firstName", { required: true })}
          />
        </div>
        <div>
          <label
            htmlFor="lastName"
            className="mb-1 block font-bold text-gray-700 dark:text-white"
          >
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            className="w-full rounded-md border border-light-blue px-3 py-2"
            {...register("lastName", { required: true })}
          />
        </div>
        <div className="col-span-2 mt-4 grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="email"
              className="mb-1 block font-bold text-gray-700 dark:text-white"
            >
              Email
            </label>
            <input
              type="text"
              id="email"
              className="w-full rounded-md border border-light-blue px-3 py-2"
              {...register("email", { required: true })}
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="mb-1 block font-bold text-gray-700 dark:text-white"
            >
              Phone Number
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              className="w-full rounded-md border border-light-blue px-3 py-2"
              {...register("phone", { required: true })}
            />
          </div>
        </div>
        <div className="col-span-2 mt-4">
          <label
            htmlFor="address"
            className="mb-1 block font-bold text-gray-700 dark:text-white"
          >
            Address
          </label>
          <input
            type="text"
            id="address"
            className="w-full rounded-md border border-light-blue px-3 py-2"
            {...register("address", { required: true })}
          />
        </div>
        <div className="col-span-2 mt-4">
          <label
            htmlFor="city"
            className="mb-1 block font-bold text-gray-700 dark:text-white"
          >
            City
          </label>
          <input
            type="text"
            id="city"
            className="w-full rounded-md border border-light-blue px-3 py-2"
            {...register("city", { required: true })}
          />
        </div>
        <div className="col-span-2 mt-4 grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="country"
              className="mb-1 block font-bold text-gray-700 dark:text-white"
            >
              Country
            </label>
            <input
              type="text"
              id="country"
              className="w-full rounded-md border border-light-blue px-3 py-2"
              {...register("country", { required: true })}
            />
          </div>
          <div>
            <label
              htmlFor="zipCode"
              className="mb-1 block font-bold text-gray-700 dark:text-white"
            >
              ZIP Code
            </label>
            <input
              type="text"
              id="zipCode"
              name="zipCode"
              className="w-full rounded-md border border-light-blue px-3 py-2"
              {...register("zipCode", { required: true })}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

ShippingForm.propTypes = {
  register: PropTypes.func.isRequired,
};
