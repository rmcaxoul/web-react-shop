import * as React from 'react'

const Cart = (props) => {
    return (
        <div className="card w-50 m-4 pb-4">
            <h1 className="card-header">Shopping Cart</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Item</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                        <th scope="col">Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {props.products.map((product) => (
                        <tr key={product.id}>
                            <td>{product.name}</td>
                            <td>{props.inCartProducts[product.id]}</td>
                            <td>{product.price}$</td>
                            <button
                                onClick={() =>
                                    props.removeFromCart(product.id)
                                }
                                className="btn btn-primary"
                            >
                                Remove
                            </button>

                        </tr>
                    ))}
                </tbody>
            </table>
            <span className="mx-auto">Total: {props.sum}$</span>
        </div>
    )
}

export { Cart }
