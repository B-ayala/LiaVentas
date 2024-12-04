import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-white py-12 px-4 border-t">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Newsletter Section */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase text-muted-foreground">Suscríbete a nuestro Newsletter</h3>
            <form className="flex space-x-2">
              <input
                type="email"
                className="w-full p-2 border rounded-md text-sm"
                placeholder="Ingresa tu correo"
              />
              <button
                type="submit"
                className="px-4 py-2 text-sm font-medium text-white bg-black rounded-md hover:bg-gray-800"
              >
                Suscribirse
              </button>
            </form>
          </div>

          {/* Contact Section */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase text-muted-foreground">Contáctanos</h3>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">11 4144-2409</p>
              <p className="text-sm text-muted-foreground">+54 11 4144-2409</p>
              <p className="text-sm text-muted-foreground">Lia@gmail.com</p>
              <p className="text-sm text-muted-foreground">Aranguren 3224- Flores-Capital Federal</p>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase text-muted-foreground">Síguenos</h3>
            <div className="flex justify-center space-x-6 md:justify-start">

              <a
                href="https://www.instagram.com/baspineiroedith/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 hover:text-pink-600"
              >
                <FaInstagram size={40} />
              </a>
              <a
                href="https://www.facebook.com/tuusuario"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700"
              >
                <FaFacebook size={40} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
