import TG from './../../img/icons/telegram.svg';
import Git from './../../img/icons/gitHub.svg';

import './Footer.css';
const Footer = () => {
	return (
		<footer className='footer'>
			<div className='container'>
				<div className='footer__wrapper'>
					<ul className='social'>
						<li className='social__item'>
							<a href='https://t.me/abagofplums'>
								<img src={TG} alt='Link' />
							</a>
						</li>

						<li className='social__item'>
							<a href='https://github.com/demonenog'>
								<img src={Git} alt='Link' />
							</a>
						</li>
					</ul>
					<div className='copyright'>
						<p>© 2024 a Bag of plums 🤣</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
