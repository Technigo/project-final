import ScrollTop from "react-scroll-to-top";

export const ScrollToTop = () => {
  return (
    <div>
      <ScrollTop
        smooth
        aria-label="Scroll to top of page"
        component={
          <div className="bg-gray-800 p-2 rounded-full">
            <p className="text-xl text-center text-white">Top</p>
          </div>
        }
      />
    </div>
  );
};
