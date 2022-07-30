import React from "react";

function Form(){
 return(
     <>
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
             <input type="submit" name="Submit" />
         </label>
         </form>
     </>
 )
}

export default Form;