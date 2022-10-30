import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import Image from "../../assets/form-image.png";
import "./AddItem.scss";

const AddItem = () => {
	const [status, setStatus] = useState();
	const [error, setError] = useState(null)
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		let url =
			"https://media-content.ccbp.in/website/react-assignment/add_resource.json";
		let r = axios.get(url)
			.then((result) => setStatus(result.status))
			.catch((err) => setError(err))

	};

	useEffect(() => {
		if (status == 200) {
			toast.success('Item added Successfully!', {
				position: toast.POSITION.TOP_RIGHT,
				autoClose: 5000,
			});
			navigate("/")
		}
		if (error) {
			toast.error(error.msg, {
				position: toast.POSITION.TOP_RIGHT,
				autoClose: 5000
			})
		}
	}, [status, error])

	return (
		<>
			<div className='add-item'>
				<div className='form'>
					<form className='' onSubmit={handleSubmit}>
						<div className='heading'>Item Details</div>

						<label>ITEM NAME</label>
						<input
							type='text'
							className='field'
							placeholder='Enter Item Name'
							name='title'
						/>
						<label>LINK</label>
						<input
							type='text'
							className='field'
							placeholder='Enter Link'
							name='link'
						/>
						<label>RESOURCE NAME</label>
						<input
							type='text'
							className='field'
							placeholder='Enter Resource Name'
							name='resource_name'
						/>
						<label>DESCRIPTION</label>
						<input
							type='text'
							classame='field'
							placeholder='Enter Description'
						/>
						<button type='submit' className='button-primary'>
							Create
						</button>
					</form>
				</div>
				<div className='image'>
					<img src={Image} />
				</div>

			</div>
		</>
	);
};

export default AddItem;
