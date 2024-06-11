import PropTypes from "prop-types";

import { Drawer } from "@material-tailwind/react";
import { Button } from "./Button";

export const SideDrawer = ({ openRight, setOpenRight }) => {
  // const [openRight, setOpenRight] = useState(false);
  const closeDrawerRight = () => setOpenRight(false);

  return (
    <Drawer
      placement="right"
      open={openRight}
      onClose={closeDrawerRight}
      className="p-4 shadow-none"
    >
      <div className="mt-6 flex flex-col items-center gap-10">
        <p className="font-lato text-xl">
          You have not logged in yet. Please log in to save your favorite items.
        </p>
        <Button text="Log in" navTo={"/login"} />
        <Button text="Sign up" navTo={"/signup"} />
      </div>
    </Drawer>
  );
};

SideDrawer.propTypes = {
  openRight: PropTypes.bool.isRequired,
  setOpenRight: PropTypes.func.isRequired,
};
