import React from "react";
import { Link } from "react-router-dom";

function Blog() {
    return (
        <>
            <div className="hero">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-5">
                            <div className="intro-excerpt">
                                <h1>Blog</h1>
                                <p className="mb-4">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
                                <p><Link to="/" className="btn btn-secondary me-2">Shop Now</Link><Link to="/" className="btn btn-white-outline">Explore</Link></p>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="hero-img-wrap">
                                <img src="Images/couch.png" alt="Images" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="blog-section">
                <div className="container">

                    <div className="row">

                        <div className="col-12 col-sm-6 col-md-4 mb-5">
                            <div className="post-entry">
                                <Link to="/" className="post-thumbnail"><img src="Images/post-1.jpg" alt="Images" className="img-fluid" /></Link>
                                <div className="post-content-entry">
                                    <h3><Link to="/">First Time Home Owner Ideas</Link></h3>
                                    <div className="meta">
                                        <span>by <Link to="/">Kristin Watson</Link></span> <span>on <Link to="/">Dec 19, 2021</Link></span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-sm-6 col-md-4 mb-5">
                            <div className="post-entry">
                                <Link to="/" className="post-thumbnail"><img src="Images/post-2.jpg" alt="Images" className="img-fluid" /></Link>
                                <div className="post-content-entry">
                                    <h3><Link to="/">How To Keep Your Furniture Clean</Link></h3>
                                    <div className="meta">
                                        <span>by <Link to="/">Robert Fox</Link></span> <span>on <Link to="/">Dec 15, 2021</Link></span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-sm-6 col-md-4 mb-5">
                            <div className="post-entry">
                                <Link to="/" className="post-thumbnail"><img src="Images/post-3.jpg" alt="Images" className="img-fluid" /></Link>
                                <div className="post-content-entry">
                                    <h3><Link to="/">Small Space Furniture Apartment Ideas</Link></h3>
                                    <div className="meta">
                                        <span>by <Link to="/">Kristin Watson</Link></span> <span>on <Link to="/">Dec 12, 2021</Link></span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-sm-6 col-md-4 mb-5">
                            <div className="post-entry">
                                <Link to="/" className="post-thumbnail"><img src="Images/post-1.jpg" alt="Images" className="img-fluid" /></Link>
                                <div className="post-content-entry">
                                    <h3><Link to="/">First Time Home Owner Ideas</Link></h3>
                                    <div className="meta">
                                        <span>by <Link to="/">Kristin Watson</Link></span> <span>on <Link to="/">Dec 19, 2021</Link></span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-sm-6 col-md-4 mb-5">
                            <div className="post-entry">
                                <Link to="/" className="post-thumbnail"><img src="Images/post-2.jpg" alt="Images" className="img-fluid" /></Link>
                                <div className="post-content-entry">
                                    <h3><Link to="/">How To Keep Your Furniture Clean</Link></h3>
                                    <div className="meta">
                                        <span>by <Link to="/">Robert Fox</Link></span> <span>on <Link to="/">Dec 15, 2021</Link></span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-sm-6 col-md-4 mb-5">
                            <div className="post-entry">
                                <Link to="/" className="post-thumbnail"><img src="Images/post-3.jpg" alt="Images" className="img-fluid" /></Link>
                                <div className="post-content-entry">
                                    <h3><Link to="/">Small Space Furniture Apartment Ideas</Link></h3>
                                    <div className="meta">
                                        <span>by <Link to="/">Kristin Watson</Link></span> <span>on <Link to="/">Dec 12, 2021</Link></span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-sm-6 col-md-4 mb-5">
                            <div className="post-entry">
                                <Link to="/" className="post-thumbnail"><img src="Images/post-1.jpg" alt="Images" className="img-fluid" /></Link>
                                <div className="post-content-entry">
                                    <h3><Link to="/">First Time Home Owner Ideas</Link></h3>
                                    <div className="meta">
                                        <span>by <Link to="/">Kristin Watson</Link></span> <span>on <Link to="/">Dec 19, 2021</Link></span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-sm-6 col-md-4 mb-5">
                            <div className="post-entry">
                                <Link to="/" className="post-thumbnail"><img src="Images/post-2.jpg" alt="Images" className="img-fluid" /></Link>
                                <div className="post-content-entry">
                                    <h3><Link to="/">How To Keep Your Furniture Clean</Link></h3>
                                    <div className="meta">
                                        <span>by <Link to="/">Robert Fox</Link></span> <span>on <Link to="/">Dec 15, 2021</Link></span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-sm-6 col-md-4 mb-5">
                            <div className="post-entry">
                                <Link to="/" className="post-thumbnail">
                                <img src="Images/post-3.jpg" alt="Images" className="img-fluid" /></Link>
                                <div className="post-content-entry">
                                    <h3><Link to="/">Small Space Furniture Apartment Ideas</Link></h3>
                                    <div className="meta">
                                        <span>by <Link to="/">Kristin Watson</Link></span> <span>on <Link to="/">Dec 12, 2021</Link></span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="testimonial-section before-footer-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 mx-auto text-center">
                            <h2 className="section-title">Testimonials</h2>
                        </div>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-lg-12">
                            <div className="testimonial-slider-wrap text-center">

                                <div id="testimonial-nav">
                                    <span className="prev" data-controls="prev"><span className="fa fa-chevron-left"></span></span>
                                    <span className="next" data-controls="next"><span className="fa fa-chevron-right"></span></span>
                                </div>

                                <div className="testimonial-slider">

                                    <div className="item">
                                        <div className="row justify-content-center">
                                            <div className="col-lg-8 mx-auto">

                                                <div className="testimonial-block text-center">
                                                    <blockquote className="mb-5">
                                                        <p>&ldquo;Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.&rdquo;</p>
                                                    </blockquote>

                                                    <div className="author-info">
                                                        <div className="author-pic">
                                                            <img src="Images/person-1.png" alt="Maria Jones" className="img-fluid" />
                                                        </div>
                                                        <h3 className="font-weight-bold">Maria Jones</h3>
                                                        <span className="position d-block mb-3">CEO, Co-Founder, XYZ Inc.</span>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="row justify-content-center">
                                            <div className="col-lg-8 mx-auto">

                                                <div className="testimonial-block text-center">
                                                    <blockquote className="mb-5">
                                                        <p>&ldquo;Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.&rdquo;</p>
                                                    </blockquote>

                                                    <div className="author-info">
                                                        <div className="author-pic">
                                                            <img src="Images/person-1.png" alt="Maria Jones" className="img-fluid" />
                                                        </div>
                                                        <h3 className="font-weight-bold">Maria Jones</h3>
                                                        <span className="position d-block mb-3">CEO, Co-Founder, XYZ Inc.</span>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="row justify-content-center">
                                            <div className="col-lg-8 mx-auto">

                                                <div className="testimonial-block text-center">
                                                    <blockquote className="mb-5">
                                                        <p>&ldquo;Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.&rdquo;</p>
                                                    </blockquote>

                                                    <div className="author-info">
                                                        <div className="author-pic">
                                                            <img src="Images/person-1.png" alt="Maria Jones" className="img-fluid" />
                                                        </div>
                                                        <h3 className="font-weight-bold">Maria Jones</h3>
                                                        <span className="position d-block mb-3">CEO, Co-Founder, XYZ Inc.</span>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Blog;