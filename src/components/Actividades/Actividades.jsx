import React from 'react';
import '../Actividades/actividades.css';
import { Link } from 'react-router-dom';

//Icon
import icon from '../assets/logo.ico';

//Imagenes
import Excursiones from '../assets/ImagenesActividades/ExcursioenesHistoricas.jpg'
import Senderismo from '../assets/ImagenesActividades/SenderismoBosque.jpg'
import BiciM from '../assets/ImagenesActividades/BiciMontaña.jpg'
import BiciC from '../assets/ImagenesActividades/BiciCarretera.jpg'

const actividades = () => {
    return (
        <div className='wrapper'>
            <header>
                {/* <img id='logo' src={icon} alt="Logo de Arena Camping" /> */}
                <h1>Arena Camping</h1>
                <nav className='headBars'>
                    <ul>
                        <li><Link to="/">Inicio</Link></li>
                        <li><Link to="/Servicios">Servicio</Link></li>
                        <li><Link to="/Actividades">Actividades</Link></li>
                        <li><Link to="/Entorno">Entorno</Link></li>
                        <li><Link to="/Contacto">Contacto</Link></li>
                        <li><Link to="/Precios">Precios</Link></li>
                        <li><Link to="/Localización">Localización</Link></li>
                    </ul>
                </nav>
            </header>
            <div className="main-content">
                <main className='titulo'>
                    <section>
                        <h1>Actividades</h1>

                    </section>

                    <section id="actividad" class="tabla">
                        <div>
                            <div>
                                <h3 id='h3'>Actividades</h3>
                                <br />
                            </div>
                            <div>
                                <button className='boton'>VER MÁS</button>
                                <p className='pText'>Escalada</p>
                            </div>
                            <div>
                                <button className='boton'>VER MÁS</button>
                                <p className='pText'>Cicilismo</p>
                            </div>
                            <div>
                                <button className='boton'>VER MÁS</button>
                                <p className='pText'>Senderismo</p>
                            </div>
                            <div>
                                <button className='boton'>VER MÁS</button>
                                <p className='pText'>Tiro con arco</p>
                            </div>
                        </div>
                        <div id='aseguradora'>
                            <a className='linky' href="#Seguros">Aseguradoras</a>
                        </div>
                    </section>
                    
                    <section className='slider'>
                        <div className='slider--inner'>
                            <img src={Excursiones} alt="img1" />
                            <img src={Senderismo} alt="img2" />
                            <img src={BiciM} alt="img3" />
                            <img src={BiciC} alt="img4" />
                        </div>
                    </section>


                    <section className='Galeria'>
                        <img src={Excursiones} alt="img1" />
                        <img src={Senderismo} alt="img2" />
                        <img src={BiciM} alt="img3" />
                        <img src={BiciC} alt="img4" />
                    </section>

                    <section className='Partes'>
                        <h1>¡No te pierdas nada!</h1>
                        <h4>Consulta aqui todas las noticias de Arena Camping Granada</h4>
                    </section>

                    <section className='Partes'>
                        <h1 >Reserva ya tu plaza en Arena Camping</h1>
                        <h5 >Disponemos de x plazas, todas, desde X metros. ¡Contáctanos para saber más!</h5>
                        <div id='aseguradora'>
                            <button id='cont' ><Link to="/Contacto">¡Contacta!</Link></button>
                        </div>

                    </section>

                    <section className='Partes'>
                        <div>
                            <div id='Seguros'>
                                <h3 id='h3'>Seguros</h3>
                                <p >Seguro para las actividades al aire libre</p>
                                <br />
                            </div>
                            <div>
                                <button className='boton'>VER MÁS</button>
                                <p className='pText'>Seguro Escalada</p>
                            </div>
                            <div>
                                <button className='boton'>VER MÁS</button>
                                <p className='pText'> Seguro Cicilismo</p>
                            </div>
                            <div>
                                <button className='boton'>VER MÁS</button>
                                <p className='pText'> Seguro Senderismo</p>
                            </div>
                            <div>
                                <button className='boton'>VER MÁS</button>
                                <p className='pText'>Seguro Tiro con arco</p>
                            </div>
                        </div>
                    </section>

                </main>
            </div>


            <footer className="footer-page">
                <div className='footer-container'>
                    <div className="footer-info">
                        <h4 id='info-Footer'>Información</h4>
                        <div className="info-table">
                            <div className="info-row">
                                <span>Empresa: </span>
                                <span>Arena Camping Granada</span>
                            </div>
                            <div className="info-row">
                                <span>Dirección: </span>
                                <span>18183 Huétor de Santillán Granda, España</span>
                            </div>
                            <div className="info-row">
                                <span>Teléfono: </span>
                                <span>666-666-666</span>
                            </div>
                            <div className="info-row">
                                <span>Email: </span>
                                <span>info@campingnaturaleza.com</span>
                            </div>
                        </div>
                    </div >
                    <div className="footer-image">
                        <img src={icon} alt="Arena Camping" />
                    </div>
                </div >
                <br />
                <p className="copyright">© 2024 | Felipe Toledano Escudero</p>
                <nav>
                    <ul>
                        <li><Link to="/">Inicio</Link></li>
                        <li><a href="#about">Acerca de</a></li>
                        <li><a href="#contact">Contacto</a></li>
                        <li><a href="#work-with-us">Trabaja con nosotros</a></li>
                    </ul>
                </nav>
            </footer >
        </div >
    );
};

let sliderInner = document.querySelector(".slider--inner");

setInterval(function(){
    let percentage
})

export default actividades;
