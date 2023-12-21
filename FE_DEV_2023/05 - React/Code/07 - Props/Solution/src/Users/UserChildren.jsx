// children is a special prop, automatically passed to every component, that can be used to render the content included between the opening and closing tags when invoking a component.

export default function UserChildren(props) {
  return (
    <div className="children-component">
      <p>
        Pozdrav, moje ime je {props.name} i imam {props.years} godina.
      </p>
      <p>{props.children}</p>
    </div>
  );
}
