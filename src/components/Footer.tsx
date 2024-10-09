import "../styles/Footer.css"

const Footer = () => {

    return (
        <>
            <footer className="bg-dark-gradient footer">
                <div className="footer-top">
                    <div className="container">
                        <div className="footer-border-bottom pb-6 mb-5">
                            <div className="row">
                                <div className="col-lg-4 col-xl-3">
                                    <h4 className="text-white">Sign up to Get Latest Updates</h4>
                                </div>
                                <div className="col-lg-4 col-xl-6">
                                    <form className="d-flex flex-row mb-2 p-1 bg-white input-group">
                                        <input
                                            type="email"
                                            className="form-control rounded-0 border-0"
                                            placeholder="you@yoursite.com"
                                        />
                                        <button
                                            className="btn btn-secondary rounded-0 flex-shrink-0"
                                            type="submit"
                                        >
                                            Subscribe
                                        </button>
                                    </form>
                                </div>
                                <div className="col-lg-4 col-xl-3">
                                    <div className="text-lg-end text-white">
                                        <span className="h6">Call Us On</span>
                                        <br />
                                        <span className="h3">1-800-222-000</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6 col-lg-3 my-4">
                                <div className="mb-4">
                                    <img src="static/img/logo-light.svg" title="" alt="" />
                                </div>
                                <div className="text-white-65 mb-4 text-white">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                    eiusmod.
                                </div>
                                <div className="nav footer-socila-icon">
                                    <a href="#">
                                        <i className="fab fa-facebook-f" />
                                    </a>
                                    <a href="#">
                                        <i className="fab fa-twitter" />
                                    </a>
                                    <a href="#">
                                        <i className="fab fa-instagram" />
                                    </a>
                                    <a href="#">
                                        <i className="fab fa-linkedin-in" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-2 my-4">
                                <h5 className="text-white h6 mb-4">Customer</h5>
                                <ul className="list-unstyled white-link footer-links">
                                    <li>
                                        <a href="#">Get Corpo</a>
                                    </li>
                                    <li>
                                        <a href="#">Documentation</a>
                                    </li>
                                    <li>
                                        <a href="#">Help center</a>
                                    </li>
                                    <li>
                                        <a href="#">Pricing</a>
                                    </li>
                                    <li>
                                        <a href="#">Contact us</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-sm-6 col-lg-2 my-4">
                                <h5 className="text-white h6 mb-4">Product</h5>
                                <ul className="list-unstyled white-link footer-links">
                                    <li>
                                        <a href="#">Portfolio</a>
                                    </li>
                                    <li>
                                        <a href="#">Blog</a>
                                    </li>
                                    <li>
                                        <a href="#">Join our team</a>
                                    </li>
                                    <li>
                                        <a href="#">Elements</a>
                                    </li>
                                    <li>
                                        <a href="#">Products</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-sm-6 col-lg-2 my-4">
                                <h5 className="text-white h6 mb-4">Company</h5>
                                <ul className="list-unstyled white-link footer-links">
                                    <li>
                                        <a href="#">About</a>
                                    </li>
                                    <li>
                                        <a href="#">Careers</a>
                                    </li>
                                    <li>
                                        <a href="#">Legal &amp; Security</a>
                                    </li>
                                    <li>
                                        <a href="#">Terms of use</a>
                                    </li>
                                    <li>
                                        <a href="#">We're hiring!</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-sm-6 col-lg-3 my-4">
                                <h5 className="text-white h6 mb-4">Company</h5>
                                <div className="white-link">
                                    <div className="d-flex pb-3">
                                        <div className="avatar avatar-lg rounded">
                                            <img
                                                src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                                title=""
                                                alt=""
                                            />
                                        </div>
                                        <div className="col ps-3">
                                            <small className="text-white-65">29 March 2021</small>
                                            <h6 className="font-w-500 h6 m-0">
                                                <a className="text-white" href="#">
                                                    Markdown Language Sample Blog Post Styling
                                                </a>
                                            </h6>
                                        </div>
                                    </div>
                                    <div className="d-flex">
                                        <div className="avatar avatar-lg rounded">
                                            <img
                                                src="https://bootdey.com/img/Content/avatar/avatar2.png"
                                                title=""
                                                alt=""
                                            />
                                        </div>
                                        <div className="col ps-3">
                                            <small className="text-white-65">29 March 2021</small>
                                            <h6 className="font-w-500 h6 m-0">
                                                <a className="text-white" href="#">
                                                    Markdown Language Sample Blog Post Styling
                                                </a>
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom footer-border-top light py-3">
                    <div className="container text-center">
                        <p className="m-0">
                            © 2021 copyright{" "}
                            <a href="#" className="text-reset text-white">
                                Bootdey.com
                            </a>
                        </p>
                    </div>
                </div>
            </footer>

        </>
    )
}


export default Footer;