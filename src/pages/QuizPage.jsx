import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import QuestionCard from "../components/QuestionCard";
import questionsData from "../data/questions.json";

export default function QuizPage() {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [timer, setTimer] = useState(30);
  const navigate = useNavigate();

  useEffect(() => {
    setQuestions(questionsData); // Load local JSON (or replace with API fetch)
  }, []);

  // Timer countdown
  useEffect(() => {
    if (questions.length === 0) return;
    if (timer === 0) {
      handleAnswer(null); // auto-skip if no answer
      return;
    }
    const countdown = setTimeout(() => setTimer(timer - 1), 1000);
    return () => clearTimeout(countdown);
  }, [timer, questions]);

  const handleAnswer = (selected) => {
    const newAnswers = [...answers];
    newAnswers[currentIndex] = selected;
    setAnswers(newAnswers);

    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(currentIndex + 1);
      setTimer(15); // reset timer for next question
    } else {
      navigate("/results", { state: { questions, answers: newAnswers } });
    }
  };

  if (questions.length === 0) return <p>Loading questions...</p>;

  return (
    <QuestionCard
      question={questions[currentIndex].question}
      options={questions[currentIndex].options}
      currentIndex={currentIndex}
      total={questions.length}
      onAnswer={handleAnswer}
      timer={timer}
    />
  );
}
