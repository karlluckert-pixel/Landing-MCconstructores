import { motion } from 'framer-motion';

const Hero = () => {
    // Using a placeholder that fits the construction theme
    const heroImage = "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80";

    return (
        <section id="inicio" className="relative h-[90vh] flex items-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src={heroImage}
                    alt="Construction Site"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/40"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10 text-white">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl"
                >
                    <h2 className="text-xl md:text-2xl font-light mb-4 text-secondary">
                        Construyendo el Futuro de Montería
                    </h2>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                        Calidad, Innovación y <span className="text-blue-300">Confianza</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed">
                        En MC Constructores transformamos espacios y creamos hogares.
                        Especialistas en proyectos residenciales, lotes campestres y urbanismo
                        en la región de Córdoba.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <a
                            href="#proyectos"
                            className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-full font-bold text-lg text-center transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            Ver Proyectos
                        </a>
                        <a
                            href="#contactanos"
                            className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-full font-bold text-lg text-center transition-all bg-opacity-20 backdrop-blur-sm"
                        >
                            Contáctanos
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-secondary to-transparent"></div>
        </section>
    );
};

export default Hero;
