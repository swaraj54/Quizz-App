import React, { useState } from 'react';
import Navbar from './Navbar';
import Quizscreen from './Quizscreen';
import JoinScreen from './JoinScreen';

const Home = () => {
    const [IsQuizSatrted, setIsQuizSatrted] = useState(false);
  return (
    <>
    <Navbar />
    <div className="quiz-container">
        { IsQuizSatrted ?
            (<Quizscreen retry={()=>{setIsQuizSatrted(false)}} /> )  : 
            (<JoinScreen start={()=>{setIsQuizSatrted(true)}} /> )

        }
    </div>

    </>
  )
}

export default Home