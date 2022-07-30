import React from 'react';

function Child({category, thumb, description}){
    return(
    <div className = "meals">
    <h2>{category}</h2>
    <img src={thumb} alt="food" />
    <p>{description}</p>
    
    
</div>
)
}

export default Child;