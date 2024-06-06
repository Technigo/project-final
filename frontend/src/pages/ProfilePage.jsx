// User needs to be logged in to se Profile page,
// send user to Log in/ Sign up if not logged in.

import { Footer } from "../components/Footer";

export const ProfilePage = () => {
  return (
    <div>
      ProfilePage
      {/* add the X of the bg-main-X  and w-full to the aboveColor to make the Footer match*/}
      <Footer aboveColor={"red w-full"} />
    </div>
  );
};
