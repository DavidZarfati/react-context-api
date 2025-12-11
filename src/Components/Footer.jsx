import { useBudget } from "../Context/PreferitiContext";
import '../App.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
export default function Footer() {
    const { isBudget, addBudget, removeBudget, changeBudget } = useBudget();
    return (
        <>
            <footer>
                <h2>Thank you for your time</h2>
                {/* <button onClick={isBudget}>Bottone di Test is</button>
            <button onClick={addBudget}>Bottone di Test add</button>
            <button onClick={removeBudget}>Bottone di Test remove</button>
            <button onClick={changeBudget}>Bottone di Test effettivo</button> */}
                <h4>We appreciate your interest, if you need more information, contact Us Here</h4>

                <div className="wrapper-footer">
                    <ul>
                        <li><span><i class="bi bi-envelope"></i></span>Boolmazon@gmail.com</li>
                        <li><span><i class="bi bi-telephone"></i></span>+39 334 443 2609</li>
                        <li><span><i class="bi bi-instagram"></i>@Boolmazon</span></li></ul>
                </div>
            </footer>
        </>
    )
}