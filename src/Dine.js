import React from 'react';



function Dine(){

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
         </div>
    )

}

export default Dine;