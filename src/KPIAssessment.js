import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './KPIAssessment.css';
import Modal from './Modal';

// Job KPI Questions
const jobKPIQuestions = {
    "Engagement Assistant": [
        {
            question: "What is the purpose of engagement planning?",
            answers: ["To outline audit strategies", "To manage warehouse inventory", "To prepare tax documents", "To supervise staff performance", "To perform financial forecasting"],
            correctAnswer: "To outline audit strategies"
        },
        {
            question: "What is an engagement letter?",
            answers: ["A letter that defines audit scope", "A document to track inventory", "A tax filing requirement", "A letter to hire staff", "A report to manage finances"],
            correctAnswer: "A letter that defines audit scope"
        },
        {
            question: "Who prepares working papers?",
            answers: ["The auditor", "The HR department", "The client", "The tax manager", "The CEO"],
            correctAnswer: "The auditor"
        },
        {
            question: "What is an audit program?",
            answers: ["A set of audit procedures", "A tax filing document", "A financial statement", "An inventory plan", "A legal document"],
            correctAnswer: "A set of audit procedures"
        },
        {
            question: "What is the main goal of an audit?",
            answers: ["To express an opinion on financial statements", "To manage staff", "To create marketing plans", "To perform risk assessments", "To balance accounts"],
            correctAnswer: "To express an opinion on financial statements"
        }
    ],
    // Other job titles with their respective questions...
    "Branch Booking": [
        {
            question: "What is branch accounting?",
            answers: ["Accounting for separate branches", "Managing company-wide inventory", "Tracking national sales", "Calculating payroll", "Supervising marketing campaigns"],
            correctAnswer: "Accounting for separate branches"
        },
        // Additional questions...
    ],
    // Include other job questions similarly...
};

const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

function KPIAssessment({ jobTitle }) {
    const navigate = useNavigate();
    const [shuffledQuestions, setShuffledQuestions] = useState([]);
    const [answers, setAnswers] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [score, setScore] = useState(0);
    const [isQualified, setIsQualified] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [additionalAnswer, setAdditionalAnswer] = useState("");
    const [allowUploadID, setAllowUploadID] = useState(false);
    const [allowUploadResume, setAllowUploadResume] = useState(false);

    useEffect(() => {
        // Fetch questions based on jobTitle and shuffle them
        const questionsForJob = jobKPIQuestions[jobTitle] || [];
        const shuffled = shuffleArray([...questionsForJob]);
        setShuffledQuestions(shuffled);
        setAnswers(Array(shuffled.length).fill('')); // Initialize answers array
    }, [jobTitle]);

    const handleAnswerChange = (index, answer) => {
        const updatedAnswers = [...answers];
        updatedAnswers[index] = answer;
        setAnswers(updatedAnswers);
    };

    const calculateScore = () => {
        let newScore = 0;
        shuffledQuestions.forEach((q, index) => {
            if (answers[index] === q.correctAnswer) {
                newScore += 10;
            }
        });
        setScore(newScore);
        setIsQualified(newScore >= 35);
        setShowModal(true);
    };

    const handleProceed = () => {
        if (allowUploadID && allowUploadResume) {
            navigate('/applicant-info');
        } else {
            alert("Please check both options to proceed.");
        }
    };

    const handleDontProceed = () => {
        setShowModal(false);
        navigate('/work-list');
    };

    const handleNextPage = () => {
        setCurrentPage(2);
    };

    const handleBackToMain = () => {
        navigate('/');
    };

    const handleBackToAdditionalQuestion = () => {
        setCurrentPage(1);
    };

    return (
        <div className="kpi-assessment">
            <h2>KPI Assessment for {jobTitle}</h2>
            {currentPage === 1 ? (
                <div>
                    <table border="1" cellPadding="10" style={{ width: '100%', marginBottom: '20px' }}>
                        <thead>
                            <tr>
                                <th>Question</th>
                                <th>Answer 1</th>
                                <th>Answer 2</th>
                                <th>Answer 3</th>
                                <th>Answer 4</th>
                                <th>Answer 5</th>
                            </tr>
                        </thead>
                        <tbody>
                            {shuffledQuestions.map((q, index) => (
                                <tr key={index}>
                                    <td>{q.question}</td>
                                    {q.answers.map((answer, answerIndex) => (
                                        <td key={answerIndex}>
                                            <label>
                                                <input
                                                    type="radio"
                                                    name={`question-${index}`}
                                                    value={answer}
                                                    checked={answers[index] === answer}
                                                    onChange={() => handleAnswerChange(index, answer)}
                                                />
                                                {answer}
                                            </label>
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="button-container">
                        <button onClick={handleBackToMain}>Back</button>
                        <button onClick={handleNextPage}>Next Page</button>
                    </div>
                </div>
            ) : (
                <div>
                    <h3>Additional Question</h3>
                    <p>Why should this company hire you?</p>
                    <input
                        type="text"
                        value={additionalAnswer}
                        onChange={(e) => setAdditionalAnswer(e.target.value)}
                        style={{ width: '100%', padding: '10px', marginBottom: '20px' }}
                    />
                    <div className="button-container">
                        <button onClick={handleBackToAdditionalQuestion}>Back</button>
                        <button onClick={calculateScore}>Submit Answers</button>
                    </div>
                </div>
            )}

            {showModal && (
                <Modal
                    message={isQualified ? "You passed! Let's proceed to step 2 of applying." : `Unfortunately, you scored ${score}. You cannot proceed with the application.`}
                    onClose={handleDontProceed}
                    onDontProceed={handleDontProceed}
                    onProceed={handleProceed}
                    isQualified={isQualified}
                    allowUploadID={allowUploadID}
                    setAllowUploadID={setAllowUploadID}
                    allowUploadResume={allowUploadResume}
                    setAllowUploadResume={setAllowUploadResume}
                />
            )}
        </div>
    );
}

export default KPIAssessment;
