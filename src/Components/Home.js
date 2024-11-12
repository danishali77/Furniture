import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <>
            <div className="hero">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-5">
                            <div className="intro-excerpt">
                                <h1>Modern Interior <span className="d-block">Design Studio</span></h1>
                                <p className="mb-4">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam
                                    vulputate velit imperdiet dolor tempor tristique.</p>
                                <p>
                                    <Link to="/" className="btn btn-secondary me-2">Shop Now</Link>
                                    <Link to="/" className="btn btn-white-outline">Explore</Link>
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="hero-img-wrap">
                                <img src="images/couch.png" alt="Couch" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="product-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-3 mb-5 mb-lg-0">
                            <h2 className="mb-4 section-title">Crafted with excellent material.</h2>
                            <p className="mb-4">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam
                                vulputate velit imperdiet dolor tempor tristique.</p>
                            <p><Link to="/shop" className="btn">Explore</Link></p>
                        </div>

                        {['product-1.png', 'product-2.png', 'product-3.png'].map((image, index) => (
                            <div key={index} className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
                                <Link className="product-item" to="/cart">
                                    <img src={`images/${image}`} alt="Product" className="img-fluid product-thumbnail" />
                                    <h3 className="product-title">{image === 'product-1.png' ? 'Nordic Chair' : image === 'product-2.png' ? 'Kruzo Aero Chair' : 'Ergonomic Chair'}</h3>
                                    <strong className="product-price">${index * 20 + 50}.00</strong>
                                    <span className="icon-cross">
                                        <img src="images/cross.svg" alt="cross icon" className="img-fluid" />
                                    </span>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="why-choose-section">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-6">
                            <h2 className="section-title">Why Choose Us</h2>
                            <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit.</p>
                            <div className="row my-5">
                                {[
                                    { src: 'truck.svg', title: 'Fast & Free Shipping' },
                                    { src: 'bag.svg', title: 'Easy to Shop' },
                                    { src: 'support.svg', title: '24/7 Support' },
                                    { src: 'return.svg', title: 'Hassle Free Returns' }
                                ].map((feature, index) => (
                                    <div key={index} className="col-6 col-md-6">
                                        <div className="feature">
                                            <div className="icon">
                                                <img src={`images/${feature.src}`} alt={feature.title} className="img-fluid" />
                                            </div>
                                            <h3>{feature.title}</h3>
                                            <p>Donec vitae odio quis nisl dapibus malesuada.</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="col-lg-5">
                            <div className="img-wrap">
                                <img src="images/why-choose-us-img.jpg" alt="Why Choose Us" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
