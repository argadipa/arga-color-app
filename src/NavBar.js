import React, { Component } from "react";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Snackbar from "@material-ui/core/Snackbar";
import CloseIcon from "@material-ui/icons/Close";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./NavBar.css";
import IconButton from "@material-ui/core/IconButton";

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            format: "hex",
            open: false
        };
    }

    handleFormatChange = e => {
        this.setState({
            format: e.target.value,
            open: true
        });
        this.props.handleChange(e.target.value);
    };

    closeSnackBar = () => {
        this.setState({
            open: false
        });
    };

    render() {
        const { level, changeLevel, handleChange } = this.props;
        const { format, open } = this.state;

        return (
            <header className="Navbar">
                <div className="logo">
                    <a href="#">ACP</a>
                </div>
                <div>
                    <span>Level: {level}</span>
                    <div className="slider">
                        <Slider
                            defaultValue={level}
                            min={100}
                            max={900}
                            step={100}
                            onAfterChange={changeLevel}
                        />
                    </div>
                </div>
                <div className="select-container">
                    <Select value={format} onChange={this.handleFormatChange}>
                        <MenuItem defaultValue value="hex">
                            HEX - #ffffff
                        </MenuItem>
                        <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
                        <MenuItem value="rgba">
                            RGBA - rgba(255,255,255,1)
                        </MenuItem>
                    </Select>
                </div>
                <Snackbar
                    anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                    open={open}
                    autoHideDuration={3000}
                    message={
                        <span id="message-id">
                            Format changed to {format.toUpperCase()}!
                        </span>
                    }
                    ContentProps={{
                        "aria-describedby": "message-id"
                    }}
                    onClose={this.closeSnackBar}
                    action={[
                        <IconButton>
                            <CloseIcon
                                onClick={this.closeSnackBar}
                                color="white"
                                key="close"
                                aria-label="close"
                            />
                        </IconButton>
                    ]}
                />
            </header>
        );
    }
}

export default NavBar;
