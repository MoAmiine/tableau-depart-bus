export default function DepartureDetails({
  selectedDeparture,
  selectionHidden,
  onToggleStatus,
}) {
  if (!selectedDeparture) {
    return <p>Sélectionnez un départ</p>;
  }

  if (selectionHidden) {
    return <p>La sélection est masquée par le filtre</p>;
  }

  const isPonctuel = selectedDeparture.status === 'Ponctuel';

  return (
    <article className="departure-details">
      <h3>{selectedDeparture.id}</h3>
      <p>{selectedDeparture.line} · {selectedDeparture.destination}</p>
      <p>Départ prévu : {selectedDeparture.time}</p>
      <p>État : {selectedDeparture.status}</p>
      <button
        type="button"
        onClick={() => onToggleStatus(selectedDeparture.id)}
      >
        {isPonctuel ? 'Signaler un retard' : 'Marquer ponctuel'}
      </button>
    </article>
  );
}
