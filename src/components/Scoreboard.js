import React from "react";


const Scoreboard = (props) => {
    
    const { score, best } = props

    return <div className="scoreboardCont">
        <div className="score">
            <p className="scoreLabel">Current Score</p>
            <p className="scoreNumber">{ score }</p>
        </div>
        <div className="score">
            <p className="scoreLabel">Best Score</p>
            <p className="scoreNumber">{ best }</p>
        </div>
    </div>

}

export default Scoreboard;