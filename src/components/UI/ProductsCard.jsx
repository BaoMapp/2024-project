import React from 'react'
import {motion} from 'framer-motion'
import '../../styles/product-card.css'
import { Col } from 'reactstrap'
import {Link} from "react-router-dom"
import { toast } from "react-toastify"

import {useDispatch} from "react-redux"
import { cartActions } from '../../redux/slices/cartSlice'


const ProductsCard = ({item}) => {

const dispatch = useDispatch()

const addToCart =()=>{
  dispatch(
    cartActions.addItem({
      id: item.id,
      productName: item.productName,
      price: item.price,
      imgUrl: item.imgUrl,
    })
  )

  toast.success('product added to the cart')
}
const addToLike =()=>{
  dispatch(
    cartActions.addItem({
      id: item.id,
      productName: item.productName,
      price: item.price,
      imgUrl: item.imgUrl,
    })
  )
  toast.success('product added to the favorite')
  }

  return (
    <Col lg='3' md='4'>
    <div className='product__item'>
        <div className='product__img'>
            <motion.img whileHover={{scale: 0.9}} src={item.imgUrl} alt="" />
        </div>
        <div className='p-2 product__info'>
        <h3 className="product__name"><Link to={`/shop/${item.id}`}>{item.productName}</Link></h3>
        <span>{item.category}</span>
        </div>
        <div className="product__card-bottom d-flex align-items-center justify-content-between p-2">
             <motion.span whileTap={{scale:1.3}} className='price'>${item.price}</motion.span>
        </div>
        <div className="product__card-bottom d-flex align-items-center justify-content-between ">
            <motion.button className='buy__btn' whileTap={{scale: 2.0}} onClick={addToCart}><i class="ri-shopping-cart-2-fill"></i></motion.button><br/>
            <motion.button className='buy__btn' whileTap={{scale: 2.0}} onClick={addToLike}><i class="ri-heart-fill"></i></motion.button>
        </div>
    </div>
    </Col>
  );
};

export default ProductsCard