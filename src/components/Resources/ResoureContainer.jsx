import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import getRequest from '../../utils/axiosRequest'

import Loader from '../Loader/Loader'
import ResourceCard from './ResourceCard'

const ResourceContainer = () => {
	const [resources, setResources] = useState([])
	const url = 'https://media-content.ccbp.in/website/react-assignment/resources.json';

	useEffect(() => {
		getRequest(url, setResources)
	}, [])

	return (
		<div className='resources-container'>
			{resources ?
				resources.map((res, key) => {
					return (
						<Link to={`/resource/${res.id}`}>
							<ResourceCard key={key} resource={res} />
						</Link>
					)
				})

				: <Loader />
			}
		</div>
	)
}

export default ResourceContainer