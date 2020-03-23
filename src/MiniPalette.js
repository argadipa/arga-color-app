import React from "react";
import { withStyles } from "@material-ui/styles";
import styles from './styles/MiniPaletteStyles';
import DeleteIcon from '@material-ui/icons/Delete'

const MiniPalette = props => {
    const { classes, paletteName, emoji, colors, handleClick } = props;
    const miniColorBoxes = colors.map(color => {
        return (
            <div className={classes.miniColor} style={{ backgroundColor: color.color }} key={color.paletteName}>

            </div>
        );
    });

    return (
        <div className={classes.root} onClick={handleClick}>
			<div className={classes.delete}><DeleteIcon className={classes.deleteIcon}/></div>
            <div className={classes.colors}>
                {miniColorBoxes}
            </div>
            <h5 className={classes.title}>
                {paletteName} <span className={classes.emoji}>{emoji}</span>
            </h5>
        </div>
    );
};

export default withStyles(styles)(MiniPalette);
