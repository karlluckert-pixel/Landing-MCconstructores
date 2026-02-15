import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contactanos" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h3 className="text-primary font-bold text-lg mb-2 uppercase tracking-wider">Contáctanos</h3>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Empieza Tu Proyecto Hoy</h2>
                    <div className="w-24 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="bg-primary text-white rounded-2xl p-10 shadow-xl overflow-hidden relative"
                    >
                        <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-10 -mt-10 blur-2xl"></div>
                        <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/10 rounded-full -ml-10 -mb-10 blur-2xl"></div>

                        <h3 className="text-2xl font-bold mb-6 relative z-10">Información de Contacto</h3>
                        <p className="text-blue-100 mb-10 relative z-10 leading-relaxed">
                            Estamos listos para escuchar tus ideas y hacerlas realidad.
                            Visítanos, llámanos o escríbenos.
                        </p>

                        <div className="space-y-8 relative z-10">
                            <div className="flex items-start space-x-4">
                                <div className="bg-white/20 p-3 rounded-lg">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg">Teléfono</h4>
                                    <p className="text-blue-100">+57 323 254 0699</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="bg-white/20 p-3 rounded-lg">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg">Email</h4>
                                    <p className="text-blue-100">info@mcconstructores.com</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="bg-white/20 p-3 rounded-lg">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg">Ubicación</h4>
                                    <p className="text-blue-100">Montería, Córdoba, Colombia</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
                    >
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Nombre Completo</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                                        placeholder="Tu nombre"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Teléfono</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                                        placeholder="300 000 0000"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Correo Electrónico</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                                    placeholder="tucorreo@ejemplo.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Mensaje</label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                                    placeholder="¿En qué podemos ayudarte?"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-primary hover:bg-primary-light text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 flex justify-center items-center gap-2"
                            >
                                <span>Enviar Mensaje</span>
                                <Send size={20} />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
