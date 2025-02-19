// Code SimpleComponent Here
import React, { Component } from 'react';

export default class SimpleComponent extends Component {


    state = {
        mood: 'happy'
    };
    


    handleClick= () =>{
        let mood = "" 
        if (this.state.mood  === "happy"){
            mood = "sad"
        } else if (this.state.mood === "sad") {
            mood = "happy"
        }
        this.setState({
            ...this.state,
            mood: mood
        })
    }

    render() {
        return (
            <div onClick={this.handleClick}>{this.state.mood}</div>
        )
    }
}