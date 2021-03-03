import React from "react";

class Tile extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const{tile} = this.props;
        if (tile.flagged) {
            return (
                <div className='flagged'>F</div>
            )
        } else if (tile.bombed) {
            return (
                <div className='bombed'></div>
            )
        } else if (tile.explored) {
            return (
                <div className='explored'>X</div>
            )
        } else {
            return ( <div className='tile'></div>
            )
        }
    }
}

export default Tile;