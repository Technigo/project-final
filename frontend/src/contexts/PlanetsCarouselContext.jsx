import { createContext, useContext, useState } from "react";
import { useSwipeable } from "react-swipwable";
// // Import for pictures in the carousel

// const PlanetsCarouselContext = createContext()

// export const PlanetsCarouselProvider = ({children}) => {
//   const [planetNumber, setPlanetNumber] = useState(0)

//   const planets = [
//     {
//       planetImage: planet1,
//     }
//     {
//       planetImage: planet2,
//     }{
//       planetImage: planet3,
//     }{
//       planetImage: planet5,
//     }{
//       planetImage: planet6,
//     }{
//       planetImage: planet7,
//     }{
//       planetImage: planet8,
//     }
//   ]
//   const navigation = useSwipeable({
//     onSwipedRight: () => {
//       setPlanetNumber((prevNumber) =>
//       prevNumber === 0 ? planets.lenght - 1 : prevNumber - 1 
//       )
//     },
//     onSwipedLeft: () => {
//       setPlanetNumber((prevNumber) =>
//       prevNumber === planets.length -1 ? 0 : prevNumber + 1)
//     },
//     preventDefaultTouchmoveEvent: true,
//     preventScrollOnSwipe: true,
//     trackMouse: true,
//   })

//   const changeNumber = (newNumber) => {
//     setPlanetNumber(newNumber)
//   }
//   return (
//     <PlanetsCarouselContext.Provider
//     value={{
//       planetNumber,
//       planets,
//       navigation,
//       changeNumber,
//     }}
//     >
//       {children}
//       </PlanetsCarouselContext.Provider>
//   )
// };

// export const useCarousel = () => useContext(PlanetsCarouselContext)
