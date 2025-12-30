import { useCallback, useMemo, useState } from "react";
import ProductList from "./ProductList";

const products = Array.from({ length: 10000}, (_, i) =>({
  id: i,
  name: `Product ${i}`,
  price: Math.floor(Math.random()* 100),
}));

function App(){
  const [count, setCount] = useState(0);
  const [selectedProductId, setSelectedProductId] = useState(null);

  const totalPrice = useMemo(() => {
    console.log("Calculating total price...");
    return products.reduce((sum, product) => sum + product.price, 0);
  }, [products]);

  const handleProductSelect = useCallback((productId) => {
    console.log("Product selected:", productId);
    setSelectedProductId(productId);
  }, []);

  return(
    <div>
      <h2>Total Price: ${totalPrice}</h2>

      <button onClick={() => setCount((c) => c + 1)}>Counter: {count}</button>

      <ProductList products={products} onSelect={handleProductSelect}/>

      {selectedProductId && (
        <p>Selected Product ID: {selectedProductId}</p>
      )}
    </div>
  );

}
export default App;