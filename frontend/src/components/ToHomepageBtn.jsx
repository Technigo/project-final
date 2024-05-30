import { FaArrowLeft } from "react-icons/fa"
import { Link } from "react-router-dom"

export const ToHomepageBtn = () => {
  return (
    <div>
      <Link to={"/"}>
        <FaArrowLeft />
        <span>Back to homepage</span>{" "}
      </Link>
    </div>
  )
}
