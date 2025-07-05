
export const InfoItem = ({image, name, race, ki, maxKi}) => {
  return (
    <div className="card">
        {/* Imagen del personaje */}
      <img src={image} alt={name} />
      <div className="character-info">
        {/* Nombre del personaje */}
        <h4>{name}</h4>
        {/* Raza del personaje */}
        <p><strong>Raza:</strong> {race}</p>
        {/* Ki actual */}
        <p><strong>Ki:</strong> {ki}</p>
        {/* Ki máximo */}
        <p><strong>Ki Máximo:</strong> {maxKi}</p>
      </div>

    </div>
  )
}
