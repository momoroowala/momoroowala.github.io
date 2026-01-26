import { useParams, NavLink } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';

const ProjectDetail = () => {
    const { id } = useParams();
    const project = projects.find(p => p.id === id);

    if (!project) return <div className="text-white text-center pt-20">Project not found</div>;

    return (
        <div className="min-h-screen bg-slate-950 text-white">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="max-w-4xl mx-auto p-8 pt-20"
            >
                <NavLink to="/" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-8 transition">
                    <ArrowLeft size={20} /> Back to Projects
                </NavLink>

                {/* Header */}
                <motion.div
                    layoutId={`card-${project.id}`}
                    className="relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 p-12 mb-12"
                >
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.imageColor} opacity-10`} />

                    <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
                        <div className="flex items-center gap-6">
                            <div className={`p-6 rounded-2xl bg-gradient-to-br ${project.imageColor} shadow-lg`}>
                                <project.icon size={48} className="text-white" />
                            </div>
                            <div>
                                <h1 className="text-4xl font-bold mb-2">{project.title}</h1>
                                <p className="text-xl text-slate-400">{project.shortDescription}</p>
                            </div>
                        </div>

                        <div className="flex gap-3">
                            {project.links.map((link, i) => (
                                <a
                                    key={i}
                                    href={link.url}
                                    target="_blank"
                                    className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 transition font-medium"
                                >
                                    {link.label.includes('GitHub') ? <Github size={18} /> : <ExternalLink size={18} />}
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Main Description */}
                    <div className="md:col-span-2 space-y-8">
                        <div>
                            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                <span className="w-8 h-1 bg-blue-500 rounded-full" />
                                About the Project
                            </h2>
                            <div className="prose prose-invert prose-lg text-slate-300 whitespace-pre-line">
                                {project.fullDescription}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar Stats */}
                    <div className="space-y-6">
                        <div className="bg-slate-900/50 rounded-2xl p-6 border border-slate-800">
                            <h3 className="text-lg font-bold mb-4 text-slate-200">Project Stats</h3>
                            <div className="space-y-4">
                                {project.stats.map((stat, i) => (
                                    <div key={i} className="flex justify-between items-center py-2 border-b border-white/5 last:border-0">
                                        <span className="text-slate-500">{stat.label}</span>
                                        <span className="font-medium text-blue-400">{stat.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

            </motion.div>
        </div>
    );
};

export default ProjectDetail;
