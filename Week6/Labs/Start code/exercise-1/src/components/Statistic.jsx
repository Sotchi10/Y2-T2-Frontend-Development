function Statistic({ courseResult }) {
  let sum = 0;
  let min = courseResult[0].score;
  let max = courseResult[0].score;

  for (let i = 0; i < courseResult.length; i++) {
    const score = courseResult[i].score;
    sum += score;

    if (score < min) min = score;
    if (score > max) max = score;
  }

  const average = sum / courseResult.length;
  return (
    <>
      <div className="statistic">
        <div className="stat">
          <p style={{ fontWeight: 800 }}>AVG</p>
          <p>{average.toFixed(2)}</p>
        </div>
        <div className="stat">
          <p style={{ fontWeight: 800 }}>MIN</p>
          <p>{min}</p>
        </div>
        <div className="stat">
          <p style={{ fontWeight: 800 }}>MAX</p>
          <p>{max}</p>
        </div>
      </div>
    </>
  );
}
export default Statistic;
