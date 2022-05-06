import React from 'react'
import { useState } from 'react'
import { useCallback } from 'react';
import Button from './Button';
import Count from './Count';
import Tittle from './Tittle'



function ParentComponent() {

    const [age,setAge]=useState(29);
    const [salary,setSalary]=useState(5000);

    const incrementAge= useCallback(()=>{
        setAge(age+1)
    },[age])

    const incrementSalary= useCallback(()=>{
        setSalary(salary+1000)
    },[salary])

  return (
    <div>
        <Tittle/>
        <Count text="Age" Count={age}/>
        <Button handleClick={incrementAge}>increment Age</Button>
        <Count text="Salary" Count={salary}/>
        <Button handleClick={incrementSalary}>increment Salary</Button>
    </div>
  )
}

export default ParentComponent