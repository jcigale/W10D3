import React from "react";
import Tile from './tile';

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.render = this.render.bind(this)
    }

    render() {
        const {board, updateGame} = this.props;
       
        return (
            <div className='rows'>
                {board.grid.map((row, idx) => (
                    <div key={idx}>{row.map((tile, t_idx) => (
                        <Tile tile={tile} updateGame={updateGame} key={t_idx} />))}
                    </div>
                ))}
            </div>);
    }



}

export default Board;