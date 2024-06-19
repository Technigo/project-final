import { NavLink } from "react-router-dom"

export const StickyButton = () => {
  return (
    <NavLink to="/signup">
      <button className="bg-cta-blue px-6 py-2 rounded-full hover:bg-cta-blue-hover z-30 fixed bottom-10 right-10 laptop:right-20 desktop:right-36 text-text-light font-heading">Sign up</button>
    </NavLink>
  )
}

