import Formulario from "./Formulario";
import SocialButton from "./SocialButton";
// import Alert from "./Alert";
import '../App.css'


const Registro = () => {

  return (
    <>
      <div className="registro">
      {/* Registro recibe a los restantes elementos creados (punto 1) */}
        <h1>Crea una cuenta</h1>
        <div className="social">
        {/* se pasan los íconos a través de props (punto 2) */}
          <SocialButton logo={<i className='fa-brands fa-facebook fa-3x'></i>} />
          <SocialButton logo={<i className='fa-brands fa-github fa-3x'></i>} />
          <SocialButton logo={<i className='fa-brands fa-linkedin-in fa-3x'></i>} />
        </div>
        <div className="subtitulo">O usa tu email para registrarte</div>
        <div className="Formulario"><Formulario /></div>        
        {/* <div className="Alertas"><Alert datosPadre={datos} /></div> */}
      </div>  
    </>
  )
}

export default Registro;