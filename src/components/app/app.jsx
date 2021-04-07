import React from 'react'
import './app.css'
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from '../firebase/context/authContext';
import { CartContext, CartContextProvider } from './hooks/cartContext'
import Header from '../header'
import Offers from '../currentoffers/offersview'
import LoginForm from '../logginn/logginn';
import Navigation from '../navigation/navigation';
import Registrer from '../registrer/registrer';
import ProductPage from '../productpage/productpage';
import ProfilSide from '../profilSide/profilSide';
import ProtectedRoute from '../protectedRoutes/protectedRoute';
import Footer from '../footer/footer'
import CartPage from '../shoppingcart/cartpage';
import CategoryPage from '../categories/categorypage';

function App() {
  return (
    <AuthProvider>
      <CartContextProvider>
        <div className="App">
          <Header />
          <div className="MainView">
            <Navigation />
            <Routes>
              <Route exact path="/" element={<Offers />} />
              <Route path="/cart">
                <CartPage />
              </Route>
              <Route path="/products/:productCategory/:productId">
                <ProductPage />
              </Route>
              <Route path="/products/*">
                <CategoryPage />
              </Route>
              <Route path="/login" element={<LoginForm />} />
              <Route path="/registrer" element={<Registrer />} />
              <ProtectedRoute isAuth={true} path="/profile" component={ProfilSide} redirectTo='/login' />
            </Routes>
            <Footer />
          </div>
        </div>
      </CartContextProvider>
    </AuthProvider>
  )
}

export default App
