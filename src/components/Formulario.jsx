import {useState} from 'react';
import '../App.css';
import Button from 'react-bootstrap/Button';
import Alert from './Alert';

const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  
  const [emaillog, setEmailLog] = useState("");
  const [passwordlog, setPasswordLog] = useState("");

  const [error, setError] = useState(false);
  const [passworderror, setPasswordError] = useState(false);
  const [errorlog, setErrorLog] = useState(false);
  /* const [mensaje, setMensaje] = useState(""); */

  const validarDatos = (e) => {
    e.preventDefault();
    if(nombre === "" || apellido === "" || email === "" || password === "" || password2 === ""){
      setError(true);
      return;
    } else if(password != password2){
      setPasswordError(true);
      return;
    }

    setError(false);
    setPasswordError(false);
    setNombre("");
    setApellido("");
    setEmail(""); 
    setPassword("");
    setPassword2("");

  }

  const ValidarLog = (e) => {
    e.preventDefault();
    if(emaillog === "" || passwordlog === ""){
      setErrorLog(true);
      return;
    }

    setErrorLog(false);
    setEmailLog("");
    setPasswordLog("");
  
  }

  const [datos, setDatos] = useState('');
  
  const datosPadre = () => {
    setDatos("Datos correctos...");
  }

  return (
    <>
      {/* Formulario con los eventos onSubmit, onChange, */}
      {/* estados en general: errores y eventos (puntos 3 y 4) */}
      <div>
        <form className="formulario" onSubmit={validarDatos}>
        {error ? <p className='btn-danger p-1'>Todos los campos son obligatorios</p> : passworderror ? <p className='btn-danger p-1'>Las contraseñas no coinciden</p> : null}
        <div className="form-group">
          <label>Nombre: </label>
          <input
            type="text"
            name="nombre"
            className="form-control"
            onChange={(e) => setNombre(e.target.value)}
            value={nombre}
          />
          </div>

          <div className="form-group">
          <label>Apellido: </label>
          <input
            type="text"
            name="apellido"
            className="form-control"
            onChange={(e) => setApellido(e.target.value)}
            value={apellido}
          />
          </div>

          <div className="form-group">
          <label>E-mail: </label>
          <input
            type="email"
            name="email"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          </div>

          <div className="form-group">
          <label>Contraseña: </label>
          <input
            type="password"
            name="password"
            className="form-control"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          </div>

          <div className="form-group">
          <label>Repita su contraseña: </label>
          <input
            type="password"
            name="password2"
            className="form-control"
            onChange={(e) => setPassword2(e.target.value)}
            value={password2}
          />
          </div>

          {/* Botón para procesar el formulario (punto 4) */}
          <Button type="submit" variant="primary"> 
          REGISTRAR 
          </Button>

        </form>
      </div>  

      <div className='fantasma'>Esto no es visible</div>


      <div>
        <h1>¿Ya tienes cuenta?, Iniciar Sesión</h1>
        <form className="formulario" onSubmit={ValidarLog}>{errorlog ? <p className='btn-danger p-1'>Ingrese los datos</p> : null}
        
          <div className="form-group">
          <label>E-mail: </label>
          <input
            type="email"
            name="emaillog"
            className="form-control"
            onChange={(e) => setEmailLog(e.target.value)}
            value={emaillog}
          />
          </div>

          <div className="form-group">
          <label>Contraseña: </label>
          <input
            type="password"
            name="passwordlog"
            className="form-control"
            onChange={(e) => setPasswordLog(e.target.value)}
            value={passwordlog}
          />
          </div>

          
          <Button type="submit" variant='primary' onClick={() => {datosPadre()} }>
          INICIAR SESIÓN
          </Button>

          <Alert datosPadre={datos} />

        </form>

      </div>  
      
    </>
  )
}

export default Formulario;