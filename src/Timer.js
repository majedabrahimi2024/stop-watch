import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';

let interval;
class Timer extends React.Component {
    constructor(){
      super();
      this.state = {
        hour:0,
        minute:0,
        second:0,
        isStart:false,
      }
    }
    startCount = ()=>{
        if(this.state.isStart === false){
            this.setState({
                isStart:true,
            })
            interval = setInterval(()=>{
                this.setState({
                    second:this.state.second + 1
                })
                if(this.state.second == 59){
                    this.setState({
                        second:0,
                        minute:this.state.minute + 1
                    })
                    if(this.state.minute == 59){
                        this.setState({
                            minute:0,
                            hour:this.state.hour + 1
                        })
                        if(this.state.hour == 23){
                            this.setState({
                                hour:0,
                                minute:0,
                                second:0,
                            })
                        }
                    }
                }
            },1000)
        }
    }
    stopCount = ()=>{
        this.setState({
            isStart:false,
        })
        clearInterval(interval)
    }
    resetCount = ()=>{
        this.stopCount();
        this.setState({
            hour:0,
            minute:0,
            second:0,
        });
    };
    render(){
        let h = this.state.hour;
        let m = this.state.minute;
        let s = this.state.second;
        return(
            <div>
                <div className='timer'>
                <div>{`${h > 9 ? h: "0"+h}`} : {`${m > 9 ? m: "0"+m}`} : {`${s > 9 ? s: "0"+s}`}</div>
                {/* <button onClick={this.props.handleSetTitle}>change title</button> */}
                </div>
                <div className='btnContainer'>
                    <button className='btn startBtn' onClick={this.startCount}>start</button>
                    <button className='btn stopBtn' onClick={this.stopCount}>stop</button>
                    <button className='btn resetBtn' onClick={this.resetCount}>reset</button>
                </div>
            </div>
        )
    }
};
export default Timer;