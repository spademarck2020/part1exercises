import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => <h1>{props.title}</h1>

const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>

const Content = ({text, value}) => <p>{text} {value}</p>

const Statistics = (props) => {
  return(
  <>
  <Content text={props.textGood} value={props.valueGood} />
  <Content text={props.textNeutral} value={props.valueNeutral} />
  <Content text={props.textBad} value={props.valueBad} />
  <Content text={props.textAll} value={props.valueAll} />
  <Content text={props.textAverage} value={props.valueAverage} />
  <Content text={props.textPositive} value={props.valuePositive} />
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
      <Statistics textGood='good' valueGood={good}
                  textNeutral='netural' valueNeutral={neutral}
                  textBad='bad' valueBad={bad}
                  textAll='all' valueAll={all}
                  textAverage='average' valueAverage={average}
                  textPositive='positive' valuePositive={positive} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))