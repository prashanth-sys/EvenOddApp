// Write your code here
import './index.css'
import {Component} from 'react'

class EvenOddApp extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => ({
      count: prevState.count.Math.ceil(Math.random() * 100),
    }))
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Count {count}</h1>
        <button className="button" type="button" onClick={this.onIncrement}>
          Increment
        </button>
      </div>
    )
  }
}
export default EvenOddApp
