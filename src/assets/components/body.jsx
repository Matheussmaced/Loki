import Capa from '../img/capa.png'
import Clock from '../img/clock.png'
import Stars from '../img/star.png'
import {Link} from 'react-router-dom'
import {useState} from 'react'
const Body = () =>{

    const [classStar1, setClassStar1] = useState('classeInicial')
    const [classStar2, setClassStar2] = useState('classeInicial')
    const [classStar3, setClassStar3] = useState('classeInicial')
    const [classStar4, setClassStar4] = useState('classeInicial')
    const [classStar5, setClassStar5] = useState('classeInicial')

    const click1Star = () => {
        if(classStar1 === 'starFull'){
            setClassStar1('classeInicial')
            setClassStar2('classeInicial')
            setClassStar3('classeInicial')
            setClassStar4('classeInicial')
            setClassStar5('classeInicial')
        }else{
            setClassStar1('starFull')
        }
    }

    const click2Star = () => {
        if(classStar2 === 'starFull'){
            setClassStar1('classeInicial')
            setClassStar2('classeInicial')
            setClassStar3('classeInicial')
            setClassStar4('classeInicial')
            setClassStar5('classeInicial')
        }else{
            setClassStar2('starFull')
            setClassStar1('starFull')
        }
    }

    const click3Star = () => {
        if(classStar3 === 'starFull'){
            setClassStar1('classeInicial')
            setClassStar2('classeInicial')
            setClassStar3('classeInicial')
            setClassStar4('classeInicial')
            setClassStar5('classeInicial')
        }else{
            setClassStar3('starFull')
            setClassStar2('starFull')
            setClassStar1('starFull')
        }
    }

    const click4Star = () => {
        if(classStar4 === 'starFull'){
            setClassStar1('classeInicial')
            setClassStar2('classeInicial')
            setClassStar3('classeInicial')
            setClassStar4('classeInicial')
            setClassStar5('classeInicial')
        }else{
            setClassStar4('starFull')
            setClassStar3('starFull')
            setClassStar2('starFull')
            setClassStar1('starFull')
        }
    }

    const click5Star = () => {
        if(classStar5 === 'starFull'){
            setClassStar1('classeInicial')
            setClassStar2('classeInicial')
            setClassStar3('classeInicial')
            setClassStar4('classeInicial')
            setClassStar5('classeInicial')
        }else{
            setClassStar5('starFull')
            setClassStar4('starFull')
            setClassStar3('starFull')
            setClassStar2('starFull')
            setClassStar1('starFull')
        }
    }

    return(
        <div id="containerBody">
            <div id="informs">
                <div id="title">
                    <h2>ESTÁ DISPONÍVEL AGORA!</h2>
                    <h1>LOKI</h1>
                </div>
                <div id="informsBody" className='reverse' >
                    <img id='capa' src={Capa} alt='Capa Loki' />
                    <div id="sinopse">
                        <div id="paragrafo">
                            <p>Em “Loki” da Marvel Studios, o vilão mercurial Loki (Tom Hiddleston) retoma seu papel como o Deus do Mal em uma nova série que ocorre após os eventos de “Vingadores: Endgame”. </p>
                        </div>
                        
                        <div id="avaliacoes">
                            <img id='clock' src={Clock} alt="Clock" />
                            <h4>51min</h4>
                            <button id='star1' onClick={click1Star}  className={`stars ${classStar1}`}  ><img className='starImg' src={Stars} alt="Star" /></button>
                            <button id='star2' onClick={click2Star} className={`stars ${classStar2}`} ><img className='starImg' src={Stars} alt="Star" /></button>
                            <button id='star3' onClick={click3Star} className={`stars ${classStar3}`} ><img className='starImg' src={Stars} alt="Star" /></button>
                            <button id='star4' onClick={click4Star} className={`stars ${classStar4}`} ><img className='starImg' src={Stars} alt="Star" /></button>
                            <button id='star5' onClick={click5Star} className={`stars ${classStar5}`} ><img className='starImg' src={Stars} alt="Star" /></button>    
                            <h4 id='date'>2021</h4>     
                        </div>
                        <div id="buttons">
                            <a href="https://xilften.cz/assistir/serie/loki/" target='_blank'> <button id='assistir'>ASSISTIR AGORA</button> </a>
                           <a href="https://www.youtube.com/watch?v=xdBWrkcmMwU&pp=ygUMdHJhaWxlciBsb2tp" target='_blank'> <button id='trailer'>TRAILER</button> </a>

                            <div id="traco"></div>
                        </div>
                        
                        
                    </div>
                </div>
            </div>

            <div id="background"></div>
        </div>
    )
}

export default Body
