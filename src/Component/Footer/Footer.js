import React from 'react';
import './Footer.scss';

const footer = () => (
  <div className="footer">
    <div>
      <span className="footer__links">Contact</span>
      <span className="footer__links">Data Privacy</span>
      <span className="footer__links">Imprint</span>
    </div>
    <div>
      <span className="footer__links">Terms of use</span>
      <span className="footer__links">Blog</span>
    </div>
    <div>
      &#169; 2020 Innoloft GmbH
    </div>
  </div>
);

export default footer;
