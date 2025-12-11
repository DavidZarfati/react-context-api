import { createContext, useContext, useState } from "react";

const BudgetContext = createContext();

function BudgetProvider({ children }) {
    const [budgetMode, setBudgetMode] = useState(false);

    function isBudget(idPersonaggio) {
        return Budget.includes(idPersonaggio);
    }

    function addBudget(idPersonaggio) {
        setBudget((current) => [...current, idPersonaggio]);
    }

    function removeBudget(idPersonaggio) {
        setBudget((current) => current.filter((id) => id !== idPersonaggio));
    }
    const contextValue = {
        isBudget,
        addBudget,
        removeBudget,
    };

    return (
        <BudgetContext.Provider value={contextValue}>
            {children}
        </BudgetContext.Provider>
    );
}
// Hook per il consumer
function useBudget() {
    const value = useContext(BudgetContext);
    return value;
}

export { BudgetContext, BudgetProvider, useBudget };
