import React from 'react';
import '../Inicio/inicio.css'

//imagenes
import arealibre from '../assets/Imagenes Servicios/arealibre.png';
import camping from '../assets/Imagenes Servicios/camping.png';
import duchas from '../assets/Imagenes Servicios/duchas.png';
import electricidad from '../assets/Imagenes Servicios/electricidad.png';
import electrodomesticos from '../assets/Imagenes Servicios/electrodomesticos.png';
import parking from '../assets/Imagenes Servicios/parking.png';
import vaciadoaguas from '../assets/Imagenes Servicios/vaciadoaguas.png';

import { FaPhotoVideo } from "react-icons/fa";

//Comando para comentar Ctrl + K + C
const GaleryPanel = () => {
    return (
        <div>
            <section>
                <div className="container-galeria">
                    <div className="icon-text-container">
                        <h2 className="icon-text"><FaPhotoVideo class="icon" />Discover our facilities</h2>
                    </div>
                </div>
                <div className='Album'>
                    <div className='box'>
                        <img src={arealibre} alt="img1" />
                    </div>
                    <div className='box'>
                        <img src={electricidad} alt="img2" />
                    </div>
                    <div className='box'>
                        <img src={duchas} alt="img3" />
                    </div>
                    <div className='box'>
                        <img src={camping} alt="img4" />
                    </div>
                    <div className='box'>
                        <img src={electrodomesticos} alt="img5" />
                    </div>
                    <div className='box'>
                        <img src={parking} alt="img6" />
                    </div>
                    <div className='box'>
                        <img src={vaciadoaguas} alt="img7" />
                    </div>
                </div>
            </section>
        </div >
    );
};

export default GaleryPanel;