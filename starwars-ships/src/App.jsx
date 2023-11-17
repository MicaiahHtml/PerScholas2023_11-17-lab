import { useState, useEffect } from 'react'
import Header from './components/Header'
import Card from './components/Card'
import './App.css'

export default function App() {

  const [ships, setShips] = useState([])
  
  const getShipData = async () => {
    try{
      const response = await fetch("https://swapi.dev/api/starships/");
      const data = await response.json();
      setShips(data.results);
    } catch(e){
      console.error(e)
    }
  };

  useEffect(() => {
    getShipData();
    //console.log(ships);
  }, []);

  const cards = ships.map((ele) => { return <Card shipName={ ele.name } /> });

 

  return (
    <>
      <Header/>
      <div className='cardContainer'>{ cards }</div>
    </>
  )
}
//<Card name = />
// 

