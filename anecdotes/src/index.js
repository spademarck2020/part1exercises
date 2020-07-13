import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Header = (props) => <h1>{props.text}</h1>
const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>

const App = (props) =>{
  const [selected,setSelected] = useState(0)
  const [votes,setVotes] = useState([...new Array(anecdotes.length)].map(x => 0))

  const copyVotes = [...votes]

  console.log('this is copyVotes',copyVotes)

  const getSelected = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }
  console.log(selected)

  const getVotes = () => {
    setVotes(copyVotes.map((x,index) =>{
      if(index===selected){
        return x + 1
      }
        return x
    }))
  }

  return(
    <div>
      <Header text='Anecdote of the day' />
      <p>{props.anecdotes[selected]}</p>
      <p>votes: {copyVotes[selected]}</p>
      <Button handleClick={getVotes} text='vote' />
      <Button handleClick={getSelected} text='next anecdote' />
      <Header text='Anecdote with most votes' />
      <p>{anecdotes[copyVotes.indexOf(Math.max(...copyVotes))]}</p>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)