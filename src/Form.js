import React from "react";

function Form(){
 return(
     <div>
     <div>
     <h1>Dine with us</h1>
     </div>
     <form>
         <label>
             Date:
             <input type = "date" name="date" />
         </label>
         <label>
            Seat Number:
            <input type="number" name= "seat"/>
         </label>
         <label>
             Food Category:
             <input type="text" name= "food"/>
         </label>
         <label>
             Book:
             <input type="text" name= "text"/>
         </label>
         <label>
             <input type="submit" name="Submit" />
         </label>
         </form>
     <div className = "entry">
         <table>
             <tr>
                 <th>Date</th>
                 <th>Seat Number</th>
                 <th>Food Category</th>
                 <th>Book</th>
             </tr>
             <tr>
                 <td>ggyyg</td>
                 <td>vvhbj</td>
                 <td>vvhh</td>
                 <td>gvvvh</td>
             </tr>
         </table>
     </div>
     </div>
 )
}

export default Form;