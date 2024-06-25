import { Footer } from "../components/Footer";
import { Line } from "../components/iconFolder/Line";
import { NavBarLogedIn } from "../components/NavBarLogedIn";
import { useState, useEffect } from "react"
import { ParkImage } from "../components/parkComponents/ParkImage";
import {useNavigate} from "react-router-dom"


export const LoggedPage = () => {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState(null);
  const [favPark, setFavPark] = useState("")
  const [selectedNation, setSelectedNation] = useState("All")
  const navigate = useNavigate()
  const emptyState = "./backgroundImages/hiking.jpg";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("Net-Token");
        const res = await fetch("https://parkhive.onrender.com/secrets", {
          headers: {
            Authorization: `${token}`,
          },
        });

        setStatus(res.status);
        if (res.ok) {
          const data = await res.json();
          setData(data.message);
        } else {
          const errorData = await res.json();
          console.error("Fetch error:", errorData.message || "Unknown error");
        }
      } catch (error) {
        console.error("Fetch failed:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(()=> {
    const fetchFavPark = async () => {
      try{
        const token = localStorage.getItem("Net-Token")
        const res = await fetch("https://parkhive.onrender.com/favourites",{
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `${token}`
          }
        })
        if(res.ok) {
          const data = await res.json()
          setFavPark(data.favourites)
          console.log(data)
        } else {
          const errorData = await res.json()
          console.error("Fetch error:", errorData.message || "Unknown error")
        }
      } catch(error) {
        console.error("Fetch failed:", error)
      }
    }
    fetchFavPark()
  }, [])
   
  if(status === 401) {
    return <p>Unauthorized</p>
  }

  const filteredParks = selectedNation === "All" ? favPark : favPark.filter((park) => park.nation === selectedNation)

  return (
    <>
      <section>
        <NavBarLogedIn />
        <div className="flex flex-col sm:py-[50px] sm:px-[80px] justify-center items-center">
          <h1 className="sm:text-h2sm md:text-h2lg lg:text-h2lg font-avenir text-center ">
            Save your next destination here
          </h1>
          <div>{data}</div>
          <div className="flex flex-row sm:gap-x-[30px] sm:p-[30px]">
            <button onClick={()=>setSelectedNation("All")} className="text-fontColor sm:text-textsm md:textmd lg:text-textmd transition-transform duration-300 hover:scale-105">
              All
            </button>
            <button onClick={()=>setSelectedNation("Finland")} className="text-fontColor sm:text-textsm md:textmd lg:text-textmd transition-transform duration-300 hover:scale-105">
              Finland
            </button>
            <button onClick={()=>setSelectedNation("Sweden")} className="text-fontColor sm:text-textsm md:textmd lg:text-textmd transition-transform duration-300 hover:scale-105">
              Sweden
            </button>
          </div>
          <Line className="text-center" />
        </div>
        <div className="flex sm:flex-col sm:items-center md:flex-row md:flex-wrap md:justify-center">
        {Array.isArray(filteredParks) ? (
            filteredParks.map((park) => (
              <div key={park._id} className="flex flex-col  items-center px-[13px] pt-[13px] gap-y-3 sm:w-[375px] sm:h-[418px] 
               md:w-[248px] md:h-[400px] lg:w-[413px] lg:h-[500px] ">
                <ParkImage name={park.name} alt={`${park.name}`} 
                onclick={() => navigate(`/${park.nation}/${park.name.toLowerCase().replace(/ /g, "-")}`)} 
                className={"sm:w-[349px] sm:h-[256px] md:w-[200px] md:h-[261px] lg:w-[352px] lg:h[342px] rounded "}/>
                <h2 onClick={() => navigate(`/${park.nation}/${park.name.toLowerCase().replace(/ /g, "-")}`)} className="sm:text-h2sm md:text-textlg lg:text-h2sm text-center text-fontColor">{park.name}</h2>
              </div>
            ))
          ) : (
            <div className="flex justify-center items-center sm:py-[112px] sm:px-[100px]">
          <img
            src={emptyState}
            alt="hiking"
            className="sm:w-[265px] sm:h-[245px] w-[512px] h-[512px]"
          />
        </div>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
};
