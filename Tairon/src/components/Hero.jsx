import pc from "../assets/pc.png";

const Hero = () => {
  return (
    <section className="bg-black text-white min-h-[78vh] flex items-center pt-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 items-center gap-8">
        {/* TEXTO */}
        <div className="space-y-5">
          <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
            Arma tu PC ideal
            <br />
            <span className="text-yellow-400">
              sin salirte de tu presupuesto
            </span>
          </h1>

          <p className="text-gray-400 text-sm md:text-base max-w-md">
            Te ayudamos a elegir y armar tu computador con el mejor rendimiento
            posible según tu presupuesto.
          </p>

          <a
            href="https://wa.me/57TU_NUMERO"
            target="_blank"
            className="inline-block bg-yellow-400 text-black px-5 py-2.5 rounded-lg font-medium hover:bg-yellow-300 transition shadow-md"
          >
            Cotizar ahora
          </a>
        </div>

        {/* IMAGEN */}
        <div className="relative flex justify-center">
          <div className="absolute w-[300px] h-[300px] bg-yellow-500 opacity-15 blur-3xl rounded-full"></div>

          <img
            src={pc}
            alt="PC Gamer"
            className="relative z-10 w-[260px] md:w-[340px] mt-6 md:mt-0"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
