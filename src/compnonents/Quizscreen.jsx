import React, { useState } from 'react';
import QuizResult from './QuizResult';
import Question from './Question';
import QuestionList from '../data/questions.json';

const QuizScreen = ({retry }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [markedAnswers, setMarkedAnswers] = useState(new Array(QuestionList.length));
    const isQuesionEnd = currentQuestionIndex === QuestionList.length;

    function calculateResult  () {
        let correct = 0;
        QuestionList.forEach((question,index)=>{
            if(question.correctOptionIndex == markedAnswers[index]){
                correct++;
            }
        });
        return {
            total : QuestionList.length,
            correct : correct,
            precentage : Math.trunc((correct / QuestionList.length) * 100)
        }
    }

  return (
    <div classNmae="quiz-screen" >
        {
            isQuesionEnd ? (<QuizResult 
                result={calculateResult()}
                retry={retry}

            />) : 
            (<Question 
            question ={QuestionList[currentQuestionIndex]}
            totalQuestions = {QuestionList.length}
            currentQuestion = {currentQuestionIndex + 1}
            setAnswer={(index)=>{
                setMarkedAnswers((arr)=>{
                    let newArr = [...arr];
                    newArr[currentQuestionIndex] = index;
                    return newArr;
                });
                setCurrentQuestionIndex(currentQuestionIndex + 1);
            }}
            />)
        }
    </div>
  )
}

export default QuizScreen;