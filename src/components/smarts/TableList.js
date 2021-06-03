import React, { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { ModalUpdate } from "./ModalUpdate";
import { Button } from "react-bootstrap";
export const TableList = ({ todos, handleDelete }) => {
  const [open, setOpen] = useState(false);
  const [getId, setId] = useState();
  const [getCita, setCita] = useState({});


  const extraerId = (id, cita, open) => {
    setId(id);
    setOpen(open);
    setCita(cita);
  };
  return (
    <>
      <ToastContainer></ToastContainer>
      <br/>
      <table className="table">
        <caption>Citas</caption>
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Propietario</th>
            <th scope="col">Mascota</th>
            <th scope="col">Telefono</th>
            <th scope="col">Fecha</th>
            <th scope="col">Hora</th>
            <th scope="col">Sintomas</th>
            <th scope="col">accion</th>
          </tr>
        </thead>
        {todos.map((todo, id) => (
          <tbody>
            <tr key={id}>
              <td>{todo.id}</td>
              <td>{todo.propietario}</td>
              <td>{todo.mascota}</td>
              <td>{todo.telefono}</td>
              <td>{todo.fecha}</td>
              <td>{todo.hora}</td>
              <td>{todo.sintomas}</td>
              <td>
                <button
                  className="btn btn-danger ml-5"
                  onClick={() => handleDelete(todo.id)}
                >
                  Eliminar
                </button>

                |

                <Button className="mr-3" onClick={() => extraerId(todo.id, todo, true)}>
                  Editar
                </Button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
      <ModalUpdate
        open={open}
        close={!open}
        id={getId}
        cita={getCita}
      ></ModalUpdate>
    </>
  );
};
