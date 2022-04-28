import React from 'react'
import { useState } from 'react'
import "./Mycar.css"
function Mycar() {
    const [car,setCar]=useState({
        name:"",
        model:"",
        pic:""
    })

    const audi=()=>{
        setCar({
            name:"Audi",
            model:"a6",
            pic:"https://imgd.aeplcdn.com/1280x720/n/cw/ec/39472/a6-exterior-right-front-three-quarter.jpeg?q=75"

        })
    }

    const lambhorgini=()=>{
        setCar({
            name:"Lambhorgini",
            model:"b",
            pic:"https://stimg.cardekho.com/images/carexteriorimages/930x620/Lamborghini/Huracan-EVO/7195/1645612088168/front-left-side-47.jpg"
        })
    }
  return (
    <div>
        <h1 className='h'>My car is {car.name}
        <br/>
        Model is {car.model}
        </h1>
        
        <div>
        <button className='btn1' onClick={audi}>Audi</button>
        <button className='btn2' onClick={lambhorgini}>Lambhorgini</button>
        </div>
        <img src={car.pic} alt='car'/>
        
    </div>
  )
}

export default Mycar