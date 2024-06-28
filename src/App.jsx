import './App.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

function App() {
  const [principle, setPrinciple]= useState(0)
  const [rate, setRate]=useState(0)
  const [year, setYear]=useState(0)
  const [interest, setInterest]=useState(0)

  const [isPrinciple,setIsprinciple]=useState(true)
  const [isRate,setIsrate]=useState(true)
  const [isYear,setIsyear]=useState(true)
  
  const validate = (e)=>{
    const name= e.target.name
    const value= e.target.value
    /* console.log(name,value);
    console.log(!!value.match(/^[0-9]*$/)); */

    if(!!value.match(/^[0-9]*$/)){
      if(name=='principle'){
        setPrinciple(value)
        setIsprinciple(true)
      }
      else if(name=='rate'){
        setRate(value)
        setIsrate(true)
      }
      else{
        setYear(value)
        setIsyear(true)
      }
    }
    else{
      if(name=='principle'){
        setPrinciple(value)
        setIsprinciple(false)
      }
      else if(name=='rate'){
        setRate(value)
        setIsrate(false)
      }
      else{
        setYear(value)
        setIsyear(false)
      }
    }


  }
  
  const handleReset=()=>{
    setPrinciple(0)
    setRate(0)
    setYear(0)
    setIsprinciple(true)
    setIsrate(true)
    setIsyear(true)
  }

  const handleCalculate=(e)=>{
    e.preventDefault()

    if(principle=="" || rate=="" || year==""){
      alert('please fill the form completely')
    }
    else{
      setInterest((principle*rate*year)/100)
    }


  }

  return (
    <>
    <div style={{backgroundColor:'black',height:'100vh'}} className='d-flex align-items-center justify-content-center'>
      <div style={{backgroundColor:'white', width:'500px'}} className='p-4 rounded'>
        <h1>Simple Interest App</h1>
        <p>calculate your simple Interest easily</p>
        <div style={{height:'150px', backgroundColor:'orange'}} className='p-3 mt-5 rounded shadow d-flex align-items-center justify-content-center flex-column'>
          <h1 className='fw-bold'>{interest}</h1>
          {!isPrinciple &&
            <p>Total Simple Interest</p>}
        </div>
        <form className='mt-5' onSubmit={handleCalculate}>
            <div className="mb-3">
            <TextField id="outlined-basic" label="Principle amount" value={principle || ""} variant="outlined" className='w-100' onChange={(e)=>validate(e)} name='principle' />
              {!isPrinciple &&
                <p className='text-danger'>*invalid input</p>
              }
            </div>
            <div className="mb-3">
            <TextField id="outlined-basic" label="Rate of Interest (p.a)%" value={rate || ""} variant="outlined" className='w-100' onChange={(e)=>validate(e)} name='rate'/>
            {!isRate &&
              <p className='text-danger'>*invalid input</p>
            }
            </div>
            <div className="mb-3">
            <TextField id="outlined-basic" label="Year(Yr)" value={year || ""} variant="outlined"className='w-100' onChange={(e)=>validate(e)} name='year' />
            {!isYear &&
              <p className='text-danger'>*invalid input</p>
            }
            </div>
            <div className="mb-3 d-flex justify-content-between">
            <Button variant="contained" color='success' type='submit' style={{width:'200px', padding:'15px'}} disabled={isPrinciple && isRate && isYear?false:true}>CALCULATE</Button>
            <Button variant="outlined" color='primary' style={{width:'200px', padding:'15px'}} onClick={handleReset}>RESET</Button>
            </div>
          </form>


      </div>

    </div>
     
    </>
  )
}

export default App
