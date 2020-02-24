import React, { Component } from 'react';
import ColorBox from './ColorBox';
import NavBar from './NavBar';
import './Pallete.css';


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
        const { colors } = this.props.palette;
        const { level, format } = this.state;

        const colorBoxes = colors[level].map(color => {
            return <ColorBox background={color[format]} name={color.name}/>
        });

        return (
            <div className="Pallete">
                <div className="slider">
                    <NavBar level={level} changeLevel={this.changeLevel} handleChange={this.changeFormat} />
                </div>
                {/*Nav bar goes here */}
                <div className="Pallete-colors">
                    {/* bunch of color boxes */}
                    {colorBoxes}
                </div>
                {/* footer */}
            </div>
        );
    }
}

export default Pallete;
