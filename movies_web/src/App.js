import "./App.css";
import MovieCreator from "./ui/components/MovieCreator";
// import MovieGrid from "./ui/components/movieGrid";

function App() {
  return (
    <div className="row">
      <div className="col-xl-5">
        <MovieCreator></MovieCreator>
      </div>
      <div className="col" style={{ padding: "32px", margin: "-1px" }}>
        {/* <MovieGrid></MovieGrid> */}
      </div>
    </div>
  );
}

export default App;
