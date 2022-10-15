import "./Game.css";
import {useState, useEffect} from "react";

const Game = () => {
    const [grid, setGrid] = useState([
        [1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10],
        [11, 12, 13, 14, 15],
        [16, 17, 18, 19, 20],
        [21, 22, 23, 24, 25]
    ]);

    useEffect(() => {
        generateRandom()
    }, []);

    // function generateGrid() {
        var gridVal = [];
        

        for (let i = 0; i < grid.length; i++) {
            for(let j = 0; j < grid[i].length; j++) {
                console.log(gridVal, grid[0][0]);
                gridVal.push(<div className="grid" id={((i+1)*10 + j) + 1}>{grid[i][j]}</div>)
            }
        }

        console.log(gridVal)


        // gridVal.push(grid.map((row, rowIndex) => (
        //     row.map((col, colIndex) => (
        //         <div className="grid" id={((rowIndex+1)*10 + colIndex) + 1}>{col}</div>
        //     )
        //     )
        //     )
        // ));
    // }

    function generateRandom() {
        let i, j;
        let arr = Array.from({length: 25}, (_, i) => i + 1);

        for(i=0; i<grid.length; i++) {
            for(j=0; j<grid[i].length; j++) {
                let generated = Math.floor((Math.random() * arr.length));
                grid[i][j] = (arr.splice(generated, 1))[0];
                console.log(arr.length, generated);

            }
        }
        
        setGrid(grid);
    }

    return (
        <>
        <section id="grid">
            {gridVal}

            <button onClick={generateRandom}>Start</button>
        </section>
        </>
    );
}

export default Game;