import React from "react";
import ReactDOM from "react-dom";
// another import ( not writing rn )
import Timer from "./components/Timer";
import Button from "./components/Button"
import Settings from "./components/Settings"

import "./styles.css"

class App extends React.Component {
    state = {
        break_length: 5,
        session_length: 25,
        mode: "Session",
        timer: 1500,
        timerRunning: false
    };

    increment = mode => {
        
    };

    decrement = mode => {

    };

    reset = () => {

    };

    pauseTimer = () => {

    };

    countDownTimer = seconds => {
        
    };

    displayTimeLeft = seconds => {

    };

    formatTime = (minute, remainingSeconds) => {

    }
    
    render() {
        return (
            <div id="app-container">
                <header className="flex-center">
                    <Timer 
                        mode = {this.state.mode}
                        timeLeft = {this.displayTimeLeft(this.state.timer)}
                    />

                </header>
            </div>
        )
    }

}

