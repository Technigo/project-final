// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
// import { Link } from 'react-router-dom';
// import { ParkImage } from './ParkImage'; // Adjust the import path as needed
// import { useCarousel } from "../../contexts/CarouselContext"// Adjust the import path as needed

// const CustomDot = ({onClick, active}) => {
//     return (
//         <button
//       className={`w-3 h-3 rounded-full mx-1 focus:outline-none ${
//         active ? 'bg-green-500' : 'bg-gray-300'
//       }`}
//       onClick={onClick}
//     /> 
//     )
// }

// export const SampleCarousel = ({parkData}) => {
//     const {carouselSettings} = useCarousel
//     const showDots = typeof window !== 'undefined' ? window.innerWidth >= 768 : true;
//     return (
//         <Carousel
//         {...carouselSettings}
//         containerClass="carousel-container"
//       itemClass="carousel-item-padding-40-px"
//       keyBoardControl={true}
//       removeArrowOnDeviceType={["tablet", "mobile"]}
     
//       dotListClass="custom-dot-list-style"
//       showDots={showDots}
//       customDot={CustomDot} // Conditionally render dots
//     >
//               {parkData.map((park) => (
//         <div key={park._id} className="p-4">
//           <Link
//             to={`/${park.nation}/${park.name.toLowerCase().replace(/ /g, "-")}`}
//           >
//             <ParkImage
//               name={park.name}
//               alt={`${park.name}`}
//               className={"w-[380px] h-[500px]"}
//             />
//           </Link>
//           <Link
//             to={`/${park.nation}/${park.name.toLowerCase().replace(/ /g, "-")}`}
//           >
//             <h3>{park.name}</h3>
//           </Link>
//           <p>{park.introduction.slice(0, 100)}</p>
//         </div>
//       ))}
//     </Carousel>
//     )
// }
