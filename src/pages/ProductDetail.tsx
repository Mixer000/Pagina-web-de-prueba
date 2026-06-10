import { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const MOCK_PRODUCT = {
  name: 'Chaqueta de Mezclilla Oversize',
  price: 45990,
  description: 'Chaqueta de mezclilla 100% algodón con un corte oversize moderno. Perfecta para el día a día. Costuras reforzadas y botones metálicos.',
  images: [
    'https://images.unsplash.com/photo-1576871337622-98d48d1cf531?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  ],
  sizes: [
    { name: 'S', inStock: true },
    { name: 'M', inStock: true },
    { name: 'L', inStock: false },
    { name: 'XL', inStock: true },
  ]
};

const ProductDetail = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <nav className="flex text-sm text-gray-500 mb-6">
        <span>Inicio</span> <ChevronRight size={16} className="mx-1 mt-0.5" />
        <span className="text-black font-medium">{MOCK_PRODUCT.name}</span>
      </nav>

      <div className="lg:grid lg:grid-cols-2 lg:gap-x-10">
        <div className="flex flex-col-reverse lg:flex-row gap-4">
          <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible py-2 lg:py-0 w-full lg:w-20 shrink-0">
            {MOCK_PRODUCT.images.map((img, idx) => (
              <button key={idx} onClick={() => setSelectedImage(idx)} className={`w-20 h-24 rounded-md overflow-hidden border-2 ${selectedImage === idx ? 'border-black' : 'border-transparent'}`}>
                <img src={img} alt="Vista" className="object-cover w-full h-full" />
              </button>
            ))}
          </div>
          <div className="w-full aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden">
            <img src={MOCK_PRODUCT.images[selectedImage]} alt="Principal" className="object-cover w-full h-full" />
          </div>
        </div>

        <div className="mt-10 px-2 lg:mt-0">
          <h1 className="text-3xl font-bold text-gray-900">{MOCK_PRODUCT.name}</h1>
          <p className="mt-3 text-2xl font-semibold text-gray-900">$45.990</p>
          <p className="mt-6 text-base text-gray-700">{MOCK_PRODUCT.description}</p>

          <div className="mt-8">
            <h3 className="text-sm font-medium text-gray-900 mb-4">Selecciona tu Talla</h3>
            <div className="grid grid-cols-4 gap-3">
              {MOCK_PRODUCT.sizes.map((size) => (
                <button
                  key={size.name} disabled={!size.inStock} onClick={() => setSelectedSize(size.name)}
                  className={`border rounded-md py-3 text-sm font-medium transition-all ${!size.inStock ? 'bg-gray-50 text-gray-300 line-through' : selectedSize === size.name ? 'border-black bg-black text-white' : 'border-gray-300 text-gray-900'}`}
                >
                  {size.name}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <Link to="/checkout" className="w-full block text-center bg-brand-black text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-gray-800 transition">
              Comprar Ahora
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;