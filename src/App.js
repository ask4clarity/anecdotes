import { useState } from 'react'

const Button = ({click, text}) => (
  <button onClick={click}>
    {text}
  </button>
)

const Anecdote = ({text, vote}) => {
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{text}</p>
      {vote}
    </div>
  )
}

const Winner = ({text}) => {
  return (
    <div>
      <h1>Anecdote with most votes</h1>
      <p>{text}</p>
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
   
  const [selected, setSelected] = useState(0)
  const [allVotes, setAllVotes] = useState(Array(7).fill(0))

  const random = () => setSelected(Math.floor(Math.random() * anecdotes.length))

  const vote = () => {
    const copy = [...allVotes]
    copy[selected] += 1
    setAllVotes(copy)
  }

  const highest = Math.max(...allVotes)
  const winner = anecdotes[allVotes.indexOf(highest)]

  return (
    <div>
      <Anecdote text={anecdotes[selected]} vote={allVotes[selected]}/>
      <Button click={random} text='next anecdote'/>
      <Button click={vote} text='vote'/>
      <Winner text={winner}/>
    </div>
  )
}

export default App