import './../component/styles/Contacts.css';

const Contacts = () => {
	return (
		<main className='section__1'>
			<div className='container'>
				<h1 className='title-1'>Contacts</h1>

				<ul className='content-list'>
					<li className='content-list__item'>
						<h2 className='title-2'>Location</h2>
						<p>Moscow, Russia</p>
					</li>
					<li className='content-list__item'>
						<h2 className='title-2'>Telegram / WhatsApp</h2>
						<p>
							<a href='#'></a>
						</p>
					</li>
					<li className='content-list__item'>
						<h2 className='title-2'>Email</h2>
						<p>
							<a href='mailto:webdev@protonmail.com'>Demonito-56@mail.ru</a>
						</p>
					</li>
				</ul>
			</div>
		</main>
	);
};

export default Contacts;
