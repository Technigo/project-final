import { useUserStore } from "../store/useUserStore"
import Lottie from "lottie-react";
import animation from "../assets/animation-success.json"

export const WelcomeMessage = () => {

const { user } = useUserStore()

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-overlay backdrop-blur-sm flex items-center justify-center z-30">
        <div className="w-2/3 tablet:w-1/3 desktop:w-3/12 my-20 rounded-lg bg-login border-main-red border-opacity-50 backdrop-blur-sm p-8 relative flex justify-between">
      <div className="font-heading text-text-light"><h2 className="text-xl mb-4">Welcome {user.user.firstname}</h2>
      <p className="text-sm">You have been successfully logged in</p></div>
      <Lottie
              animationData={animation}
              loop={false}
              autoPlay
              style={{ width: 100, height: 100 }}
            />
        </div>
    </div>
  )
}

