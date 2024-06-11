export const CountryIntro = ({topic, text, countryIntroImg, countryIntroImgAlt}) => {
    return (
        <>
          <div>
            <h2>{topic}</h2>
            <p>{text}</p>
            <img src={countryIntroImg} alt={countryIntroImgAlt} />
          </div>
        </>
    )
}