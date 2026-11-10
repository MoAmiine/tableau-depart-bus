import DepartureCard from './DepartureCard';

export default function DepartureList({ departures, selectedId, onSelect }) {
  if (departures.length === 0) {
    return <p>Aucun départ dans cette vue.</p>;
  }

  return (
    <ul className="departure-list">
      {departures.map((departure) => (
        <li key={departure.id}>
          <DepartureCard
            departure={departure}
            selected={selectedId === departure.id}
            onSelect={onSelect}
          />
        </li>
      ))}
    </ul>
  );
}
