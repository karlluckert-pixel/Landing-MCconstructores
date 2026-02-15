import { motion } from 'framer-motion';
import { MapPin, Home, Trees } from 'lucide-react';

const Projects = () => {
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
        <section id="proyectos" className="py-20 bg-white">
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
                                <button className="text-primary font-bold text-sm uppercase tracking-wider group-hover:underline">
                                    Ver Detalles
                                </button>
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
        </section>
    );
};

export default Projects;
