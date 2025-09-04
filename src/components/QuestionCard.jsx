export default function QuestionCard({
  question,
  options,
  currentIndex,
  total,
  onAnswer,
  timer
}) {
  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-1 rounded-3xl shadow-xl w-full max-w-2xl">
      <div className="bg-white p-6 rounded-2xl">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-800">
            Question {currentIndex + 1}/{total}
          </h2>
          <span className="text-sm font-bold text-red-500">
            ⏳ {timer}s
          </span>
        </div>
        <p className="text-xl font-medium mb-6">{question}</p>
        <div className="grid gap-4">
          {options.map((opt, i) => (
            <button
              key={i}
              className="p-3 rounded-xl bg-gradient-to-r from-blue-400 to-indigo-500 text-white font-medium hover:scale-105 transform transition duration-200"
              onClick={() => onAnswer(opt)}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
