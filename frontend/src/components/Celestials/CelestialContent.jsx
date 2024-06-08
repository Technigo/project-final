import styled from "styled-components"
import sunImg from "../../assets/images/sun.png"
import moonImg from "../../assets/images/moon.png"

const SunAndMoonPage = styled.div`
  background: #000000;
  h1.space-mono-bold {
    font-family: "Space Mono";
    color: #ffffff;
  }
  p.roboto-mono {
    font-family: "Roboto Mono";
  }
`

const CelestialContent = ({ oneBody }) => {
  const imgSrc = oneBody.name.toLowerCase() === "sun" ? sunImg : moonImg

  return (
    <div>
      <SunAndMoonPage>
        <h1>The {oneBody.name}</h1>
        <img src={imgSrc} alt={oneBody.name} />
        <p>Nickname: {oneBody.nickname}</p>
        <p>Material: {oneBody.material}</p>
        <p>Surface Temperature: {oneBody.surfaceTemperature}</p>
        <p>Weather Climate: {oneBody.weatherClimate}</p>
        <p>Travel time: {oneBody.travelTime}</p>
        <p>Curiosa: {oneBody.curiosa}</p>
      </SunAndMoonPage>
    </div>
  )
}

export default CelestialContent
