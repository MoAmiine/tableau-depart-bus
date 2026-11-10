export default function DepartureCard({ departure, selected, onSelect }) {
  return (
    <article className={`departure-card ${selected ? 'is-selected' : ''}`}>
      <h3>{departure.id}</h3>
      <p>{departure.line} · {departure.destination}</p>
      <p>Départ prévu : {departure.time}</p>
      <p>État : {departure.status}</p>
      <button type="button" onClick={() => onSelect(departure.id)}>
        {selected ? 'Sélectionné' : 'Voir le détail'}
      </button>
    </article>
  );
}
