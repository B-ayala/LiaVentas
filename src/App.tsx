import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBar } from "./componentes/navBar/navBar";
import { HeroSection } from "./componentes/heroSection/heroSections";
import { SeasonCollections } from "./componentes/seasonCollections/seasonCollections";
import { ProductCalzado } from "./componentes/product/calzado/productCalzado";
import { productosZapatos } from "./componentes/product/calzado/productosZapatos";
import { ProductIndumentaria } from "./componentes/product/indumentaria/productIndumentaria";
import { productosIndumentaria } from "./componentes/product/indumentaria/productosIndumentaria";
import AcercaDeNosotros from "./componentes/acercaDeNosotros/acercaDeNosotros";
import Footer from "./componentes/footer/footer";
import DetalleCalzado from "./componentes/detalleProduct/calzado/detalleCalzado";
import DetalleIndumentaria from "./componentes/detalleProduct/Indumentaria/detalleIndumentaria";

const apiUrl = process.env.REACT_APP_PROD_URL ? process.env.REACT_APP_PROD_URL : process.env.REACT_APP_LOCAL_URL;

const App: React.FC = () => {


  return (
    <Router basename={apiUrl}>
      <div className="min-h-screen">
        <NavBar />
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/collections" element={<SeasonCollections />} />
          <Route path="/calzado" element={<ProductCalzado productos={productosZapatos} />} />
          <Route
            path="/indumentaria"
            element={<ProductIndumentaria productos={productosIndumentaria} />}
          />
          <Route path="/acercaDeNosotros" element={<AcercaDeNosotros />} />
          <Route path="/detalleCalzado" element={<DetalleCalzado />} />
          <Route path="/detalleIndumentaria" element={<DetalleIndumentaria />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
