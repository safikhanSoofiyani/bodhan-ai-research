import React, { useEffect, useState, useMemo } from 'react';
import { HashRouter as Router, Routes, Route, Link, useParams, Navigate, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  ArrowRight, 
  ChevronDown,
  ChevronUp,
  ChevronRight,
  Layers,
  Clock,
  Mic, Volume2, Brain, ScanText, Languages, ShieldCheck, Target
} from 'lucide-react';
import { RESEARCH_VERTICALS, PILLARS, VISION_STATEMENT, PRINCIPLES } from './data';
import { Breadcrumbs } from './components/Breadcrumbs';
import { VerticalTheme, ResearchProblem, Priority } from './types';

// --- Theme Helper ---
const THEME_COLORS: Record<VerticalTheme, string> = {
  orange: 'text-bodhan-orange',
  teal: 'text-bodhan-teal',
  purple: 'text-bodhan-purple',
  yellow: 'text-bodhan-yellow',
  blue: 'text-bodhan-blue',
  red: 'text-bodhan-red',
  indigo: 'text-bodhan-indigo',
  green: 'text-bodhan-green',
};

const THEME_BG_HOVER: Record<VerticalTheme, string> = {
  orange: 'hover:border-bodhan-orange/50',
  teal: 'hover:border-bodhan-teal/50',
  purple: 'hover:border-bodhan-purple/50',
  yellow: 'hover:border-bodhan-yellow/50',
  blue: 'hover:border-bodhan-blue/50',
  red: 'hover:border-bodhan-red/50',
  indigo: 'hover:border-bodhan-indigo/50',
  green: 'hover:border-bodhan-green/50',
};

// --- Components ---

