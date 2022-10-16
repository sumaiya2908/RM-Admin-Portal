import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { ItemTable } from '../../components'
import './Resource.scss';
import getRequest from '../../utils/axiosRequest'

const Resource = () => {
	const [resource, setResource] = useState([])
	const { id } = useParams();
	const url = `https://media-content.ccbp.in/website/react-assignment/resource/${id}.json`

	useEffect(() => {
		getRequest(url, setResource)
	}, [])

	return (
		<>
			<div className='resource-details'>
				<div className='details'>
					<div className='icon'>
						<img src={resource.icon_url} />
					</div>
					<div className='text'>
						<div className='title'>
							{resource.title}
						</div>
						<a className='link' href={resource.link} target='_blank'>
							{resource.link}
						</a>
					</div>
				</div>
				<div className='description'>
					{resource.description}
				</div>
			</div>
			<button className='primary-button'>
				Update
			</button>

			<ItemTable items={resource.resource_items} />
		</>
	)
}

export default Resource