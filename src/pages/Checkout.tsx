import { useState } from 'react';
import { Lock, ShieldCheck, ChevronRight } from 'lucide-react';

export default function Checkout() {
  
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-10">
          
          <div className="lg:w-2/3 space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h2 className="text-xl font-bold text-gray-900 mb-4">1. Datos de Contacto</h2>
              <input type="email" placeholder="Correo electrónico" className="w-full border-gray-300 rounded-md py-3 px-4 border" />
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Lock size={20} className="mr-2 text-green-600" /> 2. Método de Pago Seguro
              </h2>
              <div className="space-y-4">
                <label className="flex items-center p-4 border rounded-lg border-black bg-gray-50">
                  <input type="radio" checked readOnly className="h-4 w-4 text-black" />
                  <span className="ml-3 font-medium">Mercado Pago (Tarjetas o Cuotas)</span>
                </label>
              </div>
            </div>

            <button className="w-full bg-brand-black text-white px-8 py-5 rounded-md font-bold text-lg flex justify-center items-center">
              Pagar Pedido <ChevronRight size={20} className="ml-2" />
            </button>
          </div>

          <div className="lg:w-1/3">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 sticky top-24">
              <h2 className="text-lg font-bold text-gray-900 mb-6">Resumen de tu pedido</h2>
              <div className="flex justify-between items-center border-t border-gray-200 pt-4">
                <span className="text-base font-bold text-gray-900">Total a pagar</span>
                <span className="text-xl font-bold text-gray-900">$45.990</span>
              </div>
              <div className="mt-6 flex items-center justify-center text-sm text-gray-500">
                <ShieldCheck size={18} className="mr-2 text-green-600" />
                Compra 100% segura
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}