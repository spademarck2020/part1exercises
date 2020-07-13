import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => <h1>{props.title}</h1>

const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>

const Statistic = ({text, value}) => <p>{text} {value}</p>

const Statistics = (props) => {

  if(props.all === 0){
    return(
      <p>No feedback given</p>
    )
  }

  return(
  <>
  <Statistic text='good' value={props.good} />
  <Statistic text='neutral' value={props.neutral} />
  <Statistic text='bad' value={props.bad} />
  <Statistic text='all' value={props.all} />
  <Statistic text='average' value={props.average} />
  <Statistic text='positive' value={props.positive} />
  </>
  )
}



const App = () =>{
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = good+neutral+bad
  const average = (good-bad)/all
  const positive = ((good/all)*100) + '%' 

  return(
    <div>
      <Header title='give feedback' />
      <Button handleClick = {() => setGood(good + 1)} text={'good'} />
      <Button handleClick = {() => setNeutral(neutral + 1)} text={'neutral'} />
      <Button handleClick = {() => setBad(bad + 1)} text={'bad'} />
      <Header title='statistics' />
      <Statistics good={good} neutral={neutral} bad={bad}
                  all={all} average={average} positive={positive} /> 
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))