const Button: React.FC<{
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
}> = ({ variant = 'primary', children, onClick, href, className = '' }) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-3 text-sm font-semibold rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-dark-900";
  const variants = {
    primary: "bg-bodhan-orange text-white hover:bg-orange-600 focus:ring-bodhan-orange",
    secondary: "bg-dark-800 text-white hover:bg-dark-700 focus:ring-dark-700 border border-dark-700",
    outline: "bg-transparent text-white border border-gray-600 hover:border-white focus:ring-white"
  };

  if (href) {
    return (
      <a href={href} className={`${baseStyles} ${variants[variant]} ${className}`}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  
  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-dark-900/90 backdrop-blur-lg border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link to="/" className="flex flex-col">
              <span className="text-2xl font-serif text-bodhan-orange font-bold leading-none">बोधन</span>
              <span className="text-[10px] tracking-[0.2em] text-gray-400 uppercase mt-1">Bodhan AI</span>
            </Link>
          </div>
          
          <div className="hidden md:flex md:items-center md:space-x-8">
            <button onClick={() => scrollToSection('vision')} className="text-gray-300 hover:text-white text-sm font-medium transition-colors">Vision</button>
            <button onClick={() => scrollToSection('principles')} className="text-gray-300 hover:text-white text-sm font-medium transition-colors">Principles</button>
            <button onClick={() => scrollToSection('research')} className="text-gray-300 hover:text-white text-sm font-medium transition-colors">Research</button>
            <Button variant="primary" href="mailto:research@bodhan.ai" className="px-6 py-2">
              Join Us
            </Button>
          </div>

          <div className="flex items-center md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-400 hover:text-white p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-dark-900 border-b border-white/10 absolute w-full">
          <div className="px-4 pt-2 pb-6 space-y-4">
             <button onClick={() => scrollToSection('vision')} className="block w-full text-left py-2 text-gray-300 hover:text-white">Vision</button>
             <button onClick={() => scrollToSection('principles')} className="block w-full text-left py-2 text-gray-300 hover:text-white">Principles</button>
             <button onClick={() => scrollToSection('research')} className="block w-full text-left py-2 text-gray-300 hover:text-white">Research</button>
            <a href="mailto:research@bodhan.ai" className="block py-2 text-bodhan-orange font-bold">
              Join Research
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-900 border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="inline-block mb-6">
               <span className="text-2xl font-serif text-bodhan-orange font-bold">बोधन</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              A semi-research organization building the Bharat EduAI Stack. 
              Solving open research problems to transform India's education ecosystem in alignment with NEP 2020.
            </p>
            <div className="mt-8">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-400">
                    IIT Madras AI Centre of Excellence
                </span>
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-6">Connect</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-bodhan-orange transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-bodhan-orange transition-colors">LinkedIn</a></li>
              <li><a href="mailto:contact@bodhan.ai" className="hover:text-bodhan-orange transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
             <h4 className="text-white font-semibold mb-6">Initiatives</h4>
             <ul className="space-y-4 text-gray-400 text-sm">
                <li>EduAI Stack</li>
                <li>Research Grants</li>
                <li>Fellowships</li>
             </ul>
          </div>
        </div>
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Bodhan AI. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
             <span>Privacy Policy</span>
             <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Home Page Components ---

const HeroSection = () => {
    return (
        <div className="relative min-h-[90vh] flex items-center bg-dark-900 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    
                    {/* Content */}
                    <div className="animate-fade-in">
                         <div className="inline-block px-4 py-2 rounded-full border border-white/10 bg-white/5 text-gray-400 text-xs font-medium mb-8">
                            IIT Madras AI Centre of Excellence for Education
                        </div>
                        
                        <h1 className="text-5xl md:text-7xl font-serif text-white leading-[1.1] mb-8">
                            Open Research <br />
                            <span className="text-bodhan-orange italic">Problems in</span> <br />
                            AI for Education
                        </h1>
                        
                        <p className="text-lg text-gray-400 max-w-xl leading-relaxed mb-10 font-light">
                            A comprehensive agenda of 200+ research problems across Speech, Language, Vision, and Learning technologies — designed to transform how Bharat learns, teaches, and thrives.
                        </p>

                        <div className="grid grid-cols-3 gap-8 mb-12 max-w-lg">
                            <div>
                                <div className="text-3xl text-bodhan-orange font-serif font-bold mb-1">200+</div>
                                <div className="text-[10px] text-gray-500 tracking-wider uppercase font-medium">Research Problems</div>
                            </div>
                            <div>
                                <div className="text-3xl text-bodhan-orange font-serif font-bold mb-1">22</div>
                                <div className="text-[10px] text-gray-500 tracking-wider uppercase font-medium">Indian Languages</div>
                            </div>
                            <div>
                                <div className="text-3xl text-bodhan-orange font-serif font-bold mb-1">8</div>
                                <div className="text-[10px] text-gray-500 tracking-wider uppercase font-medium">Research Verticals</div>
                            </div>
                        </div>

                         <Button href="#research" className="group">
                            Explore Problems <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </div>

                    {/* Abstract Graphic */}
                    <div className="hidden lg:block relative h-[500px] w-full">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="grid grid-cols-3 gap-6 transform rotate-[-15deg] scale-110">
                                {/* Row 1 */}
                                <div className="w-32 h-32 rounded-3xl bg-dark-800 opacity-50"></div>
                                <div className="w-32 h-32 rounded-3xl bg-gradient-to-br from-orange-400 to-orange-600 shadow-2xl shadow-orange-500/20"></div>
                                <div className="w-32 h-32 rounded-3xl bg-dark-800 opacity-30"></div>
                                
                                {/* Row 2 */}
                                <div className="w-32 h-32 rounded-3xl bg-gradient-to-br from-teal-400 to-teal-600 shadow-2xl shadow-teal-500/20"></div>
                                <div className="w-32 h-32 rounded-3xl bg-gradient-to-br from-orange-500 to-orange-700 shadow-2xl shadow-orange-500/20"></div>
                                <div className="w-32 h-32 rounded-3xl bg-gradient-to-br from-teal-500 to-teal-700 shadow-2xl shadow-teal-500/20"></div>
                                
                                {/* Row 3 */}
                                <div className="w-32 h-32 rounded-3xl bg-dark-800 opacity-30"></div>
                                <div className="w-32 h-32 rounded-3xl bg-gradient-to-br from-orange-600 to-orange-800 shadow-2xl shadow-orange-500/20"></div>
                                <div className="w-32 h-32 rounded-3xl bg-dark-800 opacity-50"></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

const VisionSection = () => {
    return (
        <div id="vision" className="py-24 bg-dark-900 relative">
             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-bodhan-orange text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Our Vision</span>
                    <h2 className="text-3xl md:text-5xl font-serif text-white max-w-4xl mx-auto leading-tight">
                        An AI Copilot for Every Learner, Teacher, and Policymaker
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    {PILLARS.map((pillar, idx) => (
                        <div key={idx} className="bg-dark-800/50 rounded-3xl p-10 border border-white/5 hover:border-bodhan-orange/30 transition-all duration-300">
                             <div className="w-12 h-12 rounded-xl bg-dark-700 flex items-center justify-center mb-8 border border-white/10">
                                {idx === 0 ? <Layers className="text-bodhan-orange" /> : <Clock className="text-bodhan-orange" />}
                             </div>
                             <h3 className="text-2xl font-serif text-white mb-6">{pillar.title}</h3>
                             <p className="text-gray-400 leading-relaxed mb-6">
                                {pillar.description}
                             </p>
                        </div>
                    ))}
                </div>

                <div className="bg-dark-800 rounded-3xl p-10 md:p-16 border-l-4 border-bodhan-orange relative overflow-hidden">
                    <div className="relative z-10 max-w-4xl mx-auto text-center">
                        <p className="text-xl md:text-2xl font-serif italic text-white leading-relaxed mb-6">
                            "This is not merely a technology initiative. It is a systemic transformation of how Bharat learns, teaches, evaluates, and builds digital capacity."
                        </p>
                        <p className="text-sm text-gray-500 tracking-wider uppercase">
                            — Aligned with NEP 2020 and Viksit Bharat @2047
                        </p>
                    </div>
                </div>
             </div>
        </div>
    )
}

const PrinciplesSection = () => {
    const [openIndex, setOpenIndex] = useState<number>(0);

    return (
        <div id="principles" className="py-24 bg-dark-800">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                     <span className="text-bodhan-orange text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Research Philosophy</span>
                     <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">The Commandments</h2>
                     <p className="text-gray-400">The non-negotiable principles that guide every decision we make.</p>
                </div>

                <div className="space-y-4">
                    {PRINCIPLES.map((principle, idx) => (
                        <div 
                            key={principle.id} 
                            className={`rounded-2xl transition-all duration-300 overflow-hidden ${openIndex === idx ? 'bg-dark-900 border border-white/10' : 'bg-transparent border-b border-white/5'}`}
                        >
                            <button 
                                onClick={() => setOpenIndex(idx === openIndex ? -1 : idx)}
                                className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none"
                            >
                                <div className="flex items-center gap-6">
                                    <span className={`text-xl font-serif ${openIndex === idx ? 'text-bodhan-teal' : 'text-gray-600'}`}>
                                        {principle.id}
                                    </span>
                                    <h3 className={`text-lg md:text-xl font-serif italic ${openIndex === idx ? 'text-white' : 'text-gray-400'}`}>
                                        {principle.title}
                                    </h3>
                                </div>
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${openIndex === idx ? 'bg-bodhan-teal text-dark-900' : 'bg-dark-700 text-gray-500'}`}>
                                    {openIndex === idx ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                                </div>
                            </button>
                            
                            <div className={`transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}>
                                <div className="px-6 pb-8 md:px-8 md:pb-8 pl-16 md:pl-20 border-l-2 border-bodhan-teal/50 ml-8 md:ml-10 mb-6">
                                    <p className="text-gray-400 leading-relaxed">
                                        {principle.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

const HomePage: React.FC = () => {
  return (
    <div className="animate-fade-in pt-20">
      <HeroSection />
      <VisionSection />
      <PrinciplesSection />
      
      {/* Research Agenda Grid */}
      <div id="research" className="py-24 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-medium text-white mb-6">Explore Our Research Agenda</h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              Select a research vertical to explore detailed problem statements and collaboration opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {RESEARCH_VERTICALS.map((vertical) => (
              <Link 
                key={vertical.id} 
                to={`/vertical/${vertical.id}`}
                className={`group bg-dark-800 rounded-2xl p-8 border border-white/5 transition-all duration-300 ${THEME_BG_HOVER[vertical.theme]} hover:-translate-y-1`}
              >
                <div className="flex justify-between items-start mb-6">
                  <span className={`text-2xl font-serif font-bold ${THEME_COLORS[vertical.theme]}`}>
                    {vertical.shortTitle}
                  </span>
                  <div className="text-right">
                    <span className="block text-2xl font-bold text-white">{vertical.problemCount}</span>
                    <span className="text-[10px] text-gray-500 uppercase tracking-wider">Problems</span>
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-white mb-3">
                  {vertical.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 h-14 line-clamp-2">
                  {vertical.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {vertical.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-dark-900 rounded-full text-xs text-gray-500 group-hover:text-gray-300 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Vertical Page Components ---

const AreaAccordion: React.FC<{
    problem: ResearchProblem;
    verticalTheme: VerticalTheme;
    isOpen: boolean;
    onToggle: () => void;
    filteredOutcomes: any[];
}> = ({ problem, verticalTheme, isOpen, onToggle, filteredOutcomes }) => {
    
    // Derived area number from ID (e.g. 4.1.1 -> 01)
    const areaNum = problem.id.split('.').pop()?.padStart(2, '0');

    if (filteredOutcomes.length === 0) return null;

    return (
        <div className="bg-dark-800 rounded-xl border border-white/5 overflow-hidden mb-4">
             <button 
                onClick={onToggle}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
             >
                <div className="flex-1 pr-4">
                    <span className={`text-xs font-bold uppercase tracking-widest ${THEME_COLORS[verticalTheme]} mb-1 block`}>
                        Area {areaNum}
                    </span>
                    <h3 className="text-xl font-serif font-medium text-white">{problem.title}</h3>
                    <p className="text-sm text-gray-500 mt-2 line-clamp-1">{problem.description}</p>
                </div>
                <div className="flex items-center gap-4">
                     <span className="text-sm font-bold text-white bg-white/10 px-3 py-1 rounded-full">
                         {filteredOutcomes.length} <span className="text-[10px] text-gray-400 font-normal ml-1">PROBLEMS</span>
                     </span>
                     <div className={`w-8 h-8 rounded-full bg-dark-900 flex items-center justify-center text-gray-400`}>
                        {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                     </div>
                </div>
             </button>

             {isOpen && (
                 <div className="p-6 pt-0 border-t border-white/5 bg-dark-800/50">
                     <p className="text-gray-400 text-sm leading-relaxed mb-6 mt-4">
                         {problem.description}
                     </p>
                     
                     <div className="space-y-4">
                         {filteredOutcomes.map((outcome) => (
                             <div key={outcome.id} className="bg-dark-900 rounded-lg p-5 border border-white/5 flex flex-col md:flex-row gap-4 relative overflow-hidden group hover:border-white/10 transition-colors">
                                 
                                 {/* ID Badge */}
                                 <div className="flex-shrink-0">
                                     <span className={`flex items-center justify-center w-8 h-8 rounded text-sm font-bold bg-${verticalTheme === 'orange' ? 'orange' : verticalTheme}-500 text-white`}>
                                         {outcome.id}
                                     </span>
                                 </div>

                                 <div className="flex-grow">
                                     <div className="flex justify-between items-start">
                                         <h4 className="text-lg font-bold text-white mb-2">{outcome.title}</h4>
                                          <div className="flex gap-2">
                                            {outcome.priority === 'CRITICAL' && (
                                                <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-red-500/20 text-red-400 border border-red-500/20">Critical</span>
                                            )}
                                            {outcome.priority === 'HIGH' && (
                                                <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-yellow-500/20 text-yellow-400 border border-yellow-500/20">High</span>
                                            )}
                                             {outcome.priority === 'MEDIUM' && (
                                                <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-blue-500/20 text-blue-400 border border-blue-500/20">Medium</span>
                                            )}
                                        </div>
                                     </div>
                                     <p className="text-gray-400 text-sm mb-4 leading-relaxed">{outcome.description}</p>
                                     <div className="flex justify-between items-center">
                                         <div className="flex flex-wrap gap-2">
                                             {outcome.tags.map((tag: string) => (
                                                 <span key={tag} className="px-2 py-1 bg-dark-800 rounded text-[10px] text-gray-500 border border-white/5">
                                                     {tag}
                                                 </span>
                                             ))}
                                         </div>
                                         <Button variant="outline" href={`mailto:research@bodhan.ai?subject=${outcome.id}`} className="!py-1.5 !px-4 !text-xs !rounded-full group-hover:bg-white group-hover:text-dark-900 group-hover:border-white">
                                             Reach Out <ArrowRight size={10} className="ml-1" />
                                         </Button>
                                     </div>
                                 </div>
                             </div>
                         ))}
                     </div>
                 </div>
             )}
        </div>
    )
}

const VerticalPage: React.FC = () => {
  const { verticalId } = useParams();
  const vertical = RESEARCH_VERTICALS.find(v => v.id === verticalId);
  
  // State for Filters
  const [selectedTags, setSelectedTags] = useState<Set<string>>(new Set());
  const [selectedPriority, setSelectedPriority] = useState<Set<Priority>>(new Set());
  const [openAreas, setOpenAreas] = useState<Set<string>>(new Set());

  // Initialize all areas as open
  useEffect(() => {
      if (vertical) {
          setOpenAreas(new Set(vertical.problems.map(p => p.id)));
      }
  }, [vertical]);

  if (!vertical) return <Navigate to="/" replace />;

  // Extract all outcomes to get unique tags for this vertical
  const allOutcomes = vertical.problems.flatMap(p => p.outcomes);
  const availableTags = Array.from(new Set(allOutcomes.flatMap(o => o.tags))).sort();

  const toggleTag = (tag: string) => {
      const next = new Set(selectedTags);
      if (next.has(tag)) next.delete(tag);
      else next.add(tag);
      setSelectedTags(next);
  }

  const togglePriority = (p: Priority) => {
       const next = new Set(selectedPriority);
      if (next.has(p)) next.delete(p);
      else next.add(p);
      setSelectedPriority(next);
  }

  const toggleArea = (id: string) => {
      const next = new Set(openAreas);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      setOpenAreas(next);
  }

  // Filter Logic
  const getFilteredOutcomes = (problem: ResearchProblem) => {
      return problem.outcomes.filter(outcome => {
          const matchesTag = selectedTags.size === 0 || outcome.tags.some(t => selectedTags.has(t));
          const matchesPriority = selectedPriority.size === 0 || selectedPriority.has(outcome.priority);
          return matchesTag && matchesPriority;
      });
  };

  const scrollToArea = (id: string) => {
      const element = document.getElementById(`area-${id}`);
      if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          setOpenAreas(prev => new Set(prev).add(id));
      }
  }

  return (
    <div className="min-h-screen bg-dark-900 pt-28 pb-20 animate-fade-in">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs />
          
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-4">
               <span className={`text-5xl md:text-6xl font-serif font-bold ${THEME_COLORS[vertical.theme]}`}>
                 {vertical.problemCount}
               </span>
               <div className="h-12 w-px bg-white/10"></div>
               <span className="text-xs md:text-sm tracking-widest uppercase text-gray-500">
                 Problems <br/> Found
               </span>
               <div className="h-12 w-px bg-white/10 ml-4"></div>
               <div className="flex gap-2">
                 {vertical.tags.map(t => (
                     <span key={t} className="px-3 py-1 rounded bg-white/5 text-gray-400 text-xs border border-white/5 uppercase tracking-wide">
                         {t}
                     </span>
                 ))}
               </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white">
               {vertical.title}
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              
              {/* Sidebar Filters */}
              <div className="lg:col-span-1 space-y-8">
                  
                  {/* Focus Areas Navigation */}
                  <div>
                      <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Focus Areas</h4>
                      <ul className="space-y-2">
                          {vertical.problems.map(p => (
                              <li key={p.id}>
                                  <button 
                                    onClick={() => scrollToArea(p.id)}
                                    className="text-sm text-gray-400 hover:text-bodhan-orange text-left leading-tight"
                                  >
                                      {p.title} <span className="text-xs text-gray-600 ml-1">({p.outcomes.length})</span>
                                  </button>
                              </li>
                          ))}
                      </ul>
                  </div>

                  {/* Priority Filter */}
                   <div>
                      <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Criticality</h4>
                      <div className="flex flex-wrap gap-2">
                          {['CRITICAL', 'HIGH', 'MEDIUM'].map((p) => (
                              <button
                                key={p}
                                onClick={() => togglePriority(p as Priority)}
                                className={`px-3 py-1.5 rounded text-xs font-medium border transition-all ${selectedPriority.has(p as Priority) 
                                    ? 'bg-bodhan-orange text-white border-bodhan-orange' 
                                    : 'bg-dark-800 text-gray-400 border-white/10 hover:border-white/30'}`}
                              >
                                  {p}
                              </button>
                          ))}
                      </div>
                   </div>

                  {/* Tag Filter */}
                   <div>
                      <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Filter by Tags</h4>
                      <div className="flex flex-wrap gap-2">
                          {availableTags.map(tag => (
                               <button
                               key={tag}
                               onClick={() => toggleTag(tag)}
                               className={`px-3 py-1.5 rounded text-xs font-medium border transition-all ${selectedTags.has(tag) 
                                   ? 'bg-white text-dark-900 border-white' 
                                   : 'bg-dark-800 text-gray-400 border-white/10 hover:border-white/30'}`}
                             >
                                 {tag}
                             </button>
                          ))}
                      </div>
                   </div>

              </div>

              {/* Main Content */}
              <div className="lg:col-span-3">
                  {vertical.problems.map(problem => {
                      const filteredOutcomes = getFilteredOutcomes(problem);
                      return (
                        <div key={problem.id} id={`area-${problem.id}`}>
                             <AreaAccordion 
                                problem={problem}
                                verticalTheme={vertical.theme}
                                isOpen={openAreas.has(problem.id)}
                                onToggle={() => toggleArea(problem.id)}
                                filteredOutcomes={filteredOutcomes}
                             />
                        </div>
                      );
                  })}
              </div>

          </div>
       </div>
    </div>
  );
};

const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen font-sans text-gray-100 bg-dark-900">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/vertical/:verticalId" element={<VerticalPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;