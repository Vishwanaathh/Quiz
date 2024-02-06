import React, { useState } from 'react';
import './Question.css';

function Question() {
    const [inputValue, setInputValue] = useState('');
    const [answeredCount, setAnsweredCount] = useState(0);
    const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
    const [questionIndex, setQuestionIndex] = useState(0);

    const randomQuestions = [
        'What is the capital of France?',
        'What is the largest planet in our solar system?',
        'Who painted the Mona Lisa?',
        'What is the chemical symbol for water?',
        'What year did World War II end?',
        'What is the tallest mountain in the world?',
        'Which planet is known as the Red Planet?',
        'Who wrote "Hamlet"?',
        'What is the capital of Japan?',
        'What is the square root of 64?',
        'What is the capital of Italy?',
        'What is the chemical symbol for oxygen?',
        'Who is credited with inventing the light bulb?',
        'In which year did the Titanic sink?',
        'What is the tallest building in the world?',
        'Which animal is known as the "King of the Jungle"?',
        'Who wrote "1984"?',
        'What is the largest ocean on Earth?',
        'What is the currency of Japan?',
        'What is the chemical symbol for gold?',
        'Who is known as the "Father of Computers"?',
        'What is the boiling point of water in Celsius?',
        'Who painted the ceiling of the Sistine Chapel?',
        'What is the currency of Australia?',
        'What is the chemical symbol for silver?',
        'Who developed the theory of relativity?',
        'Which gas is most abundant in Earth\'s atmosphere?',
        'Who wrote "Pride and Prejudice"?',
        'What is the national flower of the United States?',
        'What is the chemical symbol for carbon?',
        'Who discovered penicillin?',
        'What is the capital of Brazil?',
        'What is the currency of China?',
        'Who is known as the "Father of Geometry"?',
        'What is the chemical symbol for sodium?',
        'What is the largest country by land area?',
        'Who composed the "Moonlight Sonata"?',
        'What is the chemical symbol for helium?',
        'What is the national animal of Canada?',
        'Who is known as the "Father of Modern Physics"?',
        'What is the chemical symbol for iron?',
        'Who painted "Starry Night"?',
        'What is the currency of Russia?',
        'What is the chemical symbol for lead?',
        'Who wrote "The Great Gatsby"?',
        'What is the national flower of Japan?',
        'Who discovered gravity?',
        'What is the chemical symbol for nitrogen?',
        'What is the national bird of India?',
        'Who invented the telephone?',
    ];
    
    const randomAnswers = [
        'Paris',
        'Jupiter',
        'Leonardo da Vinci',
        'H2O',
        '1945',
        'Mount Everest',
        'Mars',
        'William Shakespeare',
        'Tokyo',
        '8',
        'Rome',
        'O2',
        'Thomas Edison',
        '1912',
        'Burj Khalifa',
        'Lion',
        'George Orwell',
        'Pacific Ocean',
        'Japanese yen',
        'Au',
        'Charles Babbage',
        '100',
        'Michelangelo',
        'Australian dollar',
        'Ag',
        'Albert Einstein',
        'Nitrogen',
        'Jane Austen',
        'Rose',
        'C',
        'Alexander Fleming',
        'Brasília',
        'Renminbi',
        'Euclid',
        'Na',
        'Russia',
        'Beethoven',
        'He',
        'Beaver',
        'Albert Einstein',
        'Fe',
        'Vincent van Gogh',
        'Russian ruble',
        'Pb',
        'F. Scott Fitzgerald',
        'Cherry blossom',
        'Isaac Newton',
        'N',
        'Indian peacock',
        'Alexander Graham Bell',
    ];
    

    const answered = () => {
        setAnsweredCount(answeredCount + 1);
        const currentQuestion = randomQuestions[questionIndex];
        const correctAnswer = randomAnswers[questionIndex];
        
        if (inputValue.trim().toLowerCase() === correctAnswer.toLowerCase()) {
            setCorrectAnswersCount(correctAnswersCount + 1);
        }

        // Increment questionIndex or reset to 0 if it reaches the end
        setQuestionIndex(questionIndex === randomQuestions.length - 1 ? 0 : questionIndex + 1);
        setInputValue(''); // Clearing the input after submission
    };

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        answered();
    };

    return (
        <div>
            <h3>{randomQuestions[questionIndex]}</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" value={inputValue} onChange={handleInputChange} />
                <button type="submit">Submit</button>
            </form>
            <h3>{answeredCount} questions answered</h3>
            <h3>{correctAnswersCount} correct answers</h3>
        </div>
    );
}

export default Question;
