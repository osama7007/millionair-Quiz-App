import { useState, useEffect } from 'react';

function Trivia({ data, setStop, questionNumber, setQuestionNumber }) {
	const [question, setQuestion] = useState(null);
	const [selectAnswer, setSelectAnswer] = useState(null);
	const [className, setClassName] = useState('answer');
	useEffect(() => {
		setQuestion(data[questionNumber -1]);
	}, [data, questionNumber]);

    const delay = (duration , callback)=>{
        setTimeout(() => {
            callback();
        }, duration);
    }


	const handleClick = (answer) => {
		setSelectAnswer(answer);
		setClassName('answer active');
        delay(2000,()=>{
          setClassName(answer.correct ? 'answer correct' : 'answer wrong');
        })
        delay(6000,()=>{
            if(answer.correct){
                setQuestionNumber((prev)=> prev+1);
                setSelectAnswer(null)
            }
            else{
                setStop(true)
            }
        })
		
	};
	return (
		<div className='trivia'>
			<div className='question'>{question?.question}</div>
			<div className='answers'>
				{question?.answers.map((answer) => {
					return (
						<div
							className={selectAnswer === answer ? className : 'answer'}
							onClick={() => handleClick(answer)}>
							{answer?.text}
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default Trivia;
