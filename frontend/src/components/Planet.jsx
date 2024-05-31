export const Planet = ({ name, image }) => (
  <div className="planet">
    <img src={`/images/${image}`} alt={name} />
    <h1>{name}</h1>
  </div>
)
