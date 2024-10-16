import React, { useState, useEffect } from "react";
import Square from "./square.jsx";

const Board = () => {
    const [state, setState] = useState(Array(9).fill(null));

    const [isXturn , setIsXturn] = useState(true);

    // const checkWinner = (squares) => {
    //     const lines = [
    //         [0, 1, 2],
    //         [3, 4, 5],
    //         [6, 7, 8],
    //         [0, 3, 6],
    //         [1, 4, 7],
    //         [2, 5, 8],
    //         [0, 4, 8],
    //         [2, 4, 6],
    //     ];
    //     for (let i = 0; i < lines.length; i++) {
    //         const [a, b, c] = lines[i];
    //         if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
    //             return squares[a];
    //         }
    //     }
    //     return null;
    // }


    const checkWinner = () => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
       
        for (let logic of lines){
            const [a,b,c] = logic;
            if(state[a] !== null && state[a] === state[b] && state[a] === state[c]){
                return state[a];
        }
    }

    return false;
    }

    const isWinner = checkWinner();

    const handleClickk= (index)=>{
        if(isWinner || state[index] !== null){
            return;
        }

        const copyState = [...state];

        copyState[index] = isXturn ? 'X' : 'O';

        console.log("index",copyState);
        setState(copyState);

        setIsXturn(!isXturn);

    }

    const handelReset = () => {
        setState(Array(9).fill(null));
    }

    useEffect(() => {
    }, []); 

    console.log(state);
    
    return (
        <>
       { isWinner ?(
         <>{isWinner} Wone the game <button onClick={handelReset}> Play Again</button></>
       ):(
       <>
         <h1> Tic Tac Toe</h1>
        <h2> Player {isXturn ? 'X' : 'O'} Make Your Move </h2>
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
        </>)}
        </>
    );
};

export default Board;

