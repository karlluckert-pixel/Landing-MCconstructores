import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Home, Trees, X, ExternalLink } from 'lucide-react';
import { useState } from 'react';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            id: 1,
            name: "Conjunto Residencial Canaria 74",
            location: "Zona Norte, Montería",
            type: "Conjunto Residencial",
            image: "/assets/ImagenesMc/Canaria74.jpeg",
            icon: <Home size={20} />
        },
        {
            id: 2,
            name: "La Castellana",
            location: "Montería",
            type: "Casas",
            image: "/assets/ImagenesMc/CassasLaCastellana.jpeg",
            icon: <Home size={20} />
        },
        {
            id: 3,
            name: "Urbanización Monteverde",
            location: "Montería",
            type: "Casas",
            image: "/assets/ImagenesMc/UrbMonteverde.jpeg",
            icon: <Home size={20} />
        },
        {
            id: 4,
            name: "Urb. Guadalupe",
            location: "Montería",
            type: "Casas",
            image: "/assets/ImagenesMc/UrbGuadalupe.jpeg",
            icon: <Home size={20} />
        },
        {
            id: 5,
            name: "Lotes Campestres",
            location: "Zona Norte, Montería",
            type: "Lotes",
            image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            icon: <Trees size={20} />
        }
    ];

    return (
        <section id="proyectos" className="py-20 bg-white relative">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h3 className="text-primary font-bold text-lg mb-2 uppercase tracking-wider">Nuestro Portafolio</h3>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Proyectos Destacados</h2>
                    <div className="w-24 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer bg-white"
                        >
                            <div className="h-64 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.name}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
                            </div>

                            <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                                {project.type}
                            </div>

                            <div className="p-6 relative">
                                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-primary transition-colors">
                                    {project.name}
                                </h3>
                                <div className="flex items-center text-gray-500 mb-4">
                                    <MapPin size={16} className="mr-1" />
                                    <span className="text-sm">{project.location}</span>
                                </div>

                                <div className="flex justify-between items-center mt-4">
                                    <button className="text-primary font-bold text-sm uppercase tracking-wider group-hover:underline">
                                        Ver Detalles
                                    </button>
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setSelectedProject(project);
                                        }}
                                        className="flex items-center gap-1 bg-gray-100 hover:bg-primary hover:text-white text-gray-700 text-xs font-bold px-3 py-2 rounded-full transition-all duration-300"
                                    >
                                        <MapPin size={14} />
                                        Ver Mapa
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a
                        href="#contactanos"
                        className="inline-block border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-full font-bold transition-all duration-300"
                    >
                        Ver Todos los Proyectos
                    </a>
                </div>
            </div>

            {/* Map Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl overflow-hidden relative"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="flex justify-between items-center p-4 border-b">
                                <div>
                                    <h3 className="text-xl font-bold text-gray-800">{selectedProject.name}</h3>
                                    <p className="text-sm text-gray-500 flex items-center">
                                        <MapPin size={14} className="mr-1" />
                                        {selectedProject.location}
                                    </p>
                                </div>
                                <button
                                    onClick={() => setSelectedProject(null)}
                                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                                >
                                    <X size={24} className="text-gray-500" />
                                </button>
                            </div>

                            <div className="h-[400px] w-full bg-gray-100 relative">
                                <iframe
                                    width="100%"
                                    height="100%"
                                    frameBorder="0"
                                    scrolling="no"
                                    marginHeight="0"
                                    marginWidth="0"
                                    src={`https://maps.google.com/maps?q=${encodeURIComponent(selectedProject.name + " " + selectedProject.location)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                                    className="absolute inset-0"
                                ></iframe>
                                <div className="absolute bottom-4 right-4">
                                    <a
                                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(selectedProject.name + " " + selectedProject.location)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-white text-primary px-4 py-2 rounded-lg shadow-lg text-sm font-bold flex items-center gap-2 hover:bg-gray-50 transition-colors"
                                    >
                                        <ExternalLink size={16} />
                                        Abrir en Google Maps
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Projects;
