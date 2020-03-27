import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import PaletteList from "./PaletteList";
import Pallete from "./Pallete";
import NewPaletteForm from "./NewPaletteForm";
import SingleColorPalette from "./SingleColorPalette";

import seedColors from "./seedColors";
import { generatePalette } from "./ColorHelpers";

import Page from './Page';
import './styles/Page.css';

class App extends Component {
    constructor(props) {
        super(props);
        const savedPalettes = JSON.parse(
            window.localStorage.getItem("palettes")
        );
        this.state = {
            palettes: savedPalettes || seedColors
        };
    }

    findPalette = id => {
        return this.state.palettes.find(palette => {
            return palette.id === id;
        });
    };

    deletePalette = id => {
        this.setState(st => ({
            palettes: st.palettes.filter(palette => palette.id !== id)
        }));
        this.syncLocalStorage();
    };

    savePalette = newPalette => {
        this.setState(
            {
                palettes: [...this.state.palettes, newPalette]
            },
            this.syncLocalStorage
        );
    };

    syncLocalStorage = () => {
        // save palettes to local storage
        window.localStorage.setItem(
            "palettes",
            JSON.stringify(this.state.palettes)
        );
    };

    render() {
        const { palettes } = this.state;
        return (
            <Route
                render={({ location }) => (
                    <TransitionGroup>
                        <CSSTransition
                            key={location.key}
                            classNames="page"
                            timeout={500}
                        >
                            <Switch location={location}>
                                <Route
                                    exact
                                    path="/palette/new"
                                    render={routeProps => (
                                        <Page>
                                            <NewPaletteForm
                                                savePalette={this.savePalette}
                                                palettes={this.state.palettes}
                                                {...routeProps}
                                            />
                                        </Page>
                                    )}
                                />
                                <Route
                                    exact
                                    path="/"
                                    render={routeProps => (
                                        <Page>
                                            <PaletteList
                                                palettes={palettes}
                                                {...routeProps}
                                                deletePalette={
                                                    this.deletePalette
                                                }
                                            />
                                        </Page>
                                    )}
                                />
                                <Route
                                    exact
                                    path="/palette/:id"
                                    render={routeProps => (
                                        <Page>
                                            <Pallete
                                                palette={generatePalette(
                                                    this.findPalette(
                                                        routeProps.match.params
                                                            .id
                                                    )
                                                )}
                                            />
                                        </Page>
                                    )}
                                />
                                <Route
                                    exact
                                    path="/palette/:paletteId/:colorId"
                                    render={routeProps => (
                                        <Page>
                                            <SingleColorPalette
                                                colorId={
                                                    routeProps.match.params
                                                        .colorId
                                                }
                                                palette={generatePalette(
                                                    this.findPalette(
                                                        routeProps.match.params
                                                            .paletteId
                                                    )
                                                )}
                                            />
                                        </Page>
                                    )}
                                />
                                <Route
                                    render={routeProps => (
                                        <Page>
                                            <PaletteList
                                                palettes={palettes}
                                                {...routeProps}
                                                deletePalette={
                                                    this.deletePalette
                                                }
                                            />
                                        </Page>
                                    )}
                                />
                            </Switch>
                        </CSSTransition>
                    </TransitionGroup>
                )}
            />
        );
    }
}

export default App;
