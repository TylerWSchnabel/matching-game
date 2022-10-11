import React from "react";


const CardArea = (props) => {

    const { shuffleCards, cards } = props
    shuffleCards();

    return <div className="cardArea">
        {cards.map((card) => {
            return <div className="card" key={card.id} onClick={shuffleCards}>
                <img src={card.img} className="schoolLogo" alt={card.name}/>
                <p className="schoolName">{card.name}</p>
            </div>
        })}
    </div>

}

export default CardArea