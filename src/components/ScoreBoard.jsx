export default function ScoreBoard({ score, total }) {
  return (
    <div className="text-center mb-6">
      <h2 className="text-2xl font-bold">You scored {score}/{total}</h2>
    </div>
  );
}
