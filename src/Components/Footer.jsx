import { useBudget } from "../Context/PreferitiContext";

export default function Footer() {
    const { isBudget, addBudget, removeBudget, changeBudget } = useBudget();
    return (
        <>
            <h2>Qui puoi inserire il footer</h2>
            <button onClick={isBudget}>Bottone di Test is</button>
            <button onClick={addBudget}>Bottone di Test add</button>
            <button onClick={removeBudget}>Bottone di Test remove</button>
            <button onClick={changeBudget}>Bottone di Test effettivo</button>
        </>
    )
}