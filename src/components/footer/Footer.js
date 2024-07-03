import React from 'react'
import "./Footer.css"
import { useTranslation } from 'react-i18next';

function Footer() {
  const [t,i18t] = useTranslation('global');
  return (
    <div id="footer">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffe4c4" fillOpacity="1" d="M0,256L24,245.3C48,235,96,213,144,181.3C192,149,240,107,288,112C336,117,384,171,432,202.7C480,235,528,245,576,250.7C624,256,672,256,720,234.7C768,213,816,171,864,165.3C912,160,960,192,1008,218.7C1056,245,1104,267,1152,256C1200,245,1248,203,1296,176C1344,149,1392,139,1416,133.3L1440,128L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"></path></svg>
      <div className='footer-container'>
        <div>{t("footer.copyright")}</div>
        <div>2024</div>
      </div>
    </div>
  )
}

export default Footer
