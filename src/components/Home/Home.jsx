import React, { Component } from 'react';
import { connect } from 'react-redux'
import imagen from '../../img-cp2/main-image-cp2.jpg';
import { getAllProducts } from '../../redux/actions';
import ProductCard from '../ProductCard/ProductCard';


// Fijense en los test que SI O SI tiene que ser un class component, de otra forma NO VAN A PASAR LOS TEST.

export class Home extends Component {

  componentDidMount() {
    this.props.getAllProducts()
  }

  render() {
    return (
      <div>
        <h1>Henry Commerce</h1>
        <img src={imagen} alt="main-img" />
        <h3>Products</h3>
        {
          this.props.products && this.props.products.map((product) => {
            return (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                stock={product.stock}

              />
            )
          })
        }

      </div>
    )
  }
}

export const mapStateToProps = (state) => {
  return {
    products: state.products
  }
};

export const mapDispatchToProps = (dispatch) => {
  return {
    getAllProducts: () => dispatch(getAllProducts())
  }

};

export default connect(mapStateToProps, mapDispatchToProps)(Home)
