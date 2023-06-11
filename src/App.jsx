// import React from "react";
import {useState,useEffect} from "react"
//--Contoh pakai destructuring
// import useCounter from "./Cushooks";

function App() {
  // const [counter,setCounter] = React.useState(5); //method hooks 
  //0 adalah default value
  // const [count,increment,decrement] = useCounter(0,1) //menggunakan hooks sendiri


  //Bisa memakai destructuring 
  const [counter,setCounter] = useState(0);

  //kalau mau dibates agar tidak min make bikin kondisional (if-else)

  const onDecrement = () => {
    if (counter === 0) {
      setCounter(0) // () inputan untuk ngeset
      alert("Gaboleh kurang dari 0")
    } else {
      setCounter(counter - 1)
    }
  }

  useEffect(()=> {
    // console.log("Test use effect");
    //Setiap perubahan use efect akan dieksekusi
    if (counter > 5) {
      setCounter('lebih dari 5')
    }
  }, [counter])

  return (
    <div className="App">
      <h1>Peringatan = {setCounter}</h1>
      <h1>COUNTER = {counter}</h1> 
      {/* mengapa {} karena untuk memanggil dalam jsx */}

      {/* <button onClick={onDecrement}><h1>Decrement</h1></button> */}
      {/* atau semisal decrement tidak memakai conditonal */}

      <button onClick={() => setCounter(counter - 1)}><h1>Decrement</h1></button>
      <button onClick={() => setCounter(counter + 1)}><h1>Increment</h1></button>
    </div>

    //---------------------------- Dari hooks sendiri
    // <div className="App">
    //   <h1>COUNTER = {count}</h1> 
    //   {/* mengapa {} karena untuk memanggil dalam jsx */}
    //   <button onClick={decrement}><h1>Decrement</h1></button>

    //   <button onClick={increment}><h1>Increment</h1></button>
    // </div>
  );
}

export default App;
