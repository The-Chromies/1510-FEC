import React from 'react';
import Question from './Question.js'

const QuestionList =  (props) => (
      <div>
        {console.log(props.question)}
        {props.question.map((question, i) => <Question question={question} key={question+1}/>)}
      </div>
)

export default QuestionList;