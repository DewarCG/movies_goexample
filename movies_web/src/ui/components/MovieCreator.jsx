/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from "react";
import Movie from "../../domain/models/movie";

var MovieCreator = (props) => {
  // let movieRequest = new Movie()
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  return (
    <section className="contact-clean">
      <form method="post">
        <h2 className="text-center">Registrar pelicula</h2>
        <div className="mb-3">
          <input
            className="form-control"
            type="text"
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Nombre"
          />
        </div>
        <div className="mb-3">
          <input
            className="form-control"
            type="text"
            name="category"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            placeholder="Categoria"
          />
        </div>
        <div className="mb-3">
          <textarea
            className="form-control"
            name="description"
            placeholder="Descripcion (Opcional)"
            rows={14}
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </div>
        <div className="mb-3">
          <button
            className="btn btn-primary"
            type="button"
            onClick={props.onSave}
          >
            registrar
          </button>
        </div>
      </form>
    </section>
  );
};

export default MovieCreator;
