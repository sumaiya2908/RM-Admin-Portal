import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Loader from '../Loader/Loader'
import ResourceCard from './ResourceCard'

const ResourceContainer = () => {
	const [resources, setResources] = useState([])
	const url = 'https://media-content.ccbp.in/website/react-assignment/resources.json';

	useEffect(() => {
		getRequest(url, setResources)
	}, [])

	return (
		<>
			<Tab setTab={setTag} />
			<div className='search-input'>
				<img src={SearchIcon} className='icon' />
				<input
					className='field'
					type='text'
					placeholder='Search'
					onChange={(e) => setQuery(e.target.value)}
				/>
			</div>

		<div className='resources-container'>
				{resources.length > 0 ? (
					searchData.map((res, key) => {
					return (
						<Link to={`/resource/${res.id}`}>
							<ResourceCard key={key} resource={res} />
						</Link>
						);
				})
				) : (
					<Loader />
				)}
				{searchData.length == 0 ? <div>No data Found</div> : null}
		</div>
		</>
	);
};

export default ResourceContainer;

export default ResourceContainer