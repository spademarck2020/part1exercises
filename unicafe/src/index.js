import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => <h1>{props.title}</h1>

const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>

const Buttons = (props) => {
  return(
    <>
    <Button handleClick = {() =>props.setGood()} text='good' />
    <Button handleClick = {() =>props.setNeutral()} text='neutral' />
    <Button handleClick = {() =>props.setBad()} text='bad' />
    </>
  )
}

const Statistic = ({text, value}) => {
  return(
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = (props) => {

  if(props.all === 0){
    return(
      <p>No feedback given</p>
    )
  }

  return(
  <table>
    <tbody>
      <Statistic text='good' value={props.good} />
      <Statistic text='neutral' value={props.neutral} />
      <Statistic text='bad' value={props.bad} />
      <Statistic text='all' value={props.all} />
      <Statistic text='average' value={props.average} />
      <Statistic text='positive' value={props.positive} />
    </tbody>
  </table>
  )
}



const App = () =>{
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = good+neutral+bad
  const average = (good-bad)/all
  const positive = ((good/all)*100) + '%' 

  const getGood = () => setGood(good+1)
  const getNeutral = () => setNeutral(neutral+1)
  const getBad = () => setBad(bad+1)

  return(
    <div>
      <Header title='give feedback' />
      <Buttons setGood={getGood}
                setNeutral={getNeutral}
                setBad={getBad} />
      <Header title='statistics' />
      <Statistics good={good} neutral={neutral} bad={bad}
                  all={all} average={average} positive={positive} /> 
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))