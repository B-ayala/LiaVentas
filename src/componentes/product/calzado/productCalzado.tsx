import React from "react";
import { Button } from "../../ui/button";
import { FaCreditCard } from "react-icons/fa"; // Icono de crédito
import { Link } from "react-router-dom";

interface ProductProps {
  productos: {
    id: number;
    nombre: string;
    imagen: string;
    precio: number;
    cuotas: string;
    colores: string[];
  }[];
}

export function ProductCalzado({ productos }: ProductProps) {
  return (
    <div className="py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Calzado</h2>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {productos.map((producto) => (
            <div key={producto.id} className="relative group">
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
                <img
                  alt={`${producto.nombre} collection`}
                  className="object-cover w-full h-full transform transition-transform group-hover:scale-105"
                  src={producto.imagen}
                />
                <div className="absolute inset-0 bg-black/20" />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-xl font-semibold mb-2">{producto.nombre}</h3>
                <p className="text-lg font-bold mb-2">${producto.precio}</p>
                <div className="flex items-center justify-center mb-2">
                  <FaCreditCard className="text-blue-500 mr-2" />
                  <span>{producto.cuotas}</span>
                </div>
                <div className="flex justify-center mb-4">
                  {producto.colores.map((color, index) => (
                    <div
                      key={index}
                      className="w-6 h-6 rounded-full mr-2"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
                <Link to={`/detalleCalzado`}>
                  <Button variant="outline" size="sm">
                    Leer más
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
