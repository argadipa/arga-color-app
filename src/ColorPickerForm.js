import React, { Component } from "react";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { ChromePicker } from "react-color";
import { withStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";

const styles = {
	picker: {
		width: "100% !important",
		marginTop: "2rem"
	},
	addColor: {
		width: "100%",
		padding: "1rem",
		marginTop: "1rem",
		fontSize: "2rem"
	},
	colorNameInput: {
		width: "100%",
		height: "70px"
	}
}

export class ColorPickerForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentColor: "teal",
            newColorName: ""
        };
    }

    componentDidMount() {
        ValidatorForm.addValidationRule("isColorNameUnique", value =>
            this.props.colors.every(
                ({ name }) => name.toLowerCase() !== value.toLowerCase()
            )
        );

        ValidatorForm.addValidationRule("isColorUnique", value =>
            this.props.colors.every(
                ({ color }) => color !== this.state.currentColor
            )
        );
    }

    updateCurrentColor = newColor => {
        this.setState({
            currentColor: newColor.hex
        });
    };

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = () => {
        const newColor = {
            color: this.state.currentColor,
            name: this.state.newColorName
        };
		this.props.addNewColor(newColor);
		this.setState({ newColorName: "" });
    };

    render() {
        const { paletteIsFull, classes } = this.props;
        const { currentColor, newColorName } = this.state;
        return (
            <div>
                <ChromePicker
                    color={currentColor}
					onChangeComplete={this.updateCurrentColor}
					className={classes.picker}
                />
                <ValidatorForm onSubmit={this.handleSubmit}>
                    <TextValidator
						name="newColorName"
						className={classes.colorNameInput}
						value={newColorName}
						variant="filled"
						margin="normal"
						placeholder="Color Name"
                        onChange={this.handleChange}
                        validators={[
                            "required",
                            "isColorNameUnique",
                            "isColorUnique"
                        ]}
                        errorMessages={[
                            "Enter a color name",
                            "Color name must be unique",
                            "Color must be unique"
                        ]}
                    />
                    <Button
                        variant="contained"
                        style={{
                            backgroundColor: paletteIsFull
                                ? "grey"
                                : currentColor
                        }}
                        type="submit"
						disabled={paletteIsFull}
						className={classes.addColor}
                    >
                        {paletteIsFull ? "Palette Full" : "Add Color"}
                    </Button>
                </ValidatorForm>
            </div>
        );
    }
}

export default withStyles(styles) (ColorPickerForm);
