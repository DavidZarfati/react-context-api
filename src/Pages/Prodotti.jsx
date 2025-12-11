import { NavLink } from "react-router-dom"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.css"
export default function Prodotti({ prodotti, budgetMode }) {
    const prodottiFiltrati = budgetMode
        ? prodotti.filter((prodotto) => prodotto.price <= 30)
        : prodotti;




    return (
        <>

            <div className="row row-cols-3 h-100">
                {Array.isArray(prodottiFiltrati) && prodottiFiltrati.length > 0 ? (
                    prodottiFiltrati.map((prodotto, index) => (
                        <div className="col card mb-3" key={index}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={prodotto.image} className="img-fluid rounded-start" alt={prodotto.title} />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">{prodotto.title}</h5>
                                        <p className="card-text">{prodotto.description}</p>
                                        <p className="card-text"><small class="text-muted">prezzo : {prodotto.price}$</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>


                    ))
                ) : (
                    <p>Nessun prodotto disponibile.</p>
                )}

            </div>
        </>
    )
}