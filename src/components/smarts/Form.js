import React from "react";
import { Reducer } from "../../hooks/Reducer";
import { useForm } from "../../hooks/useForm";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./style.css";


export const Form = () => {
  const [
    { mascota, propietario, telefono, fecha, hora, sintomas },
    handleInputChange,
    reset,
  ] = useForm({
    mascota: "",
    propietario: "",
    telefono: "",
    fecha: "",
    hora: "",
    sintomas: "",
  });
  const [todos, handleDelete, handleAddTodo,handleUpdate] = Reducer();

  const handleSubmit = (e) => {
    e.preventDefault();

    const Data = {
      id: new Date().getTime(),
      mascota: mascota,
      propietario: propietario,
      telefono: telefono,
      fecha: fecha,
      hora: hora,
      sintomas: sintomas,
    };
    toast.success("hecho");

    handleAddTodo(Data);

    reset();
  };

  return (
    <div>
      <br />
      <form onSubmit={handleSubmit}>
        <legend className="mb-4">Datos del Paciente</legend>
        <div className="form-group row">
          <label className="col-sm-4 col-lg-4 mt-3  col-form-label ">
            Nombre Mascota:
          </label>
          <div className="col-sm-8 col-lg-8">
            <input
              id="mascota"
              type="text"
              name="mascota"
              placeholder="mascota"
              autoComplete="off"
              className="form-control  mt-3"
              value={mascota}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <div className="form-group row">
          <label className="col-sm-4 col-lg-4 mt-3  col-form-label">
            Propietario:
          </label>
          <div className="col-sm-8 col-lg-8">
            <input
              type="text"
              id="propietario"
              name="propietario"
              placeholder="propietario"
              autoComplete="off"
              className="form-control  mt-3"
              value={propietario}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-4 col-lg-4  mt-3 col-form-label">
            Teléfono:
          </label>
          <div className="col-sm-8 col-lg-8">
            <input
              type="tel"
              id="telefono"
              name="telefono"
              placeholder="telefono"
              autoComplete="off"
              className="form-control  mt-3"
              value={telefono}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-4 col-lg-4 mt-3  col-form-label">
            Fecha:
          </label>
          <div className="col-sm-8 col-lg-8">
            <input
              type="date"
              id="fecha"
              name="fecha"
              placeholder="fecha"
              autoComplete="off"
              className="form-control  mt-3"
              value={fecha}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-4 col-lg-4 mt-3  col-form-label">
            Hora:
          </label>
          <div className="col-sm-8 col-lg-8">
            <input
              type="time"
              id="hora"
              name="hora"
              placeholder="hora"
              autoComplete="off"
              className="form-control  mt-3"
              value={hora}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <div className="form-group row">
          <label className="col-sm-4 col-lg-4 mt-3  col-form-label">
            Sintomas:
          </label>
          <div className="col-sm-8 col-lg-8">
            <textarea
              id="sintomas"
              name="sintomas"
              placeholder="Sintomas"
              autoComplete="off"
              className="form-control  mt-3"
              value={sintomas}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-success w-100 d-block mt-3">
            Crear Cita
          </button>
        </div>
        <ToastContainer></ToastContainer>
      </form>
      
    </div>
  );
};
