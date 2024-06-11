import { useUserStore } from "../store/useUserStore"

export const WelcomeMessage = () => {

const { user } = useUserStore()

  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40 top-40 w-3/4 tablet:w-5/12 desktop:w-3/12 h-fit bg-strong-red backdrop-blur-3xl text-center p-4 tablet:p-6 shadow-xl text-text-light font-heading rounded-md flex flex-col  gap-2 desktop:gap-6">
      <h2>Welcome {user.user.firstname}</h2>
      <p className="text-xs">You have been successfully logged in</p>
    </div>
  )
}

