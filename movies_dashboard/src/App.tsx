import './App.css';
import { MovieGrid, MoviesCreator } from "./ui/components";

function App() {
  return (
    <div className="row">
        <div className="col-xl-5">
          <MoviesCreator />
        </div>
        <div className="col" style={{ padding: '32px', margin: '-1px' }}>
          <MovieGrid />
        </div>
  </div>
  );
}

export default App;
