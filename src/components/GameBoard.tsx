import React from "react";

const GRID_SIZE = 20; // Define the size of the grid

export const GameBoard: React.FC = () => {
    const rows = Array.from({ length: GRID_SIZE }, (_, i) => i);
    const cols = Array.from({ length: GRID_SIZE }, (_, i) => i);

    return (
        <div className="game-board">
            {rows.map((row) => (
                <div key={row} className="row">
                    {cols.map((col) => (
                        <div key={col} className="cell" />
                    ))}
                </div>
            ))}
        </div>
    );
};
