import React from 'react';

import { AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai';
import './footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <div>
                <Link to="https://github.com/Gustavodoliveira" target="blank">
                    <AiOutlineGithub /> <span>GitHub</span>
                </Link>
                <Link to="/">
                    <AiOutlineLinkedin />
                    <span>Linkedin</span>
                </Link>
            </div>
            <h4>Development by Gustavo</h4>
        </footer>
    );
};

export default Footer;
