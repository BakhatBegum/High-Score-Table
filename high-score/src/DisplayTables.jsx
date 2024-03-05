import Header from "./Header";
import TableBody from "./TableBody";
import CountryData from "./CountryData";

const DisplayTables = ({ sortOrder, allCountryScores }) => {
  const sortedCountryScores = allCountryScores
    .slice()
    .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <>
      <TableBody allCountryScores={allCountryScores} sortOrder={sortOrder} />
      <Header />
      <CountryData
        sortedCountryScores={sortedCountryScores}
        sortOrder={sortOrder}
      />
    </>
  );
};

export default DisplayTables;
