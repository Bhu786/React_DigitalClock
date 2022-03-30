
import './App.css';
import React,{useState} from 'react';

function App() {

 let time=new Date().toLocaleTimeString();

 const[ctime,setCtime]=useState(time);

const UpdateTime=()=>{
  time=new Date().toDateTimeString();
  setCtime(time);
}

setInterval(UpdateTime,1000);


  return (
    < >
      <h1 className='time'>   { ctime }</h1>
    </>
  );
}

export default App;
