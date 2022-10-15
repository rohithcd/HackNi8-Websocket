import "./Game.css";
import {useState, useEffect, useRef} from "react";

const Game = () => {
    const [grid, setGrid] = useState([
        [1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10],
        [11, 12, 13, 14, 15],
        [16, 17, 18, 19, 20],
        [21, 22, 23, 24, 25]
    ]);

    const [streak, setStreak] = useState(0);

    const [state, setState] = useState(0)


    function handleState() {
        setState((state) => state += 1)
    }

    useState(() => {
        generateRandom()
    }, [state])

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

    useEffect(() => {
        generateRandom()
    }, []);

    return (
        <>
        <section id="grid">
            <GenerateGrid grid={grid} streak={streak} setStreak={setStreak}/>

        </section>

        <h1>{state}</h1>
            <button onClick={handleState}>Start</button>
        </>
    );
}

export default Game;

const GenerateGrid = ({grid, streak, setStreak}) => {
    const [clicked, setClicked] = useState(new Set());
    
    const [fill, setFill] = useState({
        col1: 0,
        col2: 0,
        col3: 0,
        col4: 0,
        col5: 0,
        row1: 0,
        row2: 0,
        row3: 0,
        row4: 0,
        row5: 0,
        diag1: 0,
        diag2: 0
    });

    function handleClick(val)  {
        document.getElementById(val).classList.add("crossed");
        if(!clicked.has(val)) {
            clicked.add(val);
        }

        handleStreak()

    }

    function handleStreak() {

        if(fill.col1 == 0) {
            if(clicked.has(11) && clicked.has(21) && clicked.has(31) && clicked.has(41) && clicked.has(51)) {
                setStreak(streak + 1);
                setFill({...fill, col1: 1});
            }
        }
        if(fill.col2 == 0) {
            if(clicked.has(12) && clicked.has(22) && clicked.has(32) && clicked.has(42) && clicked.has(52)) {
                setStreak(streak + 1);
                setFill({...fill, col2: 1});
            }
        }
       if(fill.col3 == 0) {
            if(clicked.has(13) && clicked.has(23) && clicked.has(33) && clicked.has(43) && clicked.has(53)) {
                setStreak(streak + 1);
                setFill({...fill, col3: 1});
            }
        }
        if(fill.col4 == 0) {
            if(clicked.has(14) && clicked.has(24) && clicked.has(34) && clicked.has(44) && clicked.has(54)) {
                setStreak(streak + 1);
                setFill({...fill, col4: 1});
            }
        }
        if(fill.col5 == 0) {
            if(clicked.has(15) && clicked.has(25) && clicked.has(35) && clicked.has(45) && clicked.has(55)) {
                setStreak(streak + 1);
                setFill({...fill, col5: 1});
            }
        }
        if(fill.row1 == 0) {
            if(clicked.has(11) && clicked.has(12) && clicked.has(13) && clicked.has(14) && clicked.has(15)) {
                setStreak(streak + 1);
                setFill({...fill, row1: 1});
            }
        }
        if(fill.row2 == 0) {
            if(clicked.has(21) && clicked.has(22) && clicked.has(23) && clicked.has(24) && clicked.has(25)) {
                setStreak(streak + 1);
                setFill({...fill, row2: 1});
            }
        }
        if(fill.row3 == 0) {
            if(clicked.has(31) && clicked.has(32) && clicked.has(33) && clicked.has(34) && clicked.has(35)) {
                setStreak(streak + 1);
                setFill({...fill, row3: 1});
            }
        }
        if(fill.row4 == 0) {
            if(clicked.has(41) && clicked.has(42) && clicked.has(43) && clicked.has(44) && clicked.has(45)) {
                setStreak(streak + 1);
                setFill({...fill, row4: 1});
            }
        }
        if(fill.row5 == 0) {
            if(clicked.has(51) && clicked.has(52) && clicked.has(53) && clicked.has(54) && clicked.has(55)) {
                setStreak(streak + 1);
                setFill({...fill, row5: 1});
            }
        }
        if(fill.diag1 == 0) {
            if(clicked.has(11) && clicked.has(22) && clicked.has(33) && clicked.has(44) && clicked.has(55)) {
                setStreak(streak + 1);
                setFill({...fill, diag1: 1});
            }
        }
        if(fill.diag2 == 0) {
            if(clicked.has(15) && clicked.has(24) && clicked.has(33) && clicked.has(42) && clicked.has(51)) {
                setStreak(streak + 1);
                setFill({...fill, diag2: 1});
            }
        }

    }
    
    return(
        <>
            {
                grid.map((row, rowIndex) => (
                    row.map((col, colIndex) => (
                        <div className="box" id={((rowIndex+1)*10 + colIndex) + 1} onClick={() => handleClick(((rowIndex+1)*10 + colIndex) + 1)}><span>{col}</span></div>
                    ))
                ))
            }
        </>
    )
}