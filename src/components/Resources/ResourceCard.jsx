import React from "react";
import { Link } from "react-router-dom";
import "./Resource.scss";

const ResourceCard = ({ resource }) => {
	return (
		<div className='resource-card'>
			<div className='card-title'>
				<div className='icon'>
					<img src={resource.icon_url} />
				</div>
				<span className='text'>
					<div className='title'>{resource.title}</div>
					<div className='category'>{resource.category}</div>
				</span>
			</div>

			<div className="link">
				<Link to={resource.link} target='_blank'>
					{resource.link}
				</Link>
			</div>
			<div className="description">{resource.description}</div>
		</div>
	);
};

export default ResourceCard;
