import React from 'react'
import "./Card.css"

const Card = () => {
  return (
    <div className="card mt-5 d-flex flex-column">
      <div className="row card-imagen align-self-center">
        <label className="label align-self-end mb-2 mx-2">label</label>
      </div>
      <div className="card-base text-start align-self-center ">
        <h5 className="titulo mt-5 mx-3">Título</h5>
        <p className="parrafo mx-3">Párrafo</p>
      </div>
    </div>
  )
}

export default Card
