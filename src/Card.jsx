import React, {useState, useEffect} from 'react'
import "./Card.css"

const Card = () => {

  useEffect(()=> {
    fetchData()
  }, [])
  const[items, setItems] = useState([])
  const fetchData = async () => {
    const data = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false")
    const items = await data.json();
    console.log(items)
    setItems(items)
  }
  
  return (
    <div className="card mt-5 d-flex flex-column main-card">
      <div className="row card-imagen align-self-center">
        <label className="label align-self-end mb-2 mx-2">label</label>
      </div>
      <div className="card-base text-start align-self-center ">
        <h5 className="titulo mt-5 mx-3">Título</h5>
        <p className="parrafo mx-3">Párrafo</p>
      </div> 
      <br /><br />
      
      <div className="bitcoins">
        <p>(API call example,please scroll down)</p>
      {items.map(item => (
        <p key={item.ath}>{item.id}</p>
      ))}
      </div>
    </div>
  )
}
export default Card
