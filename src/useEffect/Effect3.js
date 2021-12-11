import React, {useEffect, useState} from 'react'

export default function Effect3() {
const [Data, setData] = useState({});
    const getJson = async () => {
       const response = await  fetch('https://jsonplaceholder.typicode.com/todos/1');
       const data     = await response.json();
       console.log(data)
       setData(data)
       return data;
    }
    useEffect(() => {
        getJson();
    }, [])
    return (
        <div style={{width: '100%' , border: 'solid', height:'200px'}}>
            <h2>useEffect CleanUp fetch API</h2>
            <h4>Data is : {`id {`+ Data.id +`} & Title is : {`+ Data.title+`}`} </h4>
        </div>
    )
}
