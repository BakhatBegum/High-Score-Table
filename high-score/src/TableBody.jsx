const TableBody = ({ allCountryScores, sortOrder }) => {
  const sortScores = (scores) =>
    scores
      .slice()
      .sort((a, b) => (sortOrder === "ascending" ? a.s - b.s : b.s - a.s));

  return (
    <table>
      <tbody>
        <div className="layout">
          {sortScores(
            allCountryScores.flatMap((country) => country.scores)
          ).map((score) => (
            <tr key={score.n}>
              <td>{score.n[0].toLocaleUpperCase() + score.n.substring(1)}</td>
              <td>{score.s}</td>
            </tr>
          ))}
        </div>
      </tbody>
    </table>
  );
};

export default TableBody;
