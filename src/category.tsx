import { useSearchParams } from "react-router";
import Head from "./Header.tsx";
import { items } from "./product.tsx";

function Category() {
  // useSearchParams
  const [searchParams] = useSearchParams();
  const name = searchParams.get("name");

  //  items.find
  const matech = items.find(
    (event) => event.name.toLowerCase() === name?.toLowerCase()
  );

  // localStorage
  const AddtoCart = () => {
    localStorage.setItem("Cart", JSON.stringify(matech?.products));
  };

  return (
    <div>
      <Head />
      <div className="max-w-6xl mx-auto p-6 space-y-10 mt-8">
        {(matech?.products?.length &&
          matech.products.map((product, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row gap-8 bg-white shadow-md rounded-md p-6"
            >
              <div className="md:w-1/2 flex justify-center items-center bg-gray-100 rounded-md p-4">
                <img
                  src={product.img}
                  alt={product.name}
                  className="object-contain max-h-96"
                />
              </div>

              <div className="md:w-1/2 flex flex-col justify-between">
                <div>
                  <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="text-yellow-500 font-semibold text-lg">
                      ★ {product.rating}
                    </span>
                    <span className="text-gray-600">
                      ({product.ratingsCount} ratings)
                    </span>
                    <span className="text-gray-400">|</span>
                    <span className="text-gray-600">
                      {product.questionsAnswered}+ answered questions
                    </span>
                  </div>
                  <p className="text-2xl font-bold text-green-700 mb-4">
                    {product.price}
                  </p>
                  <p className="text-gray-700 mb-6">{product.description}</p>

                  <div className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">
                      Specifications:
                    </h2>
                    <ul className="list-disc list-inside text-gray-700">
                      <li>RAM: {product.ram}</li>
                      <li>Storage (ROM): {product.rom}</li>
                      <li>Processor: {product.processor}</li>
                      <li>Camera: {product.camera}</li>
                      <li>Battery: {product.battery}</li>
                    </ul>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <button
                    onClick={() => AddtoCart()}
                    className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 rounded-md transition"
                  >
                    Add to Cart
                  </button>
                  <button className="flex-1 bg-[#fb641b] hover:bg-[#e05300] text-white font-semibold py-3 rounded-md transition">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))) || (
          <div className="text-center text-2xl font-bold text-red-600 mt-10">
            No content available for "{name}"
          </div>
        )}
      </div>
    </div>
  );
}

export default Category;
