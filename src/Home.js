import React from 'react';


function Home(){
    return (
    <div>
        {/* <div style={{ 
      backgroundImage: `url("https://images.unsplash.com/photo-1556379069-7c1b1b8990b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YWZyaWNhbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60")` 
    }}></div> */}
    <div className= "container">
       <h1>
           Offering the best African Dishes
        </h1> 
        <p>
        <span> Dishes prepared in Africana are carefully selected </span><br/>from hundreds of tribes accross the African continent.
           <span><br/> Each made with love.</span>
        </p>
        <button className= "action">
            Menu
        </button>
        </div>
        <div id = "main">
         <img id= "floor" src="https://images.unsplash.com/photo-1565695040813-8812dba10aca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTc1fHxyZXN0YXVyYW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt = "hotel"/> 
        </div>
        <div id= "choma">
        <img id = "meat" src="https://images.unsplash.com/photo-1508615263227-c5d58c1e5821?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YWZyaWNhbiUyMGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt= "Main dish"/>
        </div>
        
    

    </div>
)
}

export default Home;