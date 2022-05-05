import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProductDetail } from '../../redux/actions';

// Fijense en los test que SI O SI tiene que ser un functional component, de otra forma NO VAN A PASAR LOS TEST
// Deben usar Hooks para que los test pasen (lease tabien lo de react-redux).
// No realicen un destructuring de ellos, sino que utilicenlos de la siguiente forma 'React.useState' y 'React.useEffect' ,
// Si no lo hacen asi los test no van a correr.

const ProductDetail = (props) => {

    const dispatch = useDispatch();
    const products = useSelector(state => state.product);

    React.useEffect( () =>
        dispatch(getProductDetail(props.match.params.id))
        ,[dispatch, props.match.params.id])

    return (
        <div>
            {products.name}
            {products.price}
            {products.description}
            {products.stock}
        </div>
    )
}

export default ProductDetail;
