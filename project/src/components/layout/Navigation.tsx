import React from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Logo } from '../ui/Logo';
import { SocialLinks } from './SocialLinks';

const navItems = [
  { name: 'Council', path: '/council', delay: 0.1 },
  { name: 'Cosmic Archive', path: '/archive', delay: 0.2 }
];

export function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false);
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 py-6"
      >
        <div className="flex items-center justify-between">
          <motion.a
            href="/"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex items-center gap-3 group"
            onClick={(e) => {
              e.preventDefault();
              navigate('/');
            }}
          >
            <Logo variant="header" className="w-16 h-16" />
            <div className="flex flex-col -space-y-1">
              <span className="text-xs font-light tracking-[0.2em] opacity-90">MYSTIC</span>
              <span className="text-xs font-light tracking-[0.2em] opacity-90">COUNCIL</span>
            </div>
          </motion.a>

          <div className="hidden md:flex items-center gap-12">
            {navItems.map((item) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: item.delay }}
              >
                <Link
                  to={item.path}
                  className="text-gray-400 hover:text-white transition-colors duration-300 text-sm tracking-wider relative group"
                >
                  <span className="relative">
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-0 group-hover:opacity-100 transform origin-center transition-all duration-300 scale-x-0 group-hover:scale-x-100" />
                  </span>
                </Link>
              </motion.div>
            ))}
            
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <SocialLinks />
            </motion.div>
          </div>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            {isOpen ? <X /> : <Menu />}
          </motion.button>
        </div>
      </motion.div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-black/90 backdrop-blur-lg"
        >
          <div className="container mx-auto px-4 py-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="block py-3 text-gray-400 hover:text-white transition-colors text-sm tracking-wider"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="py-3">
              <SocialLinks />
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
}