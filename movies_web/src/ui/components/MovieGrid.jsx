var MovieGrid = (props) => {
  let movies = props.movies;
  let movieRows = movies.map((movie) => (
    <tr>
      <td>{movie.name}</td>
      <td>{movie.category}</td>
      <td>{movie.description}</td>
      <td>{movie.created}</td>
      <td>
        <div className="btn-group btn-group-sm" role="group">
          <button className="btn btn-outline-info" type="button">
            Editar
          </button>
          <button className="btn btn-outline-danger" type="button">
            Eliminar
          </button>
        </div>
      </td>
    </tr>
  ));
  return (
    <section>
      <h2>Todas las peliculas</h2>
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Categoría</th>
              <th>Descripción</th>
              <th>Creado</th>
              <th />
            </tr>
          </thead>
          <tbody>{movieRows}</tbody>
        </table>
      </div>
    </section>
  );
};
export default MovieGrid;
