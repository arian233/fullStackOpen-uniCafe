import { useState } from 'react'


const Button = ({ lable, handleClick }) => {
  return (<button onClick={handleClick}>{lable}</button>)

}

const Statistics = (props) => {
  let good = props.good
  let bad = props.bad
  let neutral = props.neutral

  if (good === 0 && neutral === 0 && bad === 0) {
    return (
      <p>No feedback given</p>
    )
  }

  return (
    <>
      <tr>all <td > {props.allClicks} </td></tr>
      <tr>average <td> {(props.good - props.bad) / props.allClicks}</td></tr>
      <tr>positive feedback <td> {props.good / props.allClicks} %</td></tr>
    </>

  )
}


function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAll] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
    setAll(allClicks + 1)
  }
  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
    setAll(allClicks + 1)
  }
  const handleBadClick = () => {
    setBad(bad + 1)
    setAll(allClicks + 1)
  }

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={handleGoodClick} lable='good' />
      <Button handleClick={handleNeutralClick} lable='neutral' />
      <Button handleClick={handleBadClick} lable='bad' />
      <h1>Statistics</h1>
      <tr>good <td> {good}</td></tr>
      <tr>neutral <td> {neutral}</td></tr>
      <tr>bad <td>{bad}</td></tr>
      <Statistics good={good} bad={bad} neutral={neutral} allClicks={allClicks} />

    </div>
  )
}

export default App;
