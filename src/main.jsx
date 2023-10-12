const products = [
  { id: 1, name: 'Product 1', price: 10 },
  { id: 2, name: 'Product 2', price: 20 },
  { id: 3, name: 'Product 3', price: 15 }
];

class ShoppingCart extends React.Component {
  constructor() {
    super();
    this.state = {
      cart: []
    };
  }

  addToCart = (product) => {
    this.setState((prevState) => ({
      cart: [...prevState.cart, product]
    }));
  }

  removeFromCart = (productId) => {
    this.setState((prevState) => ({
      cart: prevState.cart.filter(item => item.id !== productId)
    }));
  }

  calculateTotal = () => {
    return this.state.cart.reduce((total, item) => total + item.price, 0);
  }

  render() {
    return (
      <div className="container">
        <h1 align="center"><u>Shopping Cart</u></h1><br></br>
        <div>
          <h2><u>All  Products</u></h2><br></br>
          <ul>
            {products.map(product => (
              <li key={product.id}>
                {product.name}  - ${product.price}<br></br><br></br>
                <button onClick={() => this.addToCart(product)}>Add to Cart</button>
              </li>
            ))}
          </ul>

        </div>
        <br></br>
        <div>
          <h2><u>Cart</u></h2>
          <ul>
            {this.state.cart.map(item => (
              <li className="cart-item" key={item.id}>
                <span>{item.name} - ${item.price}</span>
                <button onClick={() => this.removeFromCart(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
          <div className="cart-total">Total: ${this.calculateTotal()}</div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(React.createElement(ShoppingCart), document.getElementById('root'));
