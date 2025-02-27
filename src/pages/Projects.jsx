import ProjectCard from '../component/project/ProjectCard';
import './../component/styles/Projects.css';

import { projects } from '../component/data/projectList';

const Projects = () => {
	return (
		<main className='section'>
			<div className='container'>
				<h2 className='title-1'>Projects</h2>
				<ul className='projects'>
					{projects.map((project, index) => {
						return (
							<ProjectCard
								key={index}
								title={project.title}
								img={project.img}
								index={index}
							/>
						);
					})}
				</ul>
			</div>
		</main>
	);
};

export default Projects;
