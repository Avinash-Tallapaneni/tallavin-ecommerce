import React from "react";
import { Link } from 'react-router-dom';
import { AiOutlineTwitter, AiFillGithub } from 'react-icons/ai'

import './footer.css'

const Footer = () => {

    return (
        <div className="footer">
            <div className="footer_links">
                Avinash Tallapaneni
                <Link to="https://twitter.com/TallapaneniAvi" target="_blank">
                    <AiOutlineTwitter style={{ color: 'blue' }} size={16} />
                </Link>

                <Link to="https://github.com/Avinash-Tallapaneni" target="_blank">
                    <AiFillGithub style={{ color: 'black' }} size={16} />
                </Link>
            </div>
        </div>

    )
}

export default Footer;