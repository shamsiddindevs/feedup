import Header from './components/Header';
import Banner from './components/Banner';
import ProductCard from './components/ProductCard';
import { categories } from './data';
import CategoryNav from './components/CategoryNav';

function App() {
  return (
    <div className="min-h-screen  pb-20">
      <Header />
      <Banner />
      <CategoryNav/>

      <main className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        
        {/* Kategoriyalar bo'yicha iteratsiya qilish */}
        {categories.map((category) => (
          <section key={category.id} className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-red-600 rounded-full inline-block"></span>
              {category.title}
            </h2>





            
            {/* Grid tizimi (Telefonlarda 1, planshetda 2-3, kompyuterda 4 ta ustun) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {category.products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        ))}
        
      </main>
    </div>
  );
}

export default App;