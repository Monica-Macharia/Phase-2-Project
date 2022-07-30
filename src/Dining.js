import React, { useEffect, useState } from 'react';



function Dining(){
    const[data, setData] = useState([]);
    const [onLoad, setOnLoad]= useState(false);

   useEffect(()=>{
    
     fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
    .then((res) => res.json())
    .then((json)=> { 
        
        setData(json.categories);
        setOnLoad(true);
    });
    }, []);
    if (!onLoad) return <h3>Loading...</h3>;
    return (
    <div>
        //map the data please
    </div>
)
}

export default Dining;
