import "./App.css";
import { useQuery } from "@tanstack/react-query";
import getCountries from "./services/api/countries.endpoints";

function App() {
  const { data: countries, isLoading, isError } = useQuery({
    queryKey: ["countries"],
    queryFn: getCountries,
  });

  if (isLoading) return <p>Loading countries...</p>;
  if (isError) return <p>Error fetching countries</p>;

  return (
    <div className="container">
      <h1>Countries</h1>
      {countries?.data?.length === 0 ? (
        <p>No countries found.</p>
      ) : (
        <div className="countries-grid">
          {countries?.data?.map((country) => (
            <div key={country.name} className="country-card">
              <img
                src={country.flag}
                alt={`Flag of ${country.name}`}
                className="country-flag"
              />
              <p className="country-name">{country.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
