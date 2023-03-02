import {Component} from 'react'
import './index.css'

class Timer extends Component {
  constructor(props) {
    super(props)
    this.state = {minute: props.minutes, second: props.seconds}
  }

  componentDidMount() {
    this.intervalId = setInterval(this.timer, 1000)
  }

  componentWillUnmount() {
    const {changeState} = this.props
    const {minute, second} = this.state
    clearInterval(this.intervalId)
    changeState(minute, second)
  }

  timer = () => {
    const {minute, second} = this.state

    console.log(second)
    console.log(minute)
    if (minute === 0) {
      if (second === 0) {
        clearInterval(this.intervalId)
      }
    } else if (second === 0) {
      this.setState(prevState => ({
        minute: prevState.minute - 1,
        second: 59,
      }))
    } else {
      this.setState(prevState => ({second: prevState.second - 1}))
    }
  }

  render() {
    const {minute, second} = this.state
    const displayMinutes = minute > 9 ? minute : `0${minute}`
    const displaySeconds = second > 9 ? second : `0${second}`
    return (
      <h1 className="time-count">
        {displayMinutes}:{displaySeconds}
      </h1>
    )
  }
}

export default Timer
