import React from 'react';
import { VscCalendar } from "react-icons/vsc";

// window.addEventListener('load', function(){
//     const btnAgendar = document.querySelector('.cta-btn')
//     if( btnAgendar ){
//         btnAgendar.addEventListener('click', function(){
//             agendarHorario()
//         })
//     }

//     // const btnHamburguer = document.querySelector('.hamburguer')
//     // btnHamburguer.addEventListener('click', function(){
//     //     let navHamburguer = document.querySelector('.contacts > nav')
//     //     navHamburguer.classList.toggle('show')
//     // })

//     divCtaBtn()
// })

// function agendarHorario(){
//     if( !localStorage.getItem(TOKEN_KEY) ){
//         // location.href = '/Login'
//     }
// }

function divCtaBtn(){
    return (
        <div className="cta-btn" title="Realizar agendamento">
            <a href="/agendamento">
                <span className="material-icons"><VscCalendar/></span>
                Agende seu horário
            </a>
        </div>
    )
}

export default divCtaBtn;