import { motion } from 'framer-motion';
import { Home, Ruler, HardHat, TrendingUp } from 'lucide-react';

const Services = () => {
    const services = [
        {
            icon: <Home size={40} />,
            title: "Construcción Residencial",
            description: "Desarrollamos conjuntos residenciales y casas a medida, enfocados en el confort y el estilo de vida moderno."
        },
        {
            icon: <Ruler size={40} />,
            title: "Diseño Arquitectónico",
            description: "Creamos diseños innovadores y funcionales que aprovechan al máximo cada espacio y luz natural."
        },
        {
            icon: <HardHat size={40} />,
            title: "Gerencia de Proyectos",
            description: "Gestionamos integralmente obras civiles, asegurando el cumplimiento de cronogramas y presupuestos."
        },
        {
            icon: <TrendingUp size={40} />,
            title: "Venta de Lotes",
            description: "Ofrecemos lotes campestres y urbanos en zonas de alta valorización en Montería."
        }
    ];

    return (
        <section id="servicios" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h3 className="text-primary font-bold text-lg mb-2 uppercase tracking-wider">Nuestros Servicios</h3>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Soluciones Integrales en Construcción</h2>
                    <div className="w-24 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
                        >
                            <div className="mb-6 text-primary group-hover:scale-110 transition-transform duration-300 bg-primary/5 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-gray-800 text-center">{service.title}</h3>
                            <p className="text-gray-600 text-center leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
