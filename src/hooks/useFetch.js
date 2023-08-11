import { useCallback, useEffect } from "react";
import { useState } from "react";
export const useFetch=(url)=>{
    const [data,setData] = useState(null);
    const [loading, setLoading]=useState(true);
    const [error,setError]= useState(null);

    const fetchData = useCallback(async ()=>{
        setLoading(true);
        try {
                let response = await fetch(url);
                if(!response.ok) throw Error('Error al consumir la api.');
                const data = await response.json();
                setData(data);
            } catch (error) {
                setData([]);
                setError(error.message); 
            }finally{
                setLoading(false);
            } 
        }
    ,[])
      useEffect(()=>{
        fetchData(setData);
      },[])
    return {data,loading,error}
}