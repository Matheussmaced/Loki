import Capa from '../img/capa.png'
import Clock from '../img/clock.png'
import Stars from '../img/star.png'
const Body = () =>{
    return(
        <div id="containerBody">
            <div id="informs">
                <div id="title">
                    <h2>ESTÁ DISPONÍVEL AGORA!</h2>
                    <h1>LOKI</h1>
                </div>
                <div id="informsBody">
                    <img src={Capa} alt='Capa Loki' />
                    <div id="sinopse">
                        <p>Em “Loki” da Marvel Studios, o vilão mercurial Loki (Tom Hiddleston) retoma seu papel como o Deus do Mal em uma nova série que ocorre após os eventos de “Vingadores: Endgame”. </p>
                        
                        <div id="avaliacoes">
                            <img src={Clock} alt="Clock" />
                            <h4>51min</h4>
                            <button id='star1' ><img src={Stars} alt="Star" /></button>
                            <button><img src={Stars} alt="Star" /></button>
                            <button><img src={Stars} alt="Star" /></button>
                            <button><img src={Stars} alt="Star" /></button>
                            <button><img src={Stars} alt="Star" /></button>    
                            <h4 id='date'>2021</h4>          
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body
