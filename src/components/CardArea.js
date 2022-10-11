import React from "react";


const CardArea = (props) => {

    const { cardClicked, cards } = props
    return <div className="cardArea">
        {cards.map((card) => {
            return <div className="card" key={card.id} onClick={()=>cardClicked(card.id)}>
                <img src={card.img} className="schoolLogo" alt={card.name}/>
                <p className="schoolName">{card.name}</p>
            </div>
        })}
    </div>

}

export default CardArea