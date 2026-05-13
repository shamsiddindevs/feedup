export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-2xl p-4 flex flex-col justify-between hover:shadow-xl transition-shadow duration-300 border border-gray-100 group cursor-pointer">
      <div className="relative h-40 w-full mb-4 overflow-hidden rounded-xl bg-gray-50 flex items-center justify-center">
        {/* Rasm */}
        <img 
          src={product.image} 
          alt={product.name} 
          className="object-contain h-32 w-32 group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      
      <div>
        <h3 className="font-bold text-gray-900 leading-tight mb-1">{product.name}</h3>
      </div>
      
      <div className="mt-4 flex items-center justify-between">
        <span className="font-bold text-lg text-gray-900">{product.price}</span>
        <button className="bg-gray-100 hover:bg-red-600 hover:text-white text-gray-800 px-4 py-2 rounded-full text-sm font-semibold transition-colors">
          Qo'shish
        </button>
      </div>
    </div>
  );
}