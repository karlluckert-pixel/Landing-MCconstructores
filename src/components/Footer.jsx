import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-primary-dark text-white pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center space-x-2 mb-6">
                            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-primary font-bold text-xl">
                                MC
                            </div>
                            <span className="text-2xl font-bold text-white">
                                MC Constructores
                            </span>
                        </div>
                        <p className="text-gray-400 leading-relaxed mb-6">
                            Construyendo calidad de vida y futuro en Montería y la región.
                            Compromiso, innovación y excelencia en cada proyecto.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 border-b border-primary-light pb-2 inline-block">Enlaces Rápidos</h3>
                        <ul className="space-y-4">
                            <li><a href="#inicio" className="text-gray-400 hover:text-white transition-colors">Inicio</a></li>
                            <li><a href="#proyectos" className="text-gray-400 hover:text-white transition-colors">Proyectos</a></li>
                            <li><a href="#servicios" className="text-gray-400 hover:text-white transition-colors">Servicios</a></li>
                            <li><a href="#nosotros" className="text-gray-400 hover:text-white transition-colors">Nosotros</a></li>
                            <li><a href="#contactanos" className="text-gray-400 hover:text-white transition-colors">Contáctanos</a></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 border-b border-primary-light pb-2 inline-block">Legal</h3>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Política de Privacidad</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Términos y Condiciones</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Tratamiento de Datos</a></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 border-b border-primary-light pb-2 inline-block">Boletín</h3>
                        <p className="text-gray-400 mb-4">Suscríbete para recibir noticias de nuestros nuevos lanzamientos.</p>
                        <form className="flex flex-col space-y-2">
                            <input
                                type="email"
                                placeholder="Tu correo electrónico"
                                className="bg-white/10 border border-white/20 rounded px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                            />
                            <button className="bg-primary hover:bg-primary-light text-white font-bold py-3 rounded transition-colors">
                                Suscribirse
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-sm">
                    <p>&copy; {currentYear} MC Constructores. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
