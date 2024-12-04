import { Button } from "../ui/button";
import fondoRopa from "../../img/fond.webp"; 
import fondoZapatos from "../../img/zapatos.png"
import { useNavigate } from "react-router-dom";
export function HeroSection() {
  const navigate = useNavigate();

  const calzadoViews = () => {
    navigate("/calzado");
  };

  const calzadoIndumentaria = () => {
    navigate("/indumentaria");
  };


  return (
    <div className="flex h-screen">
      {/* Sección de Ropa */}
      <div 
        className="relative flex-1 bg-[#FAF9F6]" 
        style={{
          backgroundImage: `url(${fondoRopa})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center', 
          height: '100vh', 
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 md:px-8 h-full flex flex-col justify-center">
          <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Lia</h1>
            <h2 className="text-2xl text-white mb-6 font-light">Parte de tu vida</h2>
            <p className="text-muted-foreground text-white mb-8">
              We make your dreams come true through each piece of clothing
            </p>
            <Button className="bg-[#800000] hover:bg-[#600000]" onClick={calzadoIndumentaria}>Indumentaria</Button>
          </div>
        </div>
      </div>

      {/* Sección de Zapatos */}
      <div 
        className="relative flex-1 bg-[#FAF9F6]" 
        style={{
          backgroundImage: `url(${fondoZapatos})`,
          backgroundSize: 'cover', 
          backgroundPosition: 'center', 
          height: '100vh', 
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 md:px-8 h-full flex flex-col justify-center">
          <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Lia</h1>
            <h2 className="text-2xl text-white mb-6 font-light">Donde vos quieras</h2>
            <p className="text-muted-foreground text-white mb-8">
              Discover your perfect pair of shoes
            </p>
            <Button className="bg-[#800000] hover:bg-[#600000]" onClick={calzadoViews}>Calzado</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
