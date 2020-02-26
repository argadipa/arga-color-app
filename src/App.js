import React, { Component } from "react";
import { Route, Switch } from 'react-router-dom';
import Pallete from './Pallete';
import seedColors from './seedColors';
import { generatePalette } from "./ColorHelpers";

class App extends Component {
    render() {
        console.log(generatePalette(seedColors[4]));
        return(
            <Switch>
                <Route exact path='/' render={() => <h1>PALETTE LIST GOES HERE</h1>  }/>
                <Route exact patch='/palette/:id' render={() => <h1>INDIVIDUAL PALETTE</h1>}/>
            </Switch>
            // <div>
            //     <Pallete palette={generatePalette(seedColors[4])} />
            // </div>
        );
    }
}

export default App;
