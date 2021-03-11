import React from 'react';

const Question = (props) => {
  // console.log('props from question child component', props.question[0]?.question_body);
  const { question } = props;
  console.log('PROPS', props);

  return (
    <div>
      hi
    </div>
  )
}

// export default function Question(props) {
//   console.log(props.questions)

//   return (
//     <>
//     </>
//   )
// }

export default Question;