export const ParkImgComp = ({parkImage, parkImageAlt, className}) => {
    return (
        <img src={parkImage} alt={parkImageAlt} className={`${className}`} />
    )
}