import React from 'react';
import { TOKEN_KEY } from "../../services/auth";
import { VscCalendar } from "react-icons/vsc";


window.addEventListener('load', function(){
    const btnAgendar = document.querySelector('.cta-btn')
    if( btnAgendar ){
        btnAgendar.addEventListener('click', function(){
            agendarHorario()
        })
    }

    // const btnHamburguer = document.querySelector('.hamburguer')
    // btnHamburguer.addEventListener('click', function(){
    //     let navHamburguer = document.querySelector('.contacts > nav')
    //     navHamburguer.classList.toggle('show')
    // })

    divCtaBtn()
})

function divCtaBtn(){
    const divCtaBtn = document.querySelector('.cta-btn')
    const spnMaterial = document.createElement('span')
    const linkAgendamento = document.createElement('a')

    spnMaterial.classList.add('material-icons')
    spnMaterial.append(<VscCalendar/>)

    linkAgendamento.append('Agende seu horário')
    linkAgendamento.setAttribute('href', '/agendamento')

    divCtaBtn.appendChild(spnMaterial)
    divCtaBtn.appendChild(linkAgendamento)
    divCtaBtn.setAttribute('title', 'Realizar Agendamento')
}

function agendarHorario(){
    if( !localStorage.getItem(TOKEN_KEY) ){
        // location.href = '/Login'
    }
}

