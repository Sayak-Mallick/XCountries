import "./App.css";
import { useQuery } from "@tanstack/react-query";
import getCountries from "./services/api/countries.endpoints";

function App() {
  const { data: countries, isLoading, isError } = useQuery({
    queryKey: ["countries"],
    queryFn: getCountries,
  });

  if (isLoading)
    return (
      <div className="state-screen">
        <div className="spinner" />
        <p>Loading countries…</p>
      </div>
    );

  if (isError)
    return (
      <div className="state-screen">
        <p className="error-msg">⚠ Failed to fetch countries.</p>
      </div>
    );

  return (
    <div className="container">
      <header className="site-header">
        <h1>
          World <span>Flags</span>
        </h1>
        <p className="subtitle">{countries?.data?.length ?? 0} countries</p>
      </header>

      {countries?.data?.length === 0 ? (
        <p className="empty-msg">No countries found.</p>
      ) : (
        <div className="countries-grid">
          {countries?.data?.map((country) => (
            <div key={country.name} className="country-card">
              <div className="flag-wrapper">
                <img
                  src={country.flag}
                  alt={`Flag of ${country.name}`}
                  className="country-flag"
                  loading="lazy"
                />
              </div>
              <p className="country-name">{country.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
