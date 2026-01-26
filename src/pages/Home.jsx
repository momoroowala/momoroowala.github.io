import { useState, useRef, useEffect } from 'react';
import { motion, useAnimationControls } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { Github, FileText, ExternalLink, Folder } from 'lucide-react';
import { projects } from '../data/projects';

const ProjectCard = ({ project }) => {
    return (
        <motion.div
            whileHover={{ y: -7 }}
            className="w-[325px] h-[350px] flex-shrink-0 relative rounded bg-light-navy hover:-translate-y-2 transition-all duration-300 shadow-xl cursor-pointer group px-7 py-8 flex flex-col justify-between"
        >
            <div className="flex justify-between items-center mb-8">
                <div className="text-green">
                    <Folder size={40} strokeWidth={1} />
                </div>
                <div className="flex gap-4 text-light-slate">
                    <ExternalLink size={22} className="hover:text-green transition-colors" />
                </div>
            </div>

            <div>
                <h3 className="text-xl font-bold text-lightest-slate mb-3 group-hover:text-green transition-colors">{project.title}</h3>
                <div className="text-light-slate text-[17px] leading-relaxed mb-6 line-clamp-4">
                    {project.shortDescription}
                </div>
            </div>

            <ul className="flex flex-wrap gap-3 mt-auto list-none p-0">
                {project.stats.map((stat, i) => (
                    <li key={i} className="text-xs font-mono text-slate">
                        {stat.value}
                    </li>
                ))}
            </ul>
        </motion.div>
    );
};

const Home = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const carouselItems = [...projects, ...projects, ...projects, ...projects];
    const controls = useAnimationControls();

    // Spotlight Effect
    useEffect(() => {
        const updateMousePosition = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', updateMousePosition);
        return () => window.removeEventListener('mousemove', updateMousePosition);
    }, []);

    // Infinite Scroll
    useEffect(() => {
        controls.start({
            x: "-50%",
            transition: {
                duration: 80,
                ease: "linear",
                repeat: Infinity,
            }
        });
    }, [controls]);

    // Stagger Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    return (
        <div className="min-h-screen bg-navy text-slate font-sans relative overflow-x-hidden">

            {/* Spotlight Overlay */}
            <div
                className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
                style={{
                    background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.07), transparent 80%)`
                }}
            />

            <div className="relative z-40 flex flex-col min-h-screen max-w-[1600px] mx-auto px-6 md:px-12 lg:px-36">

                {/* Hero Section */}
                <main className="flex-1 flex flex-col justify-center items-start text-left min-h-screen pb-32">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="max-w-[1000px]"
                    >
                        <motion.div variants={itemVariants} className="font-mono text-green text-base mb-5 ml-1">
                            Hi, my name is
                        </motion.div>

                        <motion.h1 variants={itemVariants} className="text-[clamp(40px,8vw,80px)] font-bold text-lightest-slate leading-[1.1] mb-2 tracking-tight">
                            Mohammed Roowala.
                        </motion.h1>

                        <motion.h2 variants={itemVariants} className="text-[clamp(40px,8vw,80px)] font-bold text-slate leading-[0.9] mb-8">
                            I build things for the web.
                        </motion.h2>

                        <motion.p variants={itemVariants} className="text-lg md:text-xl text-slate max-w-[540px] mb-12 leading-relaxed">
                            I'm a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products at <span className="text-green">Anti-Automatons</span>.
                        </motion.p>

                        <motion.div variants={itemVariants} className="flex gap-5">
                            <a href="https://github.com/momoroowala" target="_blank" className="px-7 py-4 border border-green text-green font-mono text-[14px] rounded bg-transparent hover:bg-green-tint transition-all duration-300">
                                Check out my GitHub!
                            </a>
                        </motion.div>
                    </motion.div>
                </main>

                {/* Projects Section */}
                <section className="pb-40 w-full overflow-hidden">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-4 mb-10 w-full max-w-[1000px] mx-auto md:mx-0"
                    >
                        <span className="text-green font-mono text-xl md:text-2xl">01.</span>
                        <h2 className="text-[26px] md:text-[32px] font-bold text-lightest-slate whitespace-nowrap">Some Things I've Built</h2>
                        <div className="h-[1px] bg-lightest-navy w-[200px] md:w-[300px] ml-4"></div>
                    </motion.div>

                    <motion.div
                        className="flex gap-6 w-max hover:cursor-grab active:cursor-grabbing py-10"
                        animate={controls}
                        onMouseEnter={() => controls.stop()}
                        onMouseLeave={() => controls.start({ x: "-50%", transition: { duration: 80, ease: "linear", repeat: Infinity } })}
                    >
                        {carouselItems.map((project, index) => (
                            <NavLink to={`/project/${project.id}`} key={`${project.id}-${index}`}>
                                <ProjectCard project={project} />
                            </NavLink>
                        ))}
                    </motion.div>
                </section>
            </div>
        </div>
    );
};

export default Home;
