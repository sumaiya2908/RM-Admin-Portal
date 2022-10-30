import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

import { ItemTable } from "../../components";
import getRequest from "../../utils/axiosRequest";
import "./Resource.scss";

const Resource = () => {
	const [resource, setResource] = useState([]);
	const [status, setStatus] = useState();
	const [error, setError] = useState(null)

	const { id } = useParams();
	const url = `https://media-content.ccbp.in/website/react-assignment/resource/${id}.json`;

	useEffect(() => {
		getRequest(url, setResource);
	}, []);

	useEffect(() => {
		if (status == 200) {
			toast.success('Resource Updated Successfully!', {
				position: toast.POSITION.TOP_RIGHT,
				autoClose: 5000
			})
			setStatus('')
		}
		if (error) {
			toast.error(error, {
				position: toast.POSITION.TOP_RIGHT,
				autoClose: 5000
			})
			setError(null)
		}

	}, [status, error])

	const handleUpdate = () => {
		const url = 'https://media-content.ccbp.in/website/react-assignment/resource/update.json'
		const r = axios.get(url)
			.then((res) => setStatus(res.status))
			.catch((err) => setError(err))
	}

	return (
		<>
			<div className='resource-details'>
				<div className='details'>
					<div className='icon'>
						<img src={resource.icon_url} />
					</div>
					<div className='text'>
						<div className='title'>{resource.title}</div>
						<a
							className='link'
							href={resource.link}
							target='_blank'
						>
							{resource.link}
						</a>
					</div>
				</div>
				<div className='description'>{resource.description}</div>
			</div>
			<button className='primary-button' onClick={handleUpdate}>Update</button>

			{resource.resource_items && <ItemTable items={resource.resource_items} />}
		</>
	);
};

export default Resource;
