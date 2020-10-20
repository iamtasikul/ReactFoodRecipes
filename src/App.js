import React,{useState} from 'react';
import './App.css';
import Header from "./components/Header";
import Recipes from "./components/Recipes";

function App() {
  const [search,setSearch]=useState("tasikul");

  const onInputChange=(e)=>{
    setSearch(e.target.value);
  }
  return (
    <div className="App">
      <Header search={search} onInputChange={onInputChange}/>
      <Recipes/>
    </div>
  );
}

export default App;
