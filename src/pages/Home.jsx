import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { ArrowRight, Github, ExternalLink } from 'lucide-react';
import { projects } from '../data/projects';

const ProjectCard = ({ project, isActive, onClick }) => {
    return (
        <motion.div
            onClick={onClick}
            layoutId={`card-${project.id}`}
            className={`
                relative cursor-pointer rounded-2xl overflow-hidden shrink-0 
                transition-all duration-500 ease-out
                ${isActive ? 'w-[600px] h-[400px] shadow-2xl scale-100' : 'w-[300px] h-[300px] shadow-lg scale-90 opacity-60'}
            `}
            style={{
                background: `linear-gradient(135deg, ${isActive ? '#1e293b' : '#0f172a'}, #000000)`
            }}
        >
            {/* Background Gradient Mesh */}
            <div className={`absolute inset-0 bg-gradient-to-br ${project.imageColor} opacity-20`} />

            {/* Content */}
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <motion.div
                    initial={false}
                    animate={{ y: isActive ? 0 : 20, opacity: isActive ? 1 : 0.8 }}
                >
                    <div className="mb-4 text-white/50">
                        <project.icon size={isActive ? 48 : 32} />
                    </div>
                    <h3 className={`font-bold text-white mb-2 ${isActive ? 'text-4xl' : 'text-2xl'}`}>
                        {project.title}
                    </h3>
                    <p className={`text-white/70 line-clamp-2 ${isActive ? 'text-lg' : 'text-sm'}`}>
                        {project.shortDescription}
                    </p>

                    {isActive && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="mt-6 flex items-center gap-2 text-cyan-400 font-semibold"
                        >
                            View Details <ArrowRight size={18} />
                        </motion.div>
                    )}
                </motion.div>
            </div>
        </motion.div>
    );
};

const Home = () => {
    const [activeIndex, setActiveIndex] = useState(1);
    const scrollContainerRef = useRef(null);

    const scrollTo = (index) => {
        setActiveIndex(index);
    };

    return (
        <div className="min-h-screen bg-slate-950 text-white flex flex-col">
            <header className="p-8 flex justify-between items-center z-10">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    Mohammed's Portfolio
                </h1>
                <div className="flex gap-4">
                    <a href="https://github.com/momoroowala" target="_blank" className="p-2 hover:bg-white/10 rounded-full transition">
                        <Github />
                    </a>
                </div>
            </header>

            <main className="flex-1 flex flex-col justify-center overflow-hidden relative">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950 to-slate-950" />

                <div className="absolute top-10 left-0 w-full text-center">
                    <p className="text-blue-400 tracking-widest text-sm font-semibold uppercase mb-2">My Work</p>
                    <h2 className="text-5xl font-bold">Featured Projects</h2>
                </div>

                {/* Carousel */}
                <div
                    className="flex gap-8 items-center px-[50vw] overflow-x-auto no-scrollbar py-20 snap-x snap-mandatory"
                    ref={scrollContainerRef}
                    style={{
                        transform: `translateX(calc(50% - ${activeIndex * 332 + 300}px))`, // Roughly center logic (simplified for prototype)
                        transition: 'transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)'
                    }}
                >
                    <div className="flex gap-8 items-center justify-center w-full transition-transform duration-500"
                        style={{ transform: `translateX(${(1 - activeIndex) * 400}px)` }} // Manual centering calculation hack for React state driven carousel
                    >
                        {/* 
                            Better Logic: Flex container centered in viewport.
                            We translate the container based on Active Index to keep Active Item in center.
                         */}
                    </div>
                </div>

                {/* Re-implementing a simpler Centered Flex layout for robustness */}
                <div className="w-full flex justify-center items-center h-[600px] relative z-10 perspective-1000">
                    <div className="flex gap-8 items-center transform transition-all duration-500 ease-out"
                        style={{ transform: `translateX(${(1 - activeIndex) * 400}px)` }} // 400px shift per item roughly
                    >
                        {projects.map((project, index) => (
                            <NavLink to={`/project/${project.id}`} key={project.id}>
                                <div
                                    className="relative transition-all duration-500"
                                    onMouseEnter={() => setActiveIndex(index)}
                                >
                                    <ProjectCard
                                        project={project}
                                        isActive={index === activeIndex}
                                        onClick={() => setActiveIndex(index)}
                                    />
                                </div>
                            </NavLink>
                        ))}
                    </div>
                </div>

                {/* Navigation Dots */}
                <div className="flex justify-center gap-3 mt-8 z-10">
                    {projects.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => scrollTo(i)}
                            className={`w-3 h-3 rounded-full transition-all ${i === activeIndex ? 'bg-blue-500 w-8' : 'bg-white/20 hover:bg-white/40'}`}
                        />
                    ))}
                </div>
            </main>
        </div>
    );
};

export default Home;
