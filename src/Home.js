import React from 'react';


function Home(){
    return (
    <div>
        {/* <div style={{ 
      backgroundImage: `url("https://images.unsplash.com/photo-1556379069-7c1b1b8990b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YWZyaWNhbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60")` 
    }}></div> */}
    <div className= "container">
       <h2>
           Offering the best African Dishes
        </h2> 
        <p>
        <span> Dishes prepared in Africana are carefully selected </span><br/>from hundreds of tribes accross the continent.
           <span><br/> Each made with love, for the Mama Africa.</span>
        </p>
        <button className= "action">
            Menu
        </button>
        <div>
         <img id = "main" src="https://images.unsplash.com/photo-1598452498516-76a50b446f23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjg0fHxyZXN0YXVyYW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt = "hotel"/> 
        </div>
    </div>

    </div>
)
}

export default Home;