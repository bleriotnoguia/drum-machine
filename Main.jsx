// import React, { Component } from 'react'
// import ReactDOM from 'react-dom'

class Main extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: [
                {
                    keyCode: 81,
                    keyTrigger: 'Q',
                    id: 'Heater-1',
                    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
                },
                {
                    keyCode: 87,
                    keyTrigger: 'W',
                    id: 'Heater-2',
                    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
                },
                {
                    keyCode: 69,
                    keyTrigger: 'E',
                    id: 'Heater-3',
                    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
                },
                {
                    keyCode: 65,
                    keyTrigger: 'A',
                    id: 'Heater-4',
                    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
                },
                {
                    keyCode: 83,
                    keyTrigger: 'S',
                    id: 'Clap',
                    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
                },
                {
                    keyCode: 68,
                    keyTrigger: 'D',
                    id: 'Open-HH',
                    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
                },
                {
                    keyCode: 90,
                    keyTrigger: 'Z',
                    id: "Kick-n'-Hat",
                    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
                },
                {
                    keyCode: 88,
                    keyTrigger: 'X',
                    id: 'Kick',
                    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
                },
                {
                    keyCode: 67,
                    keyTrigger: 'C',
                    id: 'Closed-HH',
                    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
                }
            ],
            currentText: ""
    };
    }

    handleDrumPadClick(elt, description){
        elt.target.childNodes[0].play()
        this.setState({currentText: description})
    }

    render() {
        var data = this.state.data;
        return (
            <div id="drum-machine">
                <div id="container-dum-pad">
                    {data.map((item, index) => {
                        document.addEventListener(item.keyCode, e => this.handleDrumPadClick(e, item.id));
                        return (
                            <div className="drum-pad" id="" key={index} onClick={e => this.handleDrumPadClick(e, item.id)}>
                                <audio className='clip' src={item.url} id={item.keyTrigger} >
                                </audio>
                                {item.keyTrigger}
                            </div>
                        )
                    })}
                </div>
                <div id="display">
                    {/* <div className="controls">
                        <label htmlFor="power">Power</label>
                        <input type="radio" id="power" name="gender" value="power" />
                    </div> */}
                    <div className="controls"></div>
                    <div id="current-display">
                        <span>{this.state.currentText}</span>
                    </div>
                    {/* <div className="controls">
                        <label htmlFor="bank">Bank</label>
                        <input type="radio" id="bank" name="gender" value="bank" />
                    </div> */}
                </div>
                
            </div>
        )
    }
}

ReactDOM.render(
    <Main />, document.getElementById('root')
)