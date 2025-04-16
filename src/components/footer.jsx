import React from "react";
import '@/components/footer.css'

const Footer = () =>{

    return(
        <footer id="footer">
                <div className="footer-logos">
                    {/*<img src="Imagenes/Resources/Cultura.jpg" alt="Cultura Logo" className="footer-logo-cul" />*/}
                    <img src="Imagenes/Resources/logo_85.svg" alt="Logo 85 Aniversario" className="footer-logo-an" />
                </div>
                <div className="footer-bottom">
                    {/* Aquí puedes colocar cualquier contenido adicional para el pie de página */}
                    <p>Términos y condiciones</p>
                </div>
            </footer>
    )
}

export default Footer