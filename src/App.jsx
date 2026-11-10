import { useState } from 'react';
import { initialDepartures } from './data/departures';
import Header from './components/Header';
import FilterBar from './components/FilterBar';
import DepartureList from './components/DepartureList';
import DepartureDetails from './components/DepartureDetails';

export default function App() {
  const [departures, setDepartures] = useState(initialDepartures);
  const [filter, setFilter] = useState('Tous');
  const [selectedId, setSelectedId] = useState(null);

  const visibleDepartures = filter === 'Tous'
    ? departures
    : departures.filter((departure) => departure.status === filter);

  const selectedDeparture = departures.find((departure) => departure.id === selectedId);

  const selectedVisibleDeparture = visibleDepartures.find(
    (departure) => departure.id === selectedId
  );
  const selectionHidden = Boolean(selectedDeparture) && !selectedVisibleDeparture;

  const handleToggleStatus = (id) => {
    setDepartures((current) =>
      current.map((departure) =>
        departure.id === id
          ? {
              ...departure,
              status: departure.status === 'Ponctuel' ? 'Retard' : 'Ponctuel',
            }
          : departure
      )
    );
  };

  return (
    <main className="app-container">
      <h1>Tableau des départs de bus</h1>
      <p className="subtitle">Données locales de démonstration</p>

      <Header total={visibleDepartures.length} />

      <section>
        <h2>Filtres</h2>
        <FilterBar filter={filter} onChange={setFilter} />
      </section>

      <section>
        <h2>Départs</h2>
        <DepartureList
          departures={visibleDepartures}
          selectedId={selectedId}
          onSelect={setSelectedId}
        />
      </section>

      <section>
        <h2>Détail</h2>
        <DepartureDetails
          selectedDeparture={selectedDeparture}
          selectionHidden={selectionHidden}
          onToggleStatus={handleToggleStatus}
        />
      </section>
    </main>
  );
}
