/* eslint-disable react/prop-types */
import { NavLink } from 'react-router-dom';
import './../project/ProjectCard.css';

const ProjectCard = ({ title, img, index }) => {
	return (
		<NavLink to={`/ProjectPages/${index}`}>
			<li className='project'>
				<img src={img} alt={title} className='project__img' />
				<h3 className='project__title'>{title}</h3>
			</li>
		</NavLink>
	);
};

export default ProjectCard;
