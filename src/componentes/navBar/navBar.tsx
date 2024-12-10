import { useState } from "react";
import { Search, ShoppingCart, User, Menu } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Link } from "react-router-dom";

export function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="border-b">
      <div className="bg-[#800000] text-white text-center py-2 text-sm">
        MEGA SALE - Take 10% OFF
      </div>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Menú hamburguesa en dispositivos móviles */}
        <div className="flex items-center space-x-4 md:hidden">
          <Button size="icon" variant="ghost" onClick={toggleMenu}>
            <Menu className="h-5 w-5" />
          </Button>
          {/* Input de búsqueda móvil */}
          <div className="relative">
            <Input
              className="w-[150px] pl-8"
              placeholder="Search"
              type="search"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          </div>
        </div>

        <nav className="flex items-center space-x-8">
          <Link to="/" className="text-xl font-semibold hidden md:block">
            Lia
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-sm">Home</Link>
            <Link to="/calzado" className="text-sm">Calzado</Link>
            <Link to="/indumentaria" className="text-sm">Indumentaria</Link>
            <Link to="/acercaDeNosotros" className="text-sm">Acerca de nosotros</Link>
          </div>
        </nav>

        <div className="flex items-center space-x-4">
          <div className="relative hidden md:block">
            <Input className="w-[200px] pl-8" placeholder="Search" type="search" />
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          </div>
          <Button size="icon" variant="ghost">
            <User className="h-5 w-5" />
          </Button>
          <Button size="icon" variant="ghost">
            <ShoppingCart className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Menú desplegable móvil */}
      {isMenuOpen && (
        <div className="md:hidden bg-white text-black space-y-4 p-4">
          <Link to="/" className="text-xl font-semibold">Lia</Link>
          <Link to="/" className="text-sm block">Home</Link>
          <Link to="/calzado" className="text-sm block">Calzado</Link>
          <Link to="/indumentaria" className="text-sm block">Indumentaria</Link>
          <Link to="/acercaDenosotros" className="text-sm block">Acerca de nosotros</Link>
        </div>
      )}
    </div>
  );
}
