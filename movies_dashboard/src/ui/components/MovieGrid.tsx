import React from 'react';
import {  useSelector } from 'react-redux';
import {  State } from "../state";

export const MovieGrid: React.FC<any> = () => {
  const moviesState = useSelector((state: State) => state.movies)
  const movies = moviesState.movies

  const movieRows = movies.map((movie) => (
    <tr key={movie.id}>
      <td>{movie.name}</td>
      <td>{movie.category}</td>
      <td>{movie.description}</td>
      <td>{'movie.created'}</td>
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
      <h2>Peliculas</h2>
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Categoría</th>
              <th>Descripción</th>
              <th>Fecha creación</th>
              <th />
            </tr>
          </thead>
          <tbody>{movieRows}</tbody>
        </table>
      </div>
    </section>
  );
};
