import { useState } from 'react'

const Button = ({text, onClick}) => <button onClick={onClick}>{text}</button>

const Anecdote = ({text, votes, header}) => {
  return (
    <> 
      <h1>{header}</h1>
      <p>{text}</p>
      <p>has {votes} votes</p>
    </>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  
  const [mostVoted, setMostVoted] = useState({anecdote: anecdotes[0], votes: 0})
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))
  const [selected, setSelected] = useState(0)
  const nextAnecdote = () => setSelected(Math.floor(Math.random() * anecdotes.length));

  const voteAnecdote = () => {
    const copy = [...votes]  
    copy[selected] += 1    
    setVotes(copy)         
    if (copy[selected] > mostVoted.votes) {
      setMostVoted({anecdote: anecdotes[selected], votes: copy[selected]})
    } 
  }

  return (
    <div>
      <Anecdote header={'Anecdote of the day'} text={anecdotes[selected]} votes={votes[selected]}/>
      <Button text={'vote'} onClick={voteAnecdote}/>
      <Button text={'next anecdote'} onClick={nextAnecdote}/>
      <Anecdote header={'Anecdote with most votes'} text={mostVoted.anecdote} votes={mostVoted.votes}/>
    </div>
  )
}

export default App