import {Link} from "react-router-dom"

export const WebName = () => {
  return(
   <div className="web-name">
    <header>
        <Link to="/"><h1>ParkHive</h1></Link>
    </header>
   </div>
  )
}