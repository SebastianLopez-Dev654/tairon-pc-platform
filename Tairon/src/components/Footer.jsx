import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      {/* LÍNEA ARRIBA */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-yellow-300 to-transparent shadow-[0_0_10px_rgba(255,200,0,0.7)]"></div>

      <div className="max-w-6xl mx-auto px-6 py-8 grid md:grid-cols-3 gap-6">
        {/* MARCA */}
        <div>
          <h2 className="text-lg font-semibold text-yellow-400 mb-2">TAIRON</h2>
          <p className="text-gray-400 text-sm">
            PCs optimizadas para rendimiento real.
          </p>
        </div>

        {/* LINKS */}
        <div className="text-sm text-gray-400">
          <p className="mb-1 hover:text-yellow-400 cursor-pointer">Inicio</p>
          <p className="mb-1 hover:text-yellow-400 cursor-pointer">Servicios</p>
          <p className="mb-1 hover:text-yellow-400 cursor-pointer">Precios</p>
        </div>

        {/* CONTACTO */}
        <div className="text-sm text-gray-400">
          <p>📱 +57 3208600215</p>
          <p>📧 contacto@tairon.com</p>
        </div>
      </div>

      {/* PARTE FINAL */}
      <div className="text-center py-4 text-yellow-400 text-sm">
        © 2026 Tairon. Todos los derechos reservados.
        <div className="mt-2 flex items-center justify-center gap-2">
          <span className="text-cyan-300">Desarrollado por</span>

          <img src={logo} alt="CodeFortress" className="h-5 object-contain" />

          <span className="font-semibold bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
            CodeFortress
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
