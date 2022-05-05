import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteProduct } from '../../redux/actions';
import { Link } from 'react-router-dom';

// FIJENSE DE HACERLO SI O SI CON FUNCTIONAL COMPONENT! SI NO LOS TEST NO PASAN.     


const ProductCard = (props) => {
  // esta constante es la qeu nos posibilita combinar react con redux ; ``
  const dispatch = useDispatch();
  function handleClick() {
    dispatch(deleteProduct(props.id));
  }

  return (
    <div>
      <button onClick={handleClick}>x</button>
      <Link to={`/product/${props.id}`}>
        <h3>{props.name}</h3>
      </Link>
      <img src={props.image} alt={props.name} />
      <p>Stock: {props.stock}</p>
      <p>Precio: ${props.price}</p>
    </div>
  );
};

export default ProductCard;