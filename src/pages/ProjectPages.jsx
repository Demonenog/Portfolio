import { useParams } from 'react-router-dom';
import BtnGitHub from '../component/btnGitHub/BtnGitHub';
// import img from './../img/projects/02-big.jpg';

// import { projects } from '../component/data/projectList';
import { projects } from '../component/data/projectList';

import './../component/styles/ProjectPages.css';

const ProjectPages = () => {
	const { id } = useParams();
	const project = projects[id];

	console.log(project);

	return (
		<main className='section'>
			<div className='container'>
				<div className='project-details'>
					<h1 className='title-1'>{project.title}</h1>

					<img
						src={project.imgBig}
						alt={project.title}
						className='project-details__cover'
					/>

					<div className='project-details__desc'>
						<p>
							Skills: <em>{project.skills}</em>
						</p>
					</div>
					{/* {project.gitHubLink && <BtnGitHub link='https://github.com' />} */}
					{/* {project.gitHubLink && <BtnGitHub Link={project.gitHubLink} />} */}
					{project.gitHubTest && <BtnGitHub Link={project.gitHubTest} />}
				</div>
			</div>
		</main>
	);
};

export default ProjectPages;
