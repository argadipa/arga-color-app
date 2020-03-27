import React, { PureComponent } from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/MiniPaletteStyles";
import DeleteIcon from "@material-ui/icons/Delete";

class MiniPalette extends PureComponent {

	deletePalette = (e) => {
		e.stopPropagation();
		const {openDialog, id} = this.props;
		openDialog(id);
	}

    miniColorBoxes = () => {
        const { colors, classes } = this.props;
        return colors.map(color => {
            return (
                <div
                    className={classes.miniColor}
                    style={{ backgroundColor: color.color }}
                    key={color.name}
                />
            );
        });
	};
	
	handleClick = () => {
		this.props.goToPalette(this.props.id);
	}

    render() {
        const { classes, paletteName, emoji } = this.props;
        return (
            <div className={classes.root} onClick={this.handleClick}>
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
