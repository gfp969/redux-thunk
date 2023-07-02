const ProductList = ({ products }) => {
    return (
        <div>
            <h2>listado de productos</h2>
            <div className="row">
                {
                    products.map(product => {
                        return (
                            <div key={product.id} className="col-3 mt-3">
                                <h4>{product.value.nombre}</h4>
                                <p><b>presentacion:</b> {product.value.presentacion} </p>
                                <p><b>marca:</b> {product.value.marca} </p>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}


export default ProductList;