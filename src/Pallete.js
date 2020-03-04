import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import ColorBox from './ColorBox';
import NavBar from './NavBar';
import PaletteFooter from './PaletteFooter';
import styles from './styles/PaletteStyles';

class Pallete extends Component {

    constructor(props){
        super(props); 
        this.state = {
            level: 500,
            format: 'hex'
        }
    }

    changeLevel = (level) => {
        this.setState({ level });
    }

    changeFormat = (format) => {
        this.setState({ format });
    }

    render () {
        const { colors, emoji, paletteName, id } = this.props.palette;
        const { classes } = this.props;
        const { level, format } = this.state;

        const colorBoxes = colors[level].map(color => {
            return (
                <ColorBox
                    key={color.id}
                    background={color[format]}
                    name={color.name}
                    moreUrl={`/palette/${id}/${color.id}`}
                    showingFullPalette
                />
            );
        });

        return (
            <div className={classes.Palette}>
                    <NavBar
                        level={level}
                        changeLevel={this.changeLevel}
                        handleChange={this.changeFormat}
                        showingAllColors
                    />
                <div className={classes.colors}>{colorBoxes}</div>
                <PaletteFooter paletteName={paletteName} emoji={emoji} />
            </div>
        );
    }
}

export default withStyles(styles)(Pallete);
