// import { useState } from "@material-tailwind/react";

import { useState } from "react";

export const Testimonial = () => {
  const [page, setPage] = useState("1");
  const changePage = (e) => {
    const pageNum = e.target.value;
    setPage(pageNum);
  };
  return (
    <>
      <div className="flex flex-row gap-6 lg:grid lg:grid-cols-3">
        <div
          className={`${page == 1 ? "flex" : "hidden"} h-full flex-row items-center gap-5 rounded-md bg-white px-5 py-8 lg:flex`}
        >
          <div className="flex flex-col items-center gap-2">
            <div className="w-16 overflow-clip rounded-full">
              <img
                className="object-cover"
                src="https://ca.slack-edge.com/T6RP2QWTG-U068L2L5MFX-6ef1691d4f79-512"
                alt="client avtar"
              />
            </div>
            <p className="font-montserrat font-bold">Wen</p>
          </div>
          <p className="font-lato">
            Excellent customer service. The product was even better than
            expected. I will definitely be a returning customer.
          </p>
        </div>
        <div
          className={`${page == 2 ? "flex" : "hidden"}  h-full flex-row items-center gap-5 rounded-md bg-white px-5 py-8 lg:flex`}
        >
          <div className="flex flex-col items-center gap-2">
            <div className="w-16 overflow-clip rounded-full">
              <img
                className="object-cover"
                src="https://ca.slack-edge.com/T6RP2QWTG-U068NSKRC83-3b4ae898b410-512"
                alt="client avtar"
              />
            </div>
            <p className="font-montserrat font-bold">Mai</p>
          </div>
          <p className="font-lato">
            Beautifully designed website with intuitive layout. The product
            quality was better than anticipated. I look forward to shopping here
            again.
          </p>
        </div>
        <div
          className={`${page == 3 ? "flex" : "hidden"} h-full flex-row items-center gap-5 rounded-md bg-white px-5 py-8 lg:flex`}
        >
          <div className="flex flex-col items-center gap-2">
            <div className="w-16 overflow-clip rounded-full">
              <img
                className="object-cover"
                src="https://ca.slack-edge.com/T6RP2QWTG-U01UUB1KGH1-114ae9078b11-512"
                alt="client avtar"
              />
            </div>
            <p className="font-montserrat font-bold">Sofie</p>
          </div>
          <p className="font-lato">
            The website&apos;s design is sleek and user-friendly. The product
            was even better than expected. I will definitely be a returning
            customer.
          </p>
        </div>
      </div>
      <span className="mt-5 flex flex-row place-content-center gap-4 lg:hidden">
        <button
          aria-label="click here"
          className={`h-5 w-5 rounded-full ${page == 1 ? "bg-blue" : "bg-white"}`}
          onClick={changePage}
          value={1}
        ></button>
        <button
          aria-label="click here"
          className={`h-5 w-5 rounded-full ${page == 2 ? "bg-blue" : "bg-white"}`}
          onClick={changePage}
          value={2}
        ></button>
        <button
          aria-label="click here"
          className={`h-5 w-5 rounded-full ${page == 3 ? "bg-blue" : "bg-white"}`}
          onClick={changePage}
          value={3}
        ></button>
      </span>
    </>
  );
};
