import React, { Component } from "react";
import MiniPalette from './MiniPalette';
import { Link } from "react-router-dom";

class PaletteList extends Component {
    render() {
        const { palettes } = this.props;
        return (
            <div>
                <h1>Arga Color App</h1>
                <MiniPalette />
                {palettes.map(palette => (
                    <MiniPalette {...palette}/>
                ))}
            </div>
        );
    }
}

export default PaletteList;
