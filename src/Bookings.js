import React, {useState, useEffect} from 'react';
import Form from "./Form.js";
import Dine from "./Dine.js";

function Bookings(){

        const[book, setBook] = useState([]);
        const [load, setLoad]= useState(false);
    
       useEffect(()=>{
        
         fetch("http://localhost:3000/booked")
        .then((res) => res.json())
        .then((json)=> { 
            
            setBook(json);
            setLoad(true);
        });
        
        
        }, []);
        

        if(!load)
            return 
                <h1>Loading...</h1>;
            
        

    return (
    <div>
    <div>
       {book.map((booker)=> 
    <Form
    key = {booker.id}
    Date={booker.date}
    SeatNumber= {booker.seatNumber} 
    FoodCategory = {booker.foodCategory} 
    Book= {booker.book}/>
    )}
    </div>
    <Dine/>
    </div>
)
}

export default Bookings;