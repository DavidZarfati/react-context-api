import { Link } from "react-router-dom"
import '../App.css'
export default function Home() {
    return (
        <>
            <div className="homePage">
                <h2>Benvenuto nella home</h2>
                <h3>Nella pagina dei prodotti, troverai tutte le nostre principali offerte!</h3>
                <p>Non dimenticarti di seguirci sui social e di valutare tutti i nostri prodotti su ogni piattaforma</p>
                <div className="col row-cols-3 d-flex flex-wrap justify-content-center">

                    <div className="card">
                        <img className="card-img-top" src="..." alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Ruolo Nell'azienda</h5>
                            <p className="card-text">Descrizione della persona e delle sue competenze</p>
                            <a href="#" className="btn btn-primary">Pagina Del Dipendente/contatti</a>
                        </div>
                    </div>
                    <div className="card">
                        <img className="card-img-top" src="..." alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Ruolo Nell'azienda</h5>
                            <p className="card-text">Descrizione della persona e delle sue competenze</p>
                            <a href="#" className="btn btn-primary">Pagina Del Dipendente/contatti</a>
                        </div>
                    </div>
                    <div className="card">
                        <img className="card-img-top" src="..." alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Ruolo Nell'azienda</h5>
                            <p className="card-text">Descrizione della persona e delle sue competenze</p>
                            <a href="#" className="btn btn-primary">Pagina Del Dipendente/contatti</a>
                        </div>
                    </div>
                    <div className="card">
                        <img className="card-img-top" src="..." alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Ruolo Nell'azienda</h5>
                            <p className="card-text">Descrizione della persona e delle sue competenze</p>
                            <a href="#" className="btn btn-primary">Pagina Del Dipendente/contatti</a>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}