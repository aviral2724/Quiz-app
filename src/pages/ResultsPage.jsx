import { useLocation, useNavigate } from "react-router-dom";
import ResultCard from "../components/ResultCard";
import ScoreBoard from "../components/ScoreBoard";

export default function ResultsPage() {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) return <p>No results available. Start a quiz first!</p>;

  const { questions, answers } = state;
  const score = questions.filter((q, i) => q.answer === answers[i]).length;

  return (
    <div className="bg-gradient-to-r from-green-400 via-teal-400 to-blue-500 p-1 rounded-3xl shadow-xl w-full max-w-3xl">
      <div className="bg-white p-6 rounded-2xl">
        <ScoreBoard score={score} total={questions.length} />
        <div className="max-h-96 overflow-y-auto pr-2">
          {questions.map((q, i) => (
            <ResultCard
              key={i}
              question={q.question}
              userAnswer={answers[i]}
              correctAnswer={q.answer}
            />
          ))}
        </div>
        <button
          onClick={() => navigate("/")}
          className="mt-6 px-6 py-3 rounded-xl bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold hover:scale-105 transform transition duration-200"
        >
          🔄 Restart Quiz
        </button>
      </div>
    </div>
  );
}
