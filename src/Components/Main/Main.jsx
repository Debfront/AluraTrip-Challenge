import React from "react"
import './main.css'
import orlando from '../../img/orlando.jpg'
import italia from '../../img/italia.jpg'
import londres2 from '../../img/londres2.jpg'

const Main = () => {
  


    return (
        <section class="destino">
        <h2 class="destino__title">Melhores Destinos</h2>
        <div class="destino__lugares">
            <div class="destino__lugares__box">
                <ul class="destino__lugares__list">
                
                    <li class="destino__lugares__item__img"><img src={orlando} alt="" /></li>
                    <li class="destino__lugares__item__title"><h4>Orlando</h4></li>
                    <li class="destino__lugares__item__subtitle"><p>Temporada de inverno</p></li>
                </ul>
            </div>
            <div class="destino__lugares__box">
                <ul class="destino__lugares__list">
                   
                    <li class="destino__lugares__item__img"><img src={italia} alt="" /></li>
                    <li class="destino__lugares__item__title"><h4>Italia</h4></li>
                    <li class="destino__lugares__item__subtitle"><p>Maio a junho</p></li>
                </ul>
            </div>
            <div class="destino__lugares__box">
                <ul class="destino__lugares__list">
                   
                    <li class="destino__lugares__item__img"><img src={londres2} alt="" /></li>
                    <li class="destino__lugares__item__title"><h4> Londres</h4></li>
                    <li class="destino__lugaress__item__subtitle"><p>Novembro</p></li>
                </ul>
            </div>
        </div>
    </section>
       
   
    )
}


export default Main;