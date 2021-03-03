import React from "react";


class Board extends React.Component {
    constructor(props) {
        super(props);
        this.updateGame = 
    }

    render() {
        return (
            <div>
                {this.props.board.map((row, idx) => (

                    <div key={idx}>{row.map((tile, t_idx) => (
                        <Tile tile={tile} updateGame={this.props.updateGame} key={t_idx} />))}

                    </div>
                ))}

            </div>);
    }



}