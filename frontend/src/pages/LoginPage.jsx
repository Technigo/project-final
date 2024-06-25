import { Footer } from "../components/Footer";
import { BackHome } from "../components/buttons/BackHome";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react"
import Loading from "../assets/loading.json"
import { useState } from "react"
import { useAuthData } from "../contexts/AuthContext";

export const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const {login} = useAuthData()

  const navigate = useNavigate();

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    
    try{
      const res = await fetch ("https://parkhive.onrender.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: e.target.email.value,
          password: e.target.password.value
        })
      })
      if(!res.ok) {
        const errorData = await res.json()
        throw new Error (errorData.message || "Failed to login")
      }
      const data = await res.json()
      console.log(data)
      login(data.email, data.token)
      console.log(localStorage.getItem("Net-Token"))
      navigate("/logged")
    } catch(error) {
      console.error("Login error:", error)
      alert("Login failed:" + error.message)
    } finally{
      setLoading(false)
    }
  };

  if (loading) {
    return (<div >
      {loading && (<Lottie animationData={Loading}
      loop={true} className="w-[300px] h-[300px]"
      />)}
    </div>
    );
  }

  return (
    <>
      <section className="relative flex flex-col justify-center items-center ">
        <div className="absolut bg-login-image bg-cover bg-center right-0 top-0 object-cover sm:h-[180px] md:h-[315px] lg:h-[564px] w-full flex items-center justify-center">
          <BackHome
            className={
              "text-cardBg flex flex-row gap-x-3 absolute left-[30px] top-[30px] transition-transform duration-300 hover:scale-110"
            }
          />
          <h1 className="text-cardBg sm:text-h1sm md:text-h1md lg:text-h1lg">
            Login
          </h1>
        </div>

        <div className="flex justify-center sm:pt-[80px] ">
          <form
            onSubmit={handleLoginSubmit}
            className="flex flex-col sm:gap-y-[80px] items-center"
          >
            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="text-fontColor sm:text-h2sm sm:pb-2 lg:text-h2md"
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@gmail.com"
                required
                className="border-2 rounded sm:w-[243px] sm:h-[43px] md:w-[300px] md:h-[40px] lg:w-[300px] lg:h-[40px]"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="password"
                className="text-fontColor sm:text-h2sm sm:pb-2 lg:text-h2md"
              >
                Password：
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="********"
                required
                className="border-2 rounded sm:w-[243px] sm:h-[43px] md:w-[300px] md:h-[40px] lg:w-[300px] lg:h-[40px]"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="text-bg2 bg-bg1 rounded sm:text-h2sm lg:text-h2md py-[5px] px-[10px]"
            >
              {loading? "Logging in..." : "Login"}
            </button>
          </form>
        </div>
        <div className="sm:p-3 sm:pb-[80px]">
          <p className="text-fontColor sm:text-textsm md:textmd lg:text-textmd">
            Or you can sign up{" "}
            <a href="/signup" className="text-bg2">
              here
            </a>
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
};