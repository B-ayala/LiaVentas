import { FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa'; 
import fondoContactanos from "../../img/fond.webp";

export default function AcercaDeNosotros() {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: `url(${fondoContactanos})`,
            backgroundBlendMode: 'overlay'
          }}
        />
      </div>
      <div className="relative z-20 container mx-auto px-4">
        <div className="pt-32 pb-20 lg:pt-40 lg:pb-32">
          <div className="max-w-4xl">
            <p className="text-sm font-medium tracking-wider text-gray-300 mb-6">
              CONTÁCTANOS
            </p>
            <h1 className="text-4xl md:text-6xl font-normal text-white mb-6 leading-tight">
              Iniciemos la transformación de tu negocio
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Nuestra presencia global asegura que siempre estemos al alcance.
            </p>
          </div>
        </div>
      </div>

      <div className="relative z-20 bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <p className="text-sm font-medium tracking-wider text-gray-500 mb-6">
              PRESENCIA GLOBAL
            </p>
            <h2 className="text-3xl md:text-5xl font-normal text-gray-900 mb-6">
              ¿En qué podemos ayudarte?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Con oficinas y un equipo dedicado en 7 países alrededor del mundo, estamos preparados para brindarte el apoyo y la experiencia que necesitas, sin importar dónde te encuentres. Contáctanos hoy mismo y hablemos sobre cómo colaborar en tu plan estratégico tecnológico.
            </p>
            
            <div className="flex justify-center space-x-6 md:justify-start">
              <a href="https://wa.me/+5491139181565" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-600">
                <FaWhatsapp size={40} />
              </a>
              <a href="https://www.instagram.com/baspineiroedith/" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-600">
                <FaInstagram size={40} />
              </a>
              <a href="https://www.facebook.com/tuusuario" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">
                <FaFacebook size={40} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
