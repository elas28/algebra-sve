import Hero from "./Hero";

export default function FunctionalComponent() {
  const student = {
    firstName: "John",
    lastName: "Doe",
    uid: 12345,
    active: true,
  };

  // JSX Syntax Goes In
  return (
    <div>
      <h2>Student Information</h2>
      <Hero />
      <p>First name: {student.firstName}</p>
      <p>Last name: {student.lastName}</p>
      <p>Student ID number: {student.uid}</p>

      <p>
        Student status:{" "}
        {student.active === true ? (
          <span>student is active</span>
        ) : (
          <span>student is inactive</span>
        )}
      </p>
    </div>
  );
}
