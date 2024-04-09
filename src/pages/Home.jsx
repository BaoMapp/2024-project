import React, {useState, useEffect} from 'react'

import '../styles/home.css'
import Helmet from '../components/Helmet/Helmet';

import { Container, Row, Col } from 'reactstrap';
import heroImg from '../assets/images/hero-img.png'

import { Link } from 'react-router-dom';
import {motion} from 'framer-motion'

import ProductsList from '../components/UI/ProductsList';
import counterImg from '../assets/images/counter-timer-img.png'

// import useGetData from '../custom-hooks/useGetData';
import products from '../assets/data/products';


const Home = () => {

  const [trendingProducts, setTrendingProducts] = useState([])
  const [bestSaleProducts, setBestSaleProducts] = useState([])
  const [mobileProducts, setMobileProducts] = useState([])
  const [watchProducts, setWatchProducts] = useState([])
  const year = new Date().getFullYear()

  useEffect(()=>{
    const filteredTrendingProducts = products.filter((item) =>item.category === "andr");
    const filteredBestSaleProducts = products.filter((item) =>item.category === "iphone");
    const filteredMobileProducts = products.filter((item) =>item.category === "laptop");
    const filteredWatchProducts = products.filter((item) =>item.category === "mac");
    
    setTrendingProducts(filteredTrendingProducts);
    setBestSaleProducts(filteredBestSaleProducts);
    setMobileProducts(filteredMobileProducts);
    setWatchProducts(filteredWatchProducts);
  },[]);


  return <Helmet title= {"Home"}>
    <section className='hero__section'>
      <Container>
        <Row>
          <Col>
          <div className="hero__content">
            <p className="hero__subtitle">Trending Product in {year}</p>
            <h2>Shop Plus</h2>

            <motion.button whileTap={{scale:1.2}} className='buy__btn'><Link to='/shop'>SHOP NOW</Link></motion.button>
          </div>
          </Col>
          <Col lg='6' md='6'>
            <div className="hero__img">
              <img src={heroImg} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    <section className="trending__products">
      <Container>
        <Row>
          <Col lg= '12' className='text-center'>
            <h2 className='section__title'>Trending Products</h2>
          </Col>
          <ProductsList data={trendingProducts}/>
        </Row>
      </Container>
    </section>

    <section className='best__sales'>
      <Container>
      <Row>
          <Col lg= '12' className='text-center'>
            <h2 className='section__title'>Best sales</h2>
          </Col>
          <ProductsList data={bestSaleProducts}/>
        </Row>
      </Container>
    </section>

    <section className="timer__count">
      <Container>
        <Row>
          <Col lg='6' md='6'>
            <h4 className="text-black fs-10">FEATURED LIST</h4>
            <br/>
            
            <motion.button whileTap={{scale:1.2}} className='buy__btn store__btn'><Link to="/shop">Visit Store</Link></motion.button>
          </Col>

          <Col lg='6' md='6'>
            <img 
            src={counterImg} alt=''/>
          </Col>
        </Row>
      </Container>
    </section>

    <section className='new__arrivals'>
      <Container>
        <Row>
          <Col lg='12' className='text-center mb-5'>
            <h2 className='section__title'>New Arrivals</h2>
          </Col>
          <ProductsList data={mobileProducts}/>
        </Row>
      </Container>
    </section>
    <section className='new__arrivals'>
      <Container>
        <Row>
          <Col lg='12' className='text-center mb-5'>
            <h2 className='section__title'>Apple Watch</h2>
          </Col>
          <ProductsList data={watchProducts}/>
        </Row>
      </Container>
    </section>
  </Helmet>

};

export default Home;