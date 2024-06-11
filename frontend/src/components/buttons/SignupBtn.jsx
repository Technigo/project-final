import {Link} from "react-router-dom"

export const SignupBtn = () => {
    return (
        <div>
            <Link to="/signup">
                <button className="bg-blue-500 text-white p-2 rounded">Signup</button>
            </Link>
        </div>
    )
} 