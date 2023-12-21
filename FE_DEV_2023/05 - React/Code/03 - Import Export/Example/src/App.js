import { student, greet, num, sum } from "./Helpers/Helpers";

function App() {

  console.log(student);
  console.log(greet(student));

  console.log(sum(num, 5));

  // JSX Syntax Knowledge Required - Skip for now
  return (
    <div className="App">

    </div>
  );
}

export default App;
