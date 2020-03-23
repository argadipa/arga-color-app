import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/MiniPaletteStyles";
import DeleteIcon from "@material-ui/icons/Delete";
import { render } from "@testing-library/react";

class MiniPalette extends Component {

	deletePalette = (e) => {
		e.stopPropagation();
		const {deletePalette, id} = this.props;
		deletePalette(id);
	}

    miniColorBoxes = () => {
        const { colors, classes } = this.props;
        return colors.map(color => {
            return (
                <div
                    className={classes.miniColor}
                    style={{ backgroundColor: color.color }}
                    key={color.paletteName}
                />
            );
        });
    };

    render() {
        const { classes, paletteName, emoji, handleClick } = this.props;
        return (
            <div className={classes.root} onClick={handleClick}>
                <DeleteIcon
                    className={classes.deleteIcon}
                    onClick={this.deletePalette}
                />
                <div className={classes.colors}>{this.miniColorBoxes()}</div>
                <h5 className={classes.title}>
                    {paletteName} <span className={classes.emoji}>{emoji}</span>
                </h5>
            </div>
        );
    }
}

export default withStyles(styles)(MiniPalette);
