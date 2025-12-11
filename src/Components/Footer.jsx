import { useBudget } from "../Context/PreferitiContext";

export default function Footer() {
    const { isBudget, addBudget, removeBudget } = useBudget();
    return (
        <>
            <h2>Qui puoi inserire il footer</h2>
            <button onClick={isBudget}>Bottone di Test</button>
        </>
    )
}