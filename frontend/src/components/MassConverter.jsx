import { useState } from "react"
import styled from "styled-components"
import GlobalStyles from "./GlobalStyles"

const MassConverterFont = styled.div`
  color: var(--text-color);
  font-family: var(--font-family-main);
`

const Heading = styled.h1`
  font-size: var(--font-size-h1-desktop);
  font-family: var(--font-family-headlines);
  color: #ffffff;
  text-align: center;
`

const Description = styled.p`
  font-size: var(--font-size-medium);
  font-family: var(--font-family-text);
  color: var(--text-color);
  text-align: center;
`

const Input = styled.input`
  font-family: "Roboto Mono", monospace;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
`

const Results = styled.div`
  margin-top: 20px;

  div {
    margin: 5px 0;
  }
`

const gravityFactors = {
  Mercury: 0.38,
  Venus: 0.91,
  Earth: 1.0,
  Mars: 0.38,
  Jupiter: 2.34,
  Saturn: 1.06,
  Uranus: 0.92,
  Neptune: 1.19,
  Pluto: 0.063,
}

const calculateWeight = (weight, gravityFactor) => {
  return weight * gravityFactor
}

export const MassConverter = () => {
  const [weight, setWeight] = useState("")
  const [results, setResults] = useState({})

  const handleChange = (e) => {
    setWeight(e.target.value)
  }

  const handleCalculate = () => {
    const weightInKilos = weight
    if (weightInKilos === null || weightInKilos <= 0) {
      alert("Please enter any item's weight in kilos, perhaps your pet? 🐩 🐾")
      return
    }

    const newResults = {}
    for (const [planet, gravityFactor] of Object.entries(gravityFactors)) {
      newResults[planet] = calculateWeight(
        weightInKilos,
        gravityFactor
      ).toFixed(2)
    }
    setResults(newResults)
  }

  return (
    <MassConverterFont>
      <GlobalStyles />
      <Heading>THE MASS C0NVERTER</Heading>
      <Description>
        Have you ever wondered how much you or your belongings would weigh on
        different planets? With the Mass Converter, you can explore the
        fascinating variations in weight caused by the different gravitational
        forces of each celestial body in our solar system. Simply enter the
        weight of any object in kilograms, and instantly find out its equivalent
        weight on the planets in our solar system. Whether it's your pet, a
        favorite item, or just your curiosity, this tool provides a fun and
        educational way to understand the effects of gravity beyond Earth. Try
        it now and see how your weight changes across the cosmos!
      </Description>
      <Input
        type="number"
        value={weight}
        onChange={handleChange}
        placeholder="Enter kilograms here"
      />
      <Button onClick={handleCalculate}>CALCULATE</Button>
      <Results>
        {Object.entries(results).map(([planet, weight]) => (
          <div key={planet}>
            {planet}: {weight} kilos
          </div>
        ))}
      </Results>
    </MassConverterFont>
  )
}
