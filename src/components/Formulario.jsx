import {useState} from 'react';
import '../App.css'

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
  /*
  const Mensajelog = (e) => {
    if(emaillog === "" || passwordlog === ""){
      alert("Logeo exitoso")
      return;
    }

    setMensaje("LOGIN EXITOSO")
  }*/

  return (
    <>
    
      <div>
        <form className="formulario" onSubmit={validarDatos}>
        {error ? <p>Todos los campos son obligatorios</p> : passworderror ? <p>Las contraseñas no coinciden</p> : null}
        <div className="form-group">
          <label for='nombre'>Nombre: </label>
          <input
            type="text"
            name="nombre"
            className="form-control"
            onChange={(e) => setNombre(e.target.value)}
            value={nombre}
          />
          </div>

          <div className="form-group">
          <label for='apellido'>Apellido: </label>
          <input
            type="text"
            name="apellido"
            className="form-control"
            onChange={(e) => setApellido(e.target.value)}
            value={apellido}
          />
          </div>

          <div className="form-group">
          <label for='email'>E-mail: </label>
          <input
            type="email"
            name="email"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          </div>

          <div className="form-group">
          <label for='password'>Contraseña: </label>
          <input
            type="password"
            name="password"
            className="form-control"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          </div>

          <div className="form-group">
          <label for='password2'>Repita su contraseña: </label>
          <input
            type="password"
            name="password2"
            className="form-control"
            onChange={(e) => setPassword2(e.target.value)}
            value={password2}
          />
          </div>

          <button type="submit" className="btn btn-primary"> 
          REGISTRAR 
          </button>

        </form>
      </div>  

      

      <div>
        <h1 classname="Logeo">¿Ya tienes cuenta?, Iniciar Sesión</h1>
        <form className="formulario" onSubmit={ValidarLog}>{errorlog ? <p>Ingrese los datos</p> : null}
        
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

          
          <button type="submit" className="btn btn-primary" >
          INICIAR SESIÓN 
          
          </button>
          

        </form>
      </div>  
      
    </>
  )
}

export default Formulario;