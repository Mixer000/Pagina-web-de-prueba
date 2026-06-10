import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Search, ShoppingBag, X } from 'lucide-react'; 

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const cartItemCount = 2;

  return (
    <header className="fixed top-0 w-full bg-white z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          <div className="flex-1 flex items-center">
            <button 
              className="lg:hidden p-2 text-gray-600 hover:text-black focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <nav className="hidden lg:flex space-x-8">
              <Link to="/" className="text-sm font-medium hover:text-gray-600 transition">Inicio</Link>
              <Link to="/" className="text-sm font-medium hover:text-gray-600 transition">Hombre</Link>
              <Link to="/" className="text-sm font-medium text-red-600 hover:text-red-700 transition">Ofertas</Link>
            </nav>
          </div>

          <div className="flex-shrink-0 flex items-center justify-center cursor-pointer">
            <Link to="/">
              <span className="text-2xl font-bold tracking-tighter uppercase">StyleStore</span>
            </Link>
          </div>

          <div className="flex-1 flex items-center justify-end space-x-4">
            <button 
              className="p-2 text-gray-600 hover:text-black transition"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <Search size={20} />
            </button>
            <Link to="/checkout" className="relative p-2 text-gray-600 hover:text-black transition">
              <ShoppingBag size={20} />
              {cartItemCount > 0 && (
                <span className="absolute top-1 right-1 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white bg-black rounded-full">
                  {cartItemCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>

      {isSearchOpen && (
        <div className="absolute top-16 left-0 w-full bg-white border-b border-gray-200 p-4 shadow-md animate-slide-down">
          <div className="max-w-3xl mx-auto relative">
            <input 
              type="text" 
              placeholder="Buscar poleras, chaquetas, jeans..." 
              className="w-full bg-brand-gray border-transparent focus:border-black focus:bg-white focus:ring-0 rounded-md py-3 pl-10 pr-4 text-sm transition"
              autoFocus
            />
            <Search className="absolute left-3 top-3.5 text-gray-400" size={18} />
          </div>
        </div>
      )}

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 absolute w-full h-screen overflow-y-auto">
          <nav className="flex flex-col px-4 py-6 space-y-6">
            <Link to="/" className="text-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>Inicio</Link>
            <Link to="/" className="text-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>Hombre</Link>
            <Link to="/checkout" className="text-lg font-medium text-red-600" onClick={() => setIsMobileMenuOpen(false)}>Ir a Pagar</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;