// Write your code here
import {Component} from 'react'
import Timer from '../Timer'
import './index.css'

class DigitalTimer extends Component {
  state = {minutes: 25, seconds: 0, isPaused: true, setMinutes: 25}

  clickStart = () => {
    this.setState(prevState => ({isPaused: !prevState.isPaused}))
  }

  changeState = (minute, second) => {
    this.setState({minutes: minute, seconds: second})
  }

  clickMainess = () => {
    this.setState(prevState => ({
      minutes: prevState.minutes - 1,
      setMinutes: prevState.minutes - 1,
    }))
  }

  clickPlus = () => {
    this.setState(prevState => ({
      minutes: prevState.minutes + 1,
      setMinutes: prevState.minutes + 1,
    }))
  }

  clickReset = () => {
    this.setState({minutes: 25, seconds: 0, isPaused: true, setMinutes: 25})
  }

  render() {
    const {minutes, seconds, isPaused, setMinutes} = this.state
    const displayMinutes = minutes > 9 ? minutes : `0${minutes}`
    const displaySeconds = seconds > 9 ? seconds : `0${seconds}`
    const displayText = isPaused ? 'Paused' : 'Running'
    const startOrPauseText = isPaused ? 'Start' : 'Pause'
    const imgUrl = isPaused
      ? 'https://assets.ccbp.in/frontend/react-js/play-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/pause-icon-img.png'
    const altText = isPaused ? 'play icon' : 'pause icon'
    const setMainess = isPaused ? this.clickMainess : ''
    const setPlus = isPaused ? this.clickPlus : ''
    return (
      <div className="container">
        <h1>Digital Timer</h1>
        <div className="digital-timer">
          <div className="bg-image">
            <div className="bg-card">
              {isPaused ? (
                <h1 className="time-count">
                  {displayMinutes}:{displaySeconds}
                </h1>
              ) : (
                <Timer
                  minutes={minutes}
                  seconds={seconds}
                  changeState={this.changeState}
                />
              )}
              <p className="bg-card-text">{displayText}</p>
            </div>
          </div>
          <div className="manage-card">
            <div className="pauseAndReset">
              <div className="startAndPause">
                <button
                  type="button"
                  className="button"
                  onClick={this.clickStart}
                >
                  <img src={imgUrl} alt={altText} className="button" />
                  {startOrPauseText}
                </button>
              </div>
              <div className="reset">
                <button
                  type="button"
                  className="button"
                  onClick={this.clickReset}
                >
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                    alt="reset icon"
                    className="button"
                  />
                </button>
                <p>Reset</p>
              </div>
            </div>
            <p>Set Timer Limit</p>
            <div className="set-timer-limit">
              <button
                type="button"
                className="timer-button"
                onClick={setMainess}
              >
                -
              </button>
              <p className="timer-text">{setMinutes}</p>
              <button type="button" className="timer-button" onClick={setPlus}>
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DigitalTimer
