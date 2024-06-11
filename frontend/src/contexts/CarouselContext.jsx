// import { createContext, useState, useContext } from "react";

// const CarouselContext = createContext()

// export const CarouselProvider = ({children}) => {
//     const [carouselSettings, seCarouselSettings] = useState({
//         responsive: {
//             desktop: {
//               breakpoint: { max: 3000, min: 1440 },
//               items: 4,
//               partialVisibilityGutter: 40,
//             },
//             tablet: {
//               breakpoint: { max: 1440, min: 744 },
//               items: 3,
//               partialVisibilityGutter: 30,
//             },
//             mobile: {
//               breakpoint: { max: 744, min: 320 },
//               items: 1,
//               partialVisibilityGutter: 20,
//             },
//           },
//           infinite: true,
//           autoPlay: true,
//           autoPlaySpeed: 500,
//           ssr:true
//     })
//     return(
//         <CarouselContext.Provider value={{carouselSettings, seCarouselSettings}} >
//             {children}
//         </CarouselContext.Provider>
//     )
// }

// export const useCarousel = () => useContext(CarouselContext)