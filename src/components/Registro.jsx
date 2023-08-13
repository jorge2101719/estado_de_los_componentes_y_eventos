import Formulario from "./Formulario";
import SocialButton from "./SocialButton";
import Alert from "./Alert"


const Registro = () => {
  return (
    <>
      <div>
        <h1>Crea una cuenta</h1>
        <div className="social"><SocialButton /></div>
        <div>O usa tu email para registrarte</div>
        <div className="Formulario"><Formulario /></div>        
        <div className="Alertas"><Alert /></div>
      </div>  
    </>
  )
}

export default Registro;