import React, {useState, useEffect} from 'react';

import Dine from "./Dine.js";

function Bookings(){

        const[book, setBook] = useState([]);
        const [load, setLoad]= useState(false);
    
       useEffect(()=>{
        
         fetch("https://secure-badlands-04927.herokuapp.com/booked")
        .then((res) => res.json())
        .then((json)=> { 
            
            setBook(json);
            setLoad(true);
        });
        
        
        }, []);
        

        if(!load)
            return 
                <h1>Loading...</h1>;
        
        function handleAddItem(newData){
            setBook([...book, newData])
        }
            
    
    return (
    <div className="sales">
        <div className= "diners">
        <Dine onAddItem = {handleAddItem}/>
        </div>
    {/* <div>
       {book.map((booker)=> 
    <Form
    key = {booker.id}
    Date={booker.date}
    SeatNumber= {booker.seatNumber} 
    FoodCategory = {booker.foodCategory} 
    
    />
    <div> */}
     
    <div className = "entry">
        {book.map((booker) => 
        <table>
            <tr className = "headers">
                <th>Date</th>
                <th>Seat Number</th>
                <th>Food Category</th>
                
            </tr>
            <tr>
              
                <td>{booker.date}</td>
                <td>{booker.seatNumber}</td>
                <td>{booker.foodCategory}</td>
                
            </tr>
        </table>)}
    </div>
    </div>
    
    
)
}

export default Bookings;