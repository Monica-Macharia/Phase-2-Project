import React, { useEffect, useState } from 'react';
import Child from './Child'


function Dining(props){
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
    console.log(
        data)
    if (!onLoad) return <h3>Loading...</h3>;
    return (
    <div className = "fetched">
        
        {data.map((meal)=> 
    <Child
    key = {meal.idCategory}
    category={meal.strCategory}
    thumb= {meal.strCategoryThumb} 
    description = {meal.strCategoryDescription} />
        )}
           
        
    </div>
)
}

export default Dining;
