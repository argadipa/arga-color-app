import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import PaletteList from './PaletteList';
import Pallete from "./Pallete";
import seedColors from "./seedColors";
import { generatePalette } from "./ColorHelpers";

class App extends Component {
    findPalette = id => {
        return seedColors.find(palette => {
            return palette.id === id;
        });
    };

    render() {
        return (
            <Switch>
                <Route
                    exact
                    path="/"
                    render={(routeProps) => (<PaletteList palettes={seedColors} {...routeProps}/>)}
                />
                <Route
                    exact
                    path="/palette/:id"
                    render={routeProps => (
                        <Pallete
                            palette={generatePalette(
                                this.findPalette(routeProps.match.params.id)
                            )}
                        />
                    )}
                />
            </Switch>
            // <div>
            //     <Pallete palette={generatePalette(seedColors[4])} />
            // </div>
        );
    }
}

export default App;
