import React from 'react';

import './footer.styles.scss';
import koala from '../../assets/koala.png';

const Footer = () => (
    <footer>
        <p>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></p>
        <p>App created by Icy Koala Development</p>
        <img src={koala} className="koala" alt="koala silhouette"/>
    </footer>
)

export default Footer;