import React, { useState, useEffect } from "react";
import Square from "./square.jsx";

const Board = () => {
    const [state, setState] = useState(Array(9).fill(null));

    const [isXturn , setIsXturn] = useState(true);

    const handleClickk= (index)=>{

        const copyState = [...state];

        copyState[index] = isXturn ? 'X' : 'O';

        console.log("index",copyState);
        setState(copyState);

    }

    useEffect(() => {
    }, []); 

    console.log(state);
    
    return (
        <div className="Board-Container">
            <div className="Board-Square">
                <Square onClick={()=>handleClickk(0)} value={state[0]} /><Square onClick={()=>handleClickk(1)} value={state[1]} /><Square onClick={()=>handleClickk(2)} value={state[2]} />
            </div>
            <div className="Board-Square">
                <Square onClick={()=>handleClickk(3)} value={state[3]} /><Square onClick={()=>handleClickk(4)} value={state[4]} /><Square onClick={()=>handleClickk(5)} value={state[5]} />
            </div>
            <div className="Board-Square">
                <Square onClick={()=>handleClickk(6)} value={state[6]} /><Square onClick={()=>handleClickk(7)} value={state[7]} /><Square onClick={()=>handleClickk(8)} value={state[8]} />
            </div>
        </div>
    );
};

export default Board;
