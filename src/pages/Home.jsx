import { useState, useRef, useEffect } from 'react';
import { motion, useAnimationControls } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { Github, FileText, Mail, ArrowRight, ExternalLink } from 'lucide-react';
import { projects } from '../data/projects';

const ProjectCard = ({ project }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.05, y: -10 }}
            className="w-[350px] h-[450px] flex-shrink-0 relative rounded-[2rem] overflow-hidden cursor-pointer group"
            style={{
                background: 'rgba(255, 255, 255, 0.03)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
            }}
        >
            {/* Animated Gradient Background */}
            <div className={`absolute inset-0 bg-gradient-to-br ${project.imageColor} opacity-20 group-hover:opacity-30 transition-opacity duration-500`} />

            {/* Shine Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-gradient-to-tr from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transform transition-transform" />

            {/* Content */}
            <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.imageColor} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <project.icon size={32} className="text-white" />
                </div>

                <div>
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:translate-x-1 transition-transform">{project.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
                        {project.shortDescription}
                    </p>

                    <div className="flex items-center gap-2 text-blue-400 font-semibold text-sm group-hover:gap-3 transition-all">
                        Explore Project <ArrowRight size={16} />
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const Home = () => {
    // Duplicate projects to create seamless loop
    const carouselItems = [...projects, ...projects, ...projects];
    const controls = useAnimationControls();

    useEffect(() => {
        controls.start({
            x: "-50%",
            transition: {
                duration: 40,
                ease: "linear",
                repeat: Infinity,
            }
        });
    }, [controls]);

    return (
        <div className="min-h-screen bg-[#020617] text-white selection:bg-blue-500/30 overflow-x-hidden">

            {/* Background Texture */}
            <div className="fixed inset-0 z-0">
                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-900/20 blur-[120px]" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-purple-900/10 blur-[120px]" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 flex flex-col min-h-screen">

                {/* Hero Section */}
                <main className="flex-1 flex flex-col justify-center items-center text-center px-4 pt-20 pb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mb-6 inline-block px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium tracking-wide uppercase"
                    >
                        Portfolio 2026
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="font-display text-6xl md:text-8xl font-black mb-6 tracking-tight bg-gradient-to-b from-white via-white to-slate-400 bg-clip-text text-transparent"
                    >
                        Mohammed<br />Roowala
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl md:text-2xl text-slate-400 max-w-2xl mb-12 leading-relaxed"
                    >
                        Building autonomous agents, high-fidelity dashboards, and digital experiences that feel alive.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="flex gap-4 items-center justify-center mb-20"
                    >
                        <a href="https://github.com/momoroowala" target="_blank" className="px-8 py-4 rounded-full bg-white text-black font-bold text-lg hover:bg-slate-200 transition-colors flex items-center gap-2">
                            <Github size={20} /> GitHub
                        </a>
                        <button className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-bold text-lg hover:bg-white/10 transition-colors flex items-center gap-2 backdrop-blur-md">
                            <FileText size={20} /> Resume
                        </button>
                    </motion.div>
                </main>

                {/* Infinite Carousel Section */}
                <div className="pb-32 w-full overflow-hidden">
                    <div className="flex justify-center mb-10">
                        <h2 className="text-2xl font-bold flex items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                            Featured Projects
                        </h2>
                    </div>

                    <motion.div
                        className="flex gap-8 px-8 w-max hover:cursor-grab active:cursor-grabbing"
                        animate={controls}
                        onMouseEnter={() => controls.stop()}
                        onMouseLeave={() => controls.start({ x: "-50%", transition: { duration: 40, ease: "linear", repeat: Infinity } })}
                    >
                        {carouselItems.map((project, index) => (
                            <NavLink to={`/project/${project.id}`} key={`${project.id}-${index}`}>
                                <ProjectCard project={project} />
                            </NavLink>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Home;
