import React from 'react'
import { useState, useMemo, useEffect } from 'react';
import "./app.css"
import Timer from './components/Timer';
import Trivia from './components/trivia';
function App() {
  const [questionNumber , setQuestionNumber] =useState(1);
  const [stop , setStop] = useState(false);
  const [earned , setEarned] = useState('$ 0');
   const data = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
     ],
    },
	{
      id: 4,
      question: "Who is the best player in the history?",
      answers: [
        {
          text: "Leo Messi",
          correct: true,
        },
        {
          text: "Leo Messi",
          correct: true,
        },
        {
          text: "Leo Messi",
          correct: true,
        },
        {
          text: "Leo Messi",
          correct: true,
        },
	],
},
	{
      id: 4,
      question: "Who is the best player in the history?",
      answers: [
        {
          text: "Leo Messi",
          correct: true,
        },
        {
          text: "Leo Messi",
          correct: true,
        },
        {
          text: "Leo Messi",
          correct: true,
        },
        {
          text: "Leo Messi",
          correct: true,
        },
	],
},
	{
      id: 5,
      question: "Who is the best player in the history?",
      answers: [
        {
          text: "Leo Messi",
          correct: true,
        },
        {
          text: "Leo Messi",
          correct: true,
        },
        {
          text: "Leo Messi",
          correct: true,
        },
        {
          text: "Leo Messi",
          correct: true,
        },
	],
},
	{
      id: 6,
      question: "Who is the best player in the history?",
      answers: [
        {
          text: "Leo Messi",
          correct: true,
        },
        {
          text: "Leo Messi",
          correct: true,
        },
        {
          text: "Leo Messi",
          correct: true,
        },
        {
          text: "Leo Messi",
          correct: true,
        },
	],
},
	{
      id: 7,
      question: "Who is the best player in the history?",
      answers: [
        {
          text: "Leo Messi",
          correct: true,
        },
        {
          text: "Leo Messi",
          correct: true,
        },
        {
          text: "Leo Messi",
          correct: true,
        },
        {
          text: "Leo Messi",
          correct: true,
        },
	],
},
	{
      id: 8,
      question: "Who is the best player in the history?",
      answers: [
        {
          text: "Leo Messi",
          correct: true,
        },
        {
          text: "Leo Messi",
          correct: true,
        },
        {
          text: "Leo Messi",
          correct: true,
        },
        {
          text: "Leo Messi",
          correct: true,
        },
	],
},
	{
      id: 9,
      question: "Who is the best player in the history?",
      answers: [
        {
          text: "Leo Messi",
          correct: true,
        },
        {
          text: "Leo Messi",
          correct: true,
        },
        {
          text: "Leo Messi",
          correct: true,
        },
        {
          text: "Leo Messi",
          correct: true,
        },
	],
},
	{
      id: 10,
      question: "Who is the best player in the history?",
      answers: [
        {
          text: "Leo Messi",
          correct: true,
        },
        {
          text: "Leo Messi",
          correct: true,
        },
        {
          text: "Leo Messi",
          correct: true,
        },
        {
          text: "Leo Messi",
          correct: true,
        },
	],
},
	{
      id: 11,
      question: "Who is the best player in the history?",
      answers: [
        {
          text: "Leo Messi",
          correct: true,
        },
        {
          text: "Leo Messi",
          correct: true,
        },
        {
          text: "Leo Messi",
          correct: true,
        },
        {
          text: "Leo Messi",
          correct: true,
        },
	],
},
	{
      id: 12,
      question: "Who is the best player in the history?",
      answers: [
        {
          text: "Leo Messi",
          correct: true,
        },
        {
          text: "Leo Messi",
          correct: true,
        },
        {
          text: "Leo Messi",
          correct: true,
        },
        {
          text: "Leo Messi",
          correct: true,
        },
	],
},
	{
      id: 13,
      question: "Who is the best player in the history?",
      answers: [
        {
          text: "Leo Messi",
          correct: true,
        },
        {
          text: "Leo Messi",
          correct: true,
        },
        {
          text: "Leo Messi",
          correct: true,
        },
        {
          text: "Leo Messi",
          correct: true,
        },
	],
},
	{
      id: 14,
      question: "Who is the best player in the history?",
      answers: [
        {
          text: "Leo Messi",
          correct: true,
        },
        {
          text: "Leo Messi",
          correct: true,
        },
        {
          text: "Leo Messi",
          correct: true,
        },
        {
          text: "Leo Messi",
          correct: true,
        },
	],
},
	{
      id: 15,
      question: "Who is the best player in the history?",
      answers: [
        {
          text: "Leo Messi",
          correct: true,
        },
        {
          text: "Leo Messi",
          correct: true,
        },
        {
          text: "Leo Messi",
          correct: true,
        },
        {
          text: "Leo Messi",
          correct: true,
        },
	],
},
  ];

  const moneyPyramid = useMemo(()=>
	 [
			{ id: 1, amount: '$ 100' },
			{ id: 2, amount: '$ 200' },
			{ id: 3, amount: '$ 300' },
			{ id: 4, amount: '$ 500' },
			{ id: 5, amount: '$ 1000' },
			{ id: 6, amount: '$ 2000' },
			{ id: 7, amount: '$ 4000' },
			{ id: 8, amount: '$ 8000' },
			{ id: 9, amount: '$ 10000' },
			{ id: 10, amount: '$ 32000' },
			{ id: 11, amount: '$ 64000' },
			{ id: 12, amount: '$ 125000' },
			{ id: 13, amount: '$ 250000' },
			{ id: 14, amount: '$ 500000' },
			{ id: 15, amount: '$ 1000000' },
		].reverse(),

  [])
  useEffect(()=>{
	questionNumber > 1 && setEarned(moneyPyramid.find((money)=>money.id === questionNumber -1  ).amount)
  },[questionNumber,moneyPyramid]);

  return (
		<div className='app'>
			<div className='main'>
				{stop ? (
					<h1 className='earned'>You earned: {earned} </h1>
				) : (
					<>
						<div className='top'>
							<div className='timer'>
								<Timer
									setStop={setStop}
									questionNumber={questionNumber}
								/>
							</div>
						</div>
						<div className='bottom'>
							<Trivia
								data={data}
								setStop={setStop}
								questionNumber={questionNumber}
								setQuestionNumber={setQuestionNumber}
							/>
						</div>
					</>
				)}
			</div>
			<div className='pyramid'>
				<ul className='moneyList'>
					{moneyPyramid.map((item) => {
						return (
							<li
								className={
									questionNumber === item.id
										? 'moneyListItem active'
										: 'moneyListItem'
								}>
								<span className='moneyListItemNumber'>{item.id}</span>
								<span className='moneyListItemAmount'>{item.amount}</span>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
}

export default App