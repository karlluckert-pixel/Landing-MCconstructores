import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Inicio', href: '#inicio' },
        { name: 'Proyectos', href: '#proyectos' },
        { name: 'Servicios', href: '#servicios' },
        { name: 'Nosotros', href: '#nosotros' },
        { name: 'Contáctanos', href: '#contactanos' },
    ];

    return (
        <>
            {/* Top Bar */}
            <div className="bg-primary-dark text-white py-2 text-sm hidden md:block">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <div className="flex space-x-6">
                        <div className="flex items-center space-x-2">
                            <Phone size={16} />
                            <span>+57 323 254 0699</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Mail size={16} />
                            <span>info@mcconstructores.com</span>
                        </div>
                    </div>
                    <div className="flex items-center space-x-2">
                        <MapPin size={16} />
                        <span>Montería, Córdoba, Colombia</span>
                    </div>
                </div>
            </div>

            {/* Main Navbar */}
            <nav
                className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-white py-4'
                    }`}
            >
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center">
                        {/* Logo */}
                        <a href="#" className="flex items-center space-x-2">
                            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl">
                                MC
                            </div>
                            <span className={`text-2xl font-bold transition-colors ${isScrolled ? 'text-primary' : 'text-primary'
                                }`}>
                                MC Constructores
                            </span>
                        </a>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-gray-700 hover:text-primary font-medium transition-colors relative group"
                                >
                                    {link.name}
                                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                                </a>
                            ))}
                            <a
                                href="#contactanos"
                                className="bg-primary hover:bg-primary-light text-white px-6 py-2 rounded-full font-medium transition-colors duration-300"
                            >
                                Cotizar
                            </a>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="text-gray-700 hover:text-primary transition-colors"
                                aria-label="Menu"
                            >
                                {isOpen ? <X size={28} /> : <Menu size={28} />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Navigation Dropdown */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden bg-white border-t mt-2"
                        >
                            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="text-gray-700 hover:text-primary font-medium py-2 border-b border-gray-100"
                                    >
                                        {link.name}
                                    </a>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </>
    );
};

export default Navbar;
