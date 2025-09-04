export default function ResultCard({ question, userAnswer, correctAnswer }) {
  const isCorrect = userAnswer === correctAnswer;
  return (
    <div
      className={`p-4 rounded-xl border mb-3 ${
        isCorrect ? "bg-green-100 border-green-400" : "bg-red-100 border-red-400"
      }`}
    >
      <p className="font-medium">{question}</p>
      <p>
        Your answer:{" "}
        <span className={isCorrect ? "text-green-700" : "text-red-700"}>
          {userAnswer || "No answer"}
        </span>
      </p>
      {!isCorrect && <p>Correct answer: {correctAnswer}</p>}
    </div>
  );
}
