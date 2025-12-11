import { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.css"
import './App.css'
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom'
import DefaultLayout from './Layouts/DefaultLayout'
import Home from './pages/Home'
import Prodotti from './pages/Prodotti'
import Prodotto from './pages/Prodotto'
import axios from 'axios'
import Chisiamo from './pages/Chi-siamo'
import ProdottoLayout from './Layouts/ProdottoLayout'
import { BudgetProvider, useBudget } from './Context/PreferitiContext'
import NotFound from './Pages/NotFound'


function AppContent() {
  const [prodotti, setProdotti] = useState([]);
  const { budgetMode } = useBudget();
  function fetchProdotti() {
    axios.get("https://fakestoreapi.com/products")
      .then((resp) => {
        setProdotti(resp.data)
      })
  }
  useEffect(() => {
    fetchProdotti()
  }, [budgetMode])

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/chi-siamo' element={<Chisiamo />} />
          <Route path='/prodotti' element={<Prodotti prodotti={prodotti} budgetMode={budgetMode} />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route element={<ProdottoLayout prodotti={prodotti} />}>
          <Route path='/prodotti/:id' element={<Prodotto prodotti={prodotti} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function App() {
  return (
    <BudgetProvider>
      <AppContent />
    </BudgetProvider>
  );
}

export default App
