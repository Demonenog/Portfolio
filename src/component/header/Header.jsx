import './Header.css';
import resume from './../../resume/Resume.pdf';

const Header = () => {
	return (
		<header className='header'>
			<div className='header__wrapper'>
				<h1 className='header__title'>
					<strong>
						Hi, my name is <em>Dmitriy Pershin</em>
					</strong>
					<br />I am frontend <b>REACT</b> developer
				</h1>
				<a href={resume} download='resume' className='btn'>
					Download Resume
				</a>
			</div>
		</header>
	);
};

export default Header;
