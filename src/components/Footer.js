import '../styles/footer.css'
import React, { Component }  from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faInstagram, faTiktok, faGithub } from '@fortawesome/free-brands-svg-icons';


export default function Footer() {
   
    return(


        <footer className="footer-distributed">

			<div className="footer-left">

		

				<p className="footer-company-name">GmrApps © {new Date().getFullYear()}</p>

				<div class="footer-icons">

					<a href='https://www.instagram.com/gmrapps_dev/'><FontAwesomeIcon icon={faInstagram} /></a>
					<a href='https://www.tiktok.com/@gmrapps'><FontAwesomeIcon icon={faTiktok} /></a>
					<a href="https://github.com/GmrApps"><FontAwesomeIcon icon={faGithub} /></a>
					<a href="https://www.linkedin.com/in/marius-gabriel-141289217/"><FontAwesomeIcon icon={faLinkedinIn} /></a>

				</div>

			</div>

		

		</footer>

          
           
         



    );
}