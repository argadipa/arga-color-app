import React, { Component } from 'react';
import ColorBox from './ColorBox';
import NavBar from './NavBar';
import './Pallete.css';


class Pallete extends Component {

    constructor(props){
        super(props);
        this.state = {
            level: 500
        }
    }

    changeLevel = (level) => {
        this.setState({ level });
    }

    render () {
        const { colors } = this.props.palette;
        const { level } = this.state;

        const colorBoxes = colors[level].map(color => {
            return <ColorBox background={color.hex} name={color.name}/>
        });

        return (
            <div className="Pallete">
                <div className="slider">
                    <NavBar level={level} changeLevel={this.changeLevel} />
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
