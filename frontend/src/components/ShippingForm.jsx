export const ShippingForm = () => {
  return (
    <div className="my-6">
      <div className="grid grid-cols-2 grid-rows-4 gap-3 text-start font-montserrat text-sm lg:text-lg">
        <div>
          <label
            htmlFor="first_name"
            className="mb-1 block font-bold text-gray-700 dark:text-white"
          >
            First Name
          </label>
          <input
            type="text"
            id="first_name"
            className="w-full rounded-md border border-light-blue px-3 py-2"
          />
        </div>
        <div>
          <label
            htmlFor="last_name"
            className="mb-1 block font-bold text-gray-700 dark:text-white"
          >
            Last Name
          </label>
          <input
            type="text"
            id="last_name"
            className="w-full rounded-md border border-light-blue px-3 py-2"
          />
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
          />
        </div>
        <div className="col-span-2 mt-4 grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="state"
              className="mb-1 block font-bold text-gray-700 dark:text-white"
            >
              State
            </label>
            <input
              type="text"
              id="state"
              className="w-full rounded-md border border-light-blue px-3 py-2"
            />
          </div>
          <div>
            <label
              htmlFor="zip"
              className="mb-1 block font-bold text-gray-700 dark:text-white"
            >
              ZIP Code
            </label>
            <input
              type="text"
              id="zip"
              className="w-full rounded-md border border-light-blue px-3 py-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
