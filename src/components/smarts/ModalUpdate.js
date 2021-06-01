import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { Button, Form, Modal } from "react-bootstrap";
import { Reducer } from "../../hooks/Reducer";
import { useForm } from "../../hooks/useForm";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
export const ModalUpdate = ({ open, close, id, cita}) => {
  
  const [{ mascota, propietario, telefono, fecha, hora, sintomas },handleInputChange,reset] = useForm({
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
      id: id,
      mascota: mascota,
      propietario: propietario,
      telefono: telefono,
      fecha: fecha,
      hora: hora,
      sintomas: sintomas,
    };
  
    

     handleUpdate(Data);
     reset();
  };

  return ReactDOM.createPortal(
    <Modal
      size="lg"
      show={open}
      onHide={() => close}
      aria-labelledby="example-modal-sizes-title-lg"
      animation={false}>
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">
        Actualizar cita : {cita.id}
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <input
              type="text"
              id="mascota"
              name="mascota"
              placeholder={cita.mascota}
              autoComplete="off"
              onChange={handleInputChange}
              className="form-control  mt-3"
              required
            />

            <input
              type="text"
              id="propietario"
              name="propietario"
              placeholder={cita.propietario}
              autoComplete="off"
              onChange={handleInputChange}
              className="form-control  mt-3"
              required
            />

            <input
              type="tel"
              id="telefono"
              name="telefono"
              placeholder={cita.telefono}
              autoComplete="off"
              onChange={handleInputChange}
              className="form-control  mt-3"
              required
            />

            <input
              type="date"
              id="fecha"
              name="fecha"
              placeholder={cita.fecha}
              autoComplete="off"
              onChange={handleInputChange}
              className="form-control  mt-3"
              required
            />

            <input
              type="time"
              id="hora"
              name="hora"
              placeholder={cita.hora}
              autoComplete="off"
              onChange={handleInputChange}
              className="form-control  mt-3"
              required
            />

            <textarea
              id="sintomas"
              name="sintomas"
              placeholder={cita.sintomas}
              autoComplete="off"
              onChange={handleInputChange}
              className="form-control  mt-3"
              required
            ></textarea>
          </Form.Group>

          <Button type="submit" className="btn btn-success w-100 d-block mt-3">
           Actualizar
          </Button>
          <ToastContainer></ToastContainer>
        </Form>
      </Modal.Body>
    </Modal>,
    document.getElementById("modal")
  );
};
