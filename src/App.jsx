import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [countries, setCountries] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch('https://xcountries-backend.azurewebsites.net/all')
        const data = await response.json()
        setCountries(data)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching data: ', error)
        setLoading(false)
      }
    }

    fetchCountries()
  }, [])

  return (
    <div className="container">
      <h1>Countries</h1>
      {loading ? (
        <p>Loading countries...</p>
      ) : (
        <div className="countries-grid">
          {countries.map((country) => (
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
  )
}

export default App
