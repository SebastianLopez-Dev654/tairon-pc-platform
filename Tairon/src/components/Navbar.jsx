const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* LOGO */}
        <h1 className="text-yellow-400 font-semibold text-lg tracking-wide">
          TAIRON
        </h1>

        {/* MENU */}
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-300">
          <a href="#" className="hover:text-yellow-400 transition">
            Características
          </a>
          <a href="#" className="hover:text-yellow-400 transition">
            Precios
          </a>
          <a href="#" className="hover:text-yellow-400 transition">
            Contacto
          </a>
        </div>

        {/* BOTONES */}
        <div className="flex items-center gap-3 text-sm">
          <button className="text-gray-300 hover:text-white transition">
            Ingresar
          </button>

          <button className="bg-yellow-400 text-black px-4 py-1.5 rounded-md font-medium hover:bg-yellow-300 transition">
            Registrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
