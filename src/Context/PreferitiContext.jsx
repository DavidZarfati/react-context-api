import { createContext, useContext, useState } from "react";

const BudgetContext = createContext();

function BudgetProvider({ children }) {
    const [budgetMode, setBudgetMode] = useState(false);

    function isBudget(idPersonaggio) {
        console.log("isBudget");

    }

    function addBudget(idPersonaggio) {
        console.log("addBudget");
    }

    function removeBudget(idPersonaggio) {
        console.log("removeBudget");
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
