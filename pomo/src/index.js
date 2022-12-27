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
        if(this.state.timerRunning){
            return;
        }

        if(mode === "session" && this.state.session_length <= 59){
            this.setState({
                session_length: this.state.session_length + 1,
                timer: this.state.timer + 60
            });
        } else if(mode === "break" && this.state.break_length <= 59){
            this.setState({
                break_length: this.state.break_length + 1
            })
        }
    };

    decrement = mode => {
        if(this.state.timerRunning){
            return;
        }
        
        if(mode === "session" && this.state.session_length >= 2){
            this.setState({
                session_length: this.state.session_length - 1,
                timer: this.state.timer - 60
            });
        } else if(mode === "break" && this.state.break_length >= 2) {
            this.setState({
                break_length: this.state.break_length - 1
            });
        }
    };

    reset = () => {
        this.beep.pause(); // pause the timer 
        this.beep.currentTime = 0; // change the timer to zero

        this.setState({
            break_length: 5,
            session_length: 25,
            timerRunning: false,
            timer: 1500,
            mode: "Session"
        });

        clearInterval(this.countdown);
    };

    pauseTimer = () => {
        clearInterval(this.countdown); // what is this ??? 
        this.setState({timerRunning: false}); // timerRunning --> false because we are pausing 
    };

    countDownTimer = seconds => {
        clearInterval(this.countdown);

        this.countdown = setInterval(() => {
            if(this.state.timer === 0 && this.state.mode === "Session") {
                this.beep.play();
                this.setState({
                    mode: "Break",
                    timer: this.state.break_length * 60 + 1
                });
            }

            if(this.state.timer === 0 && this.state.mode === "Break"){
                this.beep.play();
                this.setState({
                    mode: "Session",
                    timer: this.state.session_length * 60 + 1
                })
            }

            this.setState({
                timer: this.state.timer - 1
            });
        }, 1000);

        this.setState({
            timerRunning: true
        });
    };

    displayTimeLeft = seconds => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        const formattedTime = this.formatTime(minutes, remainingSeconds);

        document.title = `(${formattedTime}) ${this.state.mode} - Pomodoro Timer`;

        return formattedTime;
    };

    formatTime = (minutes, remainingSeconds) => {
        return `${minutes < 10 ? 0 : ""}${minutes}:${
            remainingSeconds < 10 ? 0 : ""
        }${remainingSeconds}`;
    };
    
    render() {
        return (
            <div id="app-container">
                <header className="flex-center">
                    <Timer 
                        mode = {this.state.mode}
                        timeLeft = {this.displayTimeLeft(this.state.timer)}
                    />
                    <div className="wrapper">

                    </div> 
                </header>
            </div>
        )
    }
}

