const Form = ({
  setNombre,
  setCorreo,
  setEdad,
  setCargo,
  setTelefono,
  setDireccion,
  agregarSocio,
}) => {
  return (
    <div className='form'>
      <div className='mb-2'>
        <h6>Agregar Socio</h6>
        <label>Nombre</label>
        <input
          onChange={(event) => setNombre(event.target.value)}
          className='form-control'
        />
      </div>
      <div className='mb-2'>
        <label>Correo</label>
        <input
          onChange={(event) => setCorreo(event.target.value)}
          className='form-control'
        />
      </div>
      <div className='mb-2'>
        <label>Edad</label>
        <input
          type='number'
          onChange={(event) => setEdad(event.target.value)}
          className='form-control'
        />
      </div>
      <div className='mb-2'>
        <label>Cargo</label>
        <input
          onChange={(event) => setCargo(event.target.value)}
          className='form-control'
        />
      </div>
      <div className='mb-2'>
        <label>Teléfono</label>
        <input
          onChange={(event) => setTelefono(event.target.value)}
          className='form-control'
        />
      </div>
      <div className='mb-3'>
        <label>Dirección</label>
        <input
          onChange={(event) => setDireccion(event.target.value)}
          className='form-control'
        />
      </div>
      <div className='d-flex'>
        <button onClick={agregarSocio} className='btn btn-light m-auto'>
          Agregar
        </button>
      </div>
    </div>
  );
};

export default Form;
