import Formulario from "./Formulario";
import SocialButton from "./SocialButton";
import Alert from "./Alert"
import Login from "./Login";

const Registro = () => {
  return (
    <>
      <div>
        <h1>Crea una cuenta</h1>
        <div className="social"><SocialButton /></div>
        <div className="Formulario"><Formulario /></div>        
        <div className="Alertas"><Alert /></div>
      </div>  
    </>
  )
}

export default Registro;