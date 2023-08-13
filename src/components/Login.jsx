import {useState} from 'react';

const Login = () => {  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
    const validarDatos = (e) => {
    e.preventDefault();
    if(email === "" || password === "" ){
      setError(true);
      return;
    } 

    setError(false);
    setEmail(""); 
    setPassword("");
    

  }
  
  return (
    <>
      <div>
        <h1>Iniciar Sesión</h1>
        <form className="formulario" onSubmit={validarDatos}>{error ? <p>Todos los campos son obligatorios</p> : null}
        
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

          
          <button type="submit" className="btn btn-primary"> 
          INICIAR SESIÓN 
          </button>

        </form>
      </div>  
    </>
  )
}

export default Login;