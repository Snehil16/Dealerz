import './Item.css';

const Item = ({product}) =>
// product.image img
  <div className="item" style={{backgroundImage : `url(${product.image})`}}>
    <div className='topOverlay'>
      <h2 className='topTitle'>{product.title}</h2>
      <h3 className='topCategory'>{product.category}</h3>
      <h4 className='topPrice'>${product.price}</h4>
    </div>
  </div>;

export default Item;
