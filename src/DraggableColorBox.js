import React from 'react';
import { withStyles } from '@material-ui/styles';

const styles = {
    root: {
        width: "20%",
        height: "25%",
        margin: "0 auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        marginBottom: "-3.5px"
    }
};

const DraggableColorBox = ({ color, classes, name }) => {
    return (
        <div className={classes.root} style={{ backgroundColor: color }}>
            {name}
        </div>
    );
}

export default withStyles(styles) (DraggableColorBox);