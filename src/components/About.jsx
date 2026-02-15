import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const About = () => {
    // Placeholder for "About Us" image
    const aboutImage = "https://images.unsplash.com/photo-1531834685032-c34bf0d84c7c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";

    const features = [
        "Experiencia comprobada en el sector",
        "Equipo de profesionales calificados",
        "Compromiso con la calidad y los plazos",
        "Diseños modernos y sostenibles"
    ];

    return (
        <section id="nosotros" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    {/* Image Side */}
                    <div className="w-full md:w-1/2">
                        <div className="relative">
                            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-full z-0"></div>
                            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-full z-0"></div>
                            <motion.img
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                                src={aboutImage}
                                alt="Sobre Nosotros"
                                className="relative z-10 rounded-lg shadow-xl w-full h-[400px] object-cover"
                            />
                        </div>
                    </div>

                    {/* Text Side */}
                    <div className="w-full md:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-primary font-bold text-lg mb-2 uppercase tracking-wider">Sobre Nosotros</h3>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                                Construimos con Pasión y Excelencia
                            </h2>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                En MC Constructores, nos dedicamos a hacer realidad tus sueños inmobiliarios.
                                Con una trayectoria sólida en Montería y Córdoba, nos hemos consolidado como
                                líderes en el desarrollo de proyectos residenciales y urbanísticos.
                            </p>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                Nuestra misión es entregar hogares de alta calidad que superen las expectativas
                                de nuestros clientes, combinando diseño innovador, materiales de primera y
                                un servicio personalizado.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {features.map((feature, index) => (
                                    <div key={index} className="flex items-center space-x-3">
                                        <CheckCircle className="text-primary" size={20} />
                                        <span className="text-gray-700 font-medium">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
