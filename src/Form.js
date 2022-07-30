import React from "react";

function Form({Date, SeatNumber,FoodCategory,Book}){
 return(
     <div>
     
     <div className = "entry">
         <table>
             <tr>
                 <th>Date</th>
                 <th>Seat Number</th>
                 <th>Food Category</th>
                 <th>Book</th>
             </tr>
             <tr>
                 <td>{Date}</td>
                 <td>{SeatNumber}</td>
                 <td>{FoodCategory}</td>
                 <td>{Book}</td>
             </tr>
         </table>
     </div>
     </div>
 )
}

export default Form;