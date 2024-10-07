import React from "react";

const GRID_SIZE = 20; // Define the size of the grid
const CELL_SIZE = 40; // Define the size of each cell in pixels

export const GameBoard: React.FC = () => {
    const cells = Array.from(
        { length: GRID_SIZE * GRID_SIZE },
        (_, index) => index
    );

    // CSS variables for dynamic styling
    const gameBoardStyle: React.CSSProperties = {
        "--grid-size": GRID_SIZE,
        "--cell-size": `${CELL_SIZE}px`,
        width:  `${GRID_SIZE * CELL_SIZE}px`,
        height: `${GRID_SIZE * CELL_SIZE}px`,
    } as React.CSSProperties;

    return (
        <div className="game-board" style={gameBoardStyle}>
            {cells.map((cell) => (
                <div key={cell} className="cell" />
            ))}
        </div>
    );
};
