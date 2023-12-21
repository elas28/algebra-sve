import randomstring from "randomstring";
import moment from "moment";

function App() {
  console.log(moment().format("MM DD YYYY, h:mm:ss a"));
  console.log(randomstring.generate());

  return (
    <div className="App">
      <h1>Ovo je naša aplikacija</h1>
    </div>
  );
}

export default App;
