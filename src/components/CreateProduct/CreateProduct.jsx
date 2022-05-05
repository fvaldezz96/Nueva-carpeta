import React from 'react';
import { createProduct } from '../../redux/actions';
import { useDispatch } from 'react-redux';

// Fijense en los test que SI O SI tiene que ser un functional component, de otra forma NO VAN A PASAR LOS TEST
// Deben usar Hooks para que los test pasen.
// No realicen un destructuring de ellos, sino que utilicenlos de la siguiente forma 'React.useState' y 'React.useEffect' ,
// Si no lo hacen asi los test no van a correr.

const CreateProduct = () => {

   const [input, setInput] = React.useState({
      name: '',
      price: 0,
      description: '',
      stock: 0,
   })

   let handleChange = (e) => {
      e.preventDefault()
      setInput({
         ...input,
         [e.target.name]:
            e.target.value
      })
   }

   const dispatch = useDispatch()
   let handleSubmit = (e) => {
      e.preventDefault()
      dispatch(createProduct(input))
   }



   return (
      <div>Create Product
         <form onSubmit={(e) => handleSubmit(e)}>
            <label>Name: </label>
            <input type="text" name="name" value={input.name} onChange={(e) => handleChange(e)} />

            <label>Price: </label>
            <input type="number" name="price" value={input.price} onChange={(e) => handleChange(e)} />

            <label>Description: </label>
            <textarea name="description" value={input.description} onChange={(e) => handleChange(e)} />

            <label>Stock: </label>
            <input type="number" name="stock" value={input.stock} onChange={(e) => handleChange(e)} />

            <button type='submit'>Create Product</button>
         </form>
      </div>
   );
};

export default CreateProduct;
