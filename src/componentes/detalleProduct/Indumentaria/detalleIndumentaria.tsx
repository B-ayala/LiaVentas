"use client";

import { useEffect, useState } from "react";
import { Heart, Star } from "lucide-react";
import { Button } from "../../ui/button";

import vestido from "../../../img/indumentaria/vestidoVerde.webp";

interface ColorOption {
  name: string;
  image: string;
}

interface Size {
  value: string;
  label: string;
}

const DetalleIndumentaria: React.FC = () => {
  const [selectedSize, setSelectedSize] = useState<string>("2");
  const [selectedColor, setSelectedColor] = useState<string>("Negro");

  const sizes: Size[] = [
    { value: "2", label: "S" },
    { value: "3", label: "M" },
    { value: "4", label: "L" },
    { value: "5", label: "XL" },
  ];

  const colorOptions: ColorOption[] = [
    { name: "Negro", image: "" },
    { name: "Rojo", image: "" },
  ];

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";  // Evita que el navegador restaure el scroll automáticamente
    }
    // Hacer scroll hacia arriba
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image and Thumbnails */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-8">
          {/* Main Image */}
          <div className="relative w-full md:w-3/4">
            <img
              src={vestido}
              alt="Vestido Largo Lentejuelas"
              className="object-cover w-full h-full rounded-lg"
            />
          </div>

          {/* Thumbnails */}
          <div className="flex flex-wrap gap-2 mt-4 md:mt-0 justify-center md:justify-start">
            {[1, 2].map((_, i) => (
              <button
                key={i}
                className="w-20 h-28 border rounded-lg overflow-hidden"
              >
                <img
                  src={vestido}
                  alt={`Color Option ${i + 1}`}
                  className="object-cover w-full h-full"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <div className="flex justify-between items-start">
            <div>
              <Button variant="link" className="p-0 h-auto">
                Ver más productos marca Analizza
              </Button>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>Nuevo</span>
                <span>•</span>
                <span>+25 vendidos</span>
              </div>
            </div>
            <Button variant="ghost" size="icon">
              <Heart className="w-5 h-5" />
            </Button>
          </div>

          <h1 className="text-2xl font-semibold">
            Vestido Largo Lentejuelas Y Taza Con Short Adentro 2 Al 5
          </h1>

          <div className="flex items-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-yellow-400 stroke-yellow-400"
                />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">(1)</span>
          </div>

          <div className="space-y-1">
            <div className="text-3xl font-bold">$ 49.990</div>
            <div className="text-sm text-muted-foreground">
              en 6 cuotas de $11.288
            </div>
            <Button variant="link" className="p-0 h-auto">
              Ver los medios de pago
            </Button>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <label className="font-medium">Color: {selectedColor}</label>
              <div className="flex gap-2">
                {colorOptions.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={`w-12 h-16 rounded-lg border-2 overflow-hidden ${
                      selectedColor === color.name
                        ? "border-primary"
                        : "border-transparent"
                    } ${
                      color.name === "Negro"
                        ? "bg-black"
                        : color.name === "Rojo"
                        ? "bg-red-600"
                        : ""
                    }`}
                  >
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <label className="font-medium">Talle:</label>
              <div className="flex flex-wrap gap-2">
                {sizes.map((size) => (
                  <Button
                    key={size.label} // Usar `label` como key
                    variant="outline"
                    className={`w-16 ${
                      selectedSize === size.value
                        ? "border-primary border-2"
                        : ""
                    }`}
                    onClick={() => setSelectedSize(size.value)}
                  >
                    {size.label} {/* Mostrar solo la letra del talle */}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          <Button className="w-full py-6 text-lg">Comprar ahora</Button>
        </div>
      </div>
    </div>
  );
};

export default DetalleIndumentaria;
