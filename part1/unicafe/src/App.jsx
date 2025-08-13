import { useState } from 'react'

const StatisticLine = ({text, value}) => <tr><td>{text}</td><td>{value}</td></tr>

const Button = ({text, onClick}) => <button onClick={onClick}>{text}</button>

const Statistics = (props) => {
    const feedbacksAmount = props.bad + props.good + props.neutral; 
    
    if (feedbacksAmount === 0) {
        return <h3>No feedback given</h3>
    }

    let positivePercentage = (props.good / feedbacksAmount) * 100;
    let average = (props.good - props.bad) / feedbacksAmount;

    return (        
        <div>
            <table>
                <tbody>
                <StatisticLine text="good" value={props.good}/>
                <StatisticLine text="neutral" value={props.neutral}/>
                <StatisticLine text="bad" value={props.bad}/>
                <StatisticLine text="all" value={feedbacksAmount}/>
                <StatisticLine text="average" value={average}/>
                <StatisticLine text="positive" value={`${positivePercentage} %`}/>
                </tbody>
            </table>
        </div>
    )
}

const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    return (
        <div>
            <h1>give feedback</h1>
            <Button text='good' onClick={() => setGood(good + 1)}/>
            <Button text='neutral' onClick={() => setNeutral(neutral + 1)}/>
            <Button text='bad' onClick={() => setBad(bad + 1)}/>
            <h1>statistics</h1>
            <Statistics good={good} neutral={neutral} bad={bad}/>
        </div>
    )
}

export default App