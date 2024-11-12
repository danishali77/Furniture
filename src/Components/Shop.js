import React from "react";
import { Link } from "react-router-dom";

function Shop() {
    return (
        <>
            <div className="hero">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-5">
                            <div className="intro-excerpt">
                                <h1>Shop</h1>
                            </div>
                        </div>
                        <div className="col-lg-7">

                        </div>
                    </div>
                </div>
            </div>


            <div className="untree_co-section product-section before-footer-section">
                <div className="container">
                    <div className="row">

                        <div className="col-12 col-md-4 col-lg-3 mb-5">
                            <Link className="product-item" to="/">
                                <img src="images/product-3.png" alt="images" className="img-fluid product-thumbnail" />
                                <h3 className="product-title">Nordic Chair</h3>
                                <strong className="product-price">$50.00</strong>

                                <span className="icon-cross">
                                    <img alt="images" src="images/cross.svg" className="img-fluid" />
                                </span>
                            </Link>
                        </div>

                        <div className="col-12 col-md-4 col-lg-3 mb-5">
                            <Link className="product-item" to="/">
                                <img src="images/product-1.png" alt="images" className="img-fluid product-thumbnail" />
                                <h3 className="product-title">Nordic Chair</h3>
                                <strong className="product-price">$50.00</strong>

                                <span className="icon-cross">
                                    <img alt="images" src="images/cross.svg" className="img-fluid" />
                                </span>
                            </Link>
                        </div>
                        <div className="col-12 col-md-4 col-lg-3 mb-5">
                            <Link className="product-item" to="/">
                                <img src="images/product-2.png" alt="images" className="img-fluid product-thumbnail" />
                                <h3 className="product-title">Kruzo Aero Chair</h3>
                                <strong className="product-price">$78.00</strong>

                                <span className="icon-cross">
                                    <img src="images/cross.svg" alt="images" className="img-fluid" />
                                </span>
                            </Link>
                        </div>
                        <div className="col-12 col-md-4 col-lg-3 mb-5">
                            <Link className="product-item" to="/">
                                <img src="images/product-3.png" alt="images" className="img-fluid product-thumbnail" />
                                <h3 className="product-title">Ergonomic Chair</h3>
                                <strong className="product-price">$43.00</strong>

                                <span className="icon-cross">
                                    <img src="images/cross.svg" alt="images" className="img-fluid" />
                                </span>
                            </Link>
                        </div>
                        <div className="col-12 col-md-4 col-lg-3 mb-5">
                            <Link className="product-item" to="/">
                                <img src="images/product-3.png" alt="images" className="img-fluid product-thumbnail" />
                                <h3 className="product-title">Nordic Chair</h3>
                                <strong className="product-price">$50.00</strong>

                                <span className="icon-cross">
                                    <img src="images/cross.svg" alt="images" className="img-fluid" />
                                </span>
                            </Link>
                        </div>
                        <div className="col-12 col-md-4 col-lg-3 mb-5">
                            <Link className="product-item" to="/">
                                <img src="images/product-1.png" alt="images" className="img-fluid product-thumbnail" />
                                <h3 className="product-title">Nordic Chair</h3>
                                <strong className="product-price">$50.00</strong>

                                <span className="icon-cross">
                                    <img src="images/cross.svg" alt="images" className="img-fluid" />
                                </span>
                            </Link>
                        </div>
                        <div className="col-12 col-md-4 col-lg-3 mb-5">
                            <Link className="product-item" to="/">
                                <img src="images/product-2.png" alt="images" className="img-fluid product-thumbnail" />
                                <h3 className="product-title">Kruzo Aero Chair</h3>
                                <strong className="product-price">$78.00</strong>

                                <span className="icon-cross">
                                    <img src="images/cross.svg" alt="images" className="img-fluid" />
                                </span>
                            </Link>
                        </div>
                        <div className="col-12 col-md-4 col-lg-3 mb-5">
                            <Link className="product-item" to="/">
                                <img src="images/product-3.png" alt="images" className="img-fluid product-thumbnail" />
                                <h3 className="product-title">Ergonomic Chair</h3>
                                <strong className="product-price">$43.00</strong>

                                <span className="icon-cross">
                                    <img src="images/cross.svg" alt="images" className="img-fluid" />
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};
export default Shop;