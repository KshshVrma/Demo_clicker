import "./styles.css";
import { useState, useEffect } from "react";
export default function App() {
  const [one, setOne] = useState("");
  // useEffect(()=>{
  // fetch("https://zenquotes.io/api/quotes/").then((response)=>response.json()).then((data)=>{console.log(data)});
  // },[])

  const fun = async () => {
    const url =
      "https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random";
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "X-RapidAPI-Key": "dc0211c933msh784c6a511af560cp18fd40jsn50bf74f41c83",
        "X-RapidAPI-Host": "matchilling-chuck-norris-jokes-v1.p.rapidapi.com"
      }
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
      setOne(result.value);
      console.log(23);
      console.log(one);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="App">
      <button onClick={fun}>click here</button>
      <br />
      {one}
    </div>
  );
}
