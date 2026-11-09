import { initialDepartures } from './data/departures';

export default function App() {
  const departures = initialDepartures;
  return <main>
    <h1>Tableau des départs de bus</h1>
    <p>Données locales de démonstration</p>
    <p>{departures.length} départs au total</p>
  </main>;
}
