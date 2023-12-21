export default function User({ name, years, onNameChange, onDelete }) {
  return (
    <div>
      <p>
        Pozdrav, moje ime je {name} i imam {years} godina.
      </p>
      <input type='text' onChange={onNameChange} value={name} disabled={!onNameChange} />
      <button onClick={onDelete}>Izbriši korisnika</button>
    </div>
  );
}
