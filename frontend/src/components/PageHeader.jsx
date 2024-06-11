import { NavBar } from "./NavBar"

export const PageHeader = ({placeName}) => {
    return (
        <>
        <NavBar />
        <h1>Explore the wonder of parks in {placeName}</h1>
        </>
        


    )
}