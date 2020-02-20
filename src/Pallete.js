import React, { Component } from 'react';
import ColorBox from './ColorBox';
import './Pallete.css';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

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
            <div className='Pallete'>
                <Slider 
                    defaultValue={level}
                    min={100}
                    max={900}
                    step={100}
                    onAfterChange={this.changeLevel}
                />
                {/*Nav bar goes here */}
                <div className='Pallete-colors'>
                    {/* bunch of color boxes */}
                    {colorBoxes}
                </div>
                {/* footer */}
            </div>
        );
    }
}

export default Pallete;
