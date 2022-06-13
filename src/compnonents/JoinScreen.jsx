import React from 'react'

const JoinScreen = ({start}) => {
  return (
    <div className="join-screen">
        <h1>Join Quiz</h1>
        <button onClick={start}>Start</button>
    </div>
  )
}

export default JoinScreen