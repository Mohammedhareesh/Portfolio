import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo/logo_fav.png'
import { px } from 'framer-motion'


const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <footer className="main-footer">
            <div className="footer-bottom pt-50 pb-40">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="copyright-text">
                                <p>
                                    Copyright @{year}, <Link to="/">Mohammed Hareesh</Link> All
                                    Rights Reserved.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="copyright-text extra-copyright">
                                <p>
                                    Crafted with ❤️ <Link to="/"><img width={30} src={logo} alt="Logo" title="Logo"/></Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer