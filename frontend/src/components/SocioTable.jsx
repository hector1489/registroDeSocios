import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Table = ({ socios, eliminarSocio }) => {
  const handleEliminar = (id) => {
    eliminarSocio(id);
  };

  return (
    <div className="table-responsive">
      <table className="table">
        <thead>
          <tr>
            <th>nombre</th>
            <th>correo</th>
            <th>edad</th>
            <th>cargo</th>
            <th>telefono</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {socios.map((socio) => (
            <tr key={socio.id}>
              <td>{socio.id}</td>
              <td>{socio.nombre}</td>
              <td>{socio.correo}</td>
              <td>{socio.edad}</td>
              <td>{socio.cargo}</td>
              <td>{socio.telefono}</td>
              <td className="icon">
                <FontAwesomeIcon icon={faTrash} onClick={() => handleEliminar(socio.id)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
