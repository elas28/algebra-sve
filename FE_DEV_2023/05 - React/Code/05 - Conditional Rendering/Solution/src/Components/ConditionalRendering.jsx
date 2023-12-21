export default function ConditionalRendering(props) {
  return (
    <div>
      {props.number === undefined ? null : (
        <h2>Number sent via props: {props.number}</h2>
      )}
    </div>
  );
}
