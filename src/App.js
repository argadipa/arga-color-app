import React, { Component } from "react";
import Pallete from './Pallete';
import seedColors from './seedColors';
import { generatePalette } from "./ColorHelpers";

class App extends Component {
    render() {
        console.log(generatePalette(seedColors[4]));
        return(
            <div>
                <Pallete {...seedColors[4]} />
            </div>
        );
    }
}

export default App;
