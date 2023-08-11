import { useCallback, useEffect } from "react";
import { useState } from "react";
import {useFetch} from "./hooks/useFetch";
// Fetch fuera del scope de lo que se renderiza
// const fetchData = async (setUsers)=>{
//   let response = await fetch('https://jsonplaceholder.typicode.com/users');
//   const data = await response.json();
//   setUsers(data);
// };

const App = () => {
    const [counter,setCounter] = useState(0);
    const {data,loading,error} = useFetch('https://jsonplaceholder.typicode.com/users');
    //const [users,setUsers] = useState(null);
  
    //Usando useCallBak para evitar problema del renderizado.
    // const fetchData = useCallback(async ()=>{
    //   let response = await fetch('https://jsonplaceholder.typicode.com/users');
    //   const data = await response.json();
    //   setUsers(data);
    // },[]);
    
    // useEffect(()=>{
    //   fetchData(setUsers);
    // },[])
    
    if(loading) return <p>loading</p>;
    if(error) return <p>{error}</p>
  return (
  <>
  <h1>Use effect</h1>
  <button onClick={()=>{setCounter(counter+1)}}>Counter: {counter}</button>
  <ul>
    {
      data.map((user)=>(
        <li key={user.id}>{user.name}</li>
      ))
    }
  </ul>
  </>)
}

export default App;