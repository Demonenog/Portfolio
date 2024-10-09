/* eslint-disable react/prop-types */
import './BtnGitHub.css';
import imgGit from './../../img/icons/gitHub.svg';
// import gitHubLink from './../data/projectList';

const BtnGitHub = ({ Link }) => {
	return (
		<a href={Link} target='_blank' rel='noreferrer' className='btn-outline'>
			<img src={imgGit} alt='' />
			GitHub repo
		</a>
	);
};

export default BtnGitHub;
