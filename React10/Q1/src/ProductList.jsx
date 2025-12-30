function ProductList({ products, onSelect }){
    console.log("ProductList Rendered");

    return(
        <ul>
            {products.slice(0,10).map((product) => (
                <li key={product.id}>
                    {product.name} - ${product.price}
                    <button onClick={() => onSelect(product.id)}>
                        Select
                    </button>
                </li>
            ))}
        </ul>
    );

}
export default ProductList;