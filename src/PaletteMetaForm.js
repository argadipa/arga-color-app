import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { Picker } from "emoji-mart";
import 'emoji-mart/css/emoji-mart.css';

class PaletteMetaForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stage: "form",
            newPaletteName: ""
        };
    }

    componentDidMount() {
        ValidatorForm.addValidationRule("isPaletteNameUnique", value =>
            this.props.palettes.every(
                ({ paletteName }) =>
                    paletteName.toLowerCase() !== value.toLowerCase()
            )
        );
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
	};
	
	showEmojiPicker = () => {
		this.setState({
			stage: "emoji"
		});
	}

	savePalette = (emoji) => {
		const newPalette = {
            paletteName: this.state.newPaletteName,
            emoji: emoji.native
        };
		this.props.handleSubmit(newPalette);
		this.setState({ stage: "" });
	}

    render() {
		const { newPaletteName, stage } = this.state;
		const { hideForm } = this.props;

        return (
            <div>
                <Dialog open={stage === "emoji"} onClose={hideForm}>
					<DialogTitle id="form-dialog-title">Choose a Palette Emoji</DialogTitle>
                    <Picker onSelect={this.savePalette}/>
                </Dialog>
                <Dialog
                    open={stage === "form"}
                    onClose={hideForm} // called when backround clicked!
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">
                        Choose a Palette Name
                    </DialogTitle>
                    <ValidatorForm
						//onSubmit={() => this.props.handleSubmit(newPaletteName)}
						onSubmit={this.showEmojiPicker }
                    >
                        <DialogContent>
                            <DialogContentText>
                                Please enter a name for your beautiful palette.
                                Make sure the name is unique!
                            </DialogContentText>

                            <TextValidator
                                name="newPaletteName"
                                label="Palette Name"
                                value={newPaletteName}
                                fullWidth
                                onChange={this.handleChange}
                                margin="normal"
                                validators={["required", "isPaletteNameUnique"]}
                                errorMessages={[
                                    "Enter Palette Name",
                                    "Palette Name Must be Unique"
                                ]}
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={hideForm} color="primary">
                                Cancel
                            </Button>
                            <Button
                                variant="contained"
                                color="primary"
                                type="submit"
                            >
                                Save Palette
                            </Button>
                        </DialogActions>
                    </ValidatorForm>
                </Dialog>
            </div>
        );
    }
}

export default PaletteMetaForm;
