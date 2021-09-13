import React from 'react';


function CardPequeno(props) {
    return (
        <div className="smallcard-container">
                <h4>{ props.item}</h4>
                <p>{ props.resposta}</p>
            </div>
    )
}

export default CardPequeno;