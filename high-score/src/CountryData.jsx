const CountryData = ({ sortedCountryScores, sortOrder }) => {
  const sortScores = (scores) =>
    scores
      .slice()
      .sort((a, b) => (sortOrder === "ascending" ? a.s - b.s : b.s - a.s));

  return (
    <>
      {sortedCountryScores.map((countryData) => (
        <div key={countryData.name}>
          <div className="layout">
            <h2>HIGH SCORES: {countryData.name}</h2>
            <table>
              <tbody>
                {sortScores(countryData.scores).map((score) => (
                  <tr key={score.n}>
                    <td>
                      {score.n[0].toLocaleUpperCase() + score.n.substring(1)}
                    </td>
                    <td>{score.s}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </>
  );
};

export default CountryData;
