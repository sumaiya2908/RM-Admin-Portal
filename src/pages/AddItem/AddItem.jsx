import React from "react";
import { useLocation, useParams } from "react-router-dom";
import Image from "../../assets/form-image.png";
import "./AddItem.scss";
const AddItem = (props) => {
	console.log(props)
	// const { setItems } = useLocation().state
	console.log(useLocation())
	return (
		<div className='add-item'>
			<div className='form'>
				<form className=''>
					<div className='heading'>Item Details</div>

					<label>ITEM NAME</label>
					<input
						type='text'
						className='field'
						placeholder='Enter Item Name'
					/>
					<label>LINK</label>
					<input
						type='text'
						className='field'
						placeholder='Enter Link'
					/>
					<label>RESOURCE NAME</label>
					<input
						type='text'
						className='field'
						placeholder='Enter Resource Name'
					/>
					<label>DESCRIPTION</label>
					<input
						type='text'
						className='field'
						placeholder='Enter Description'
					/>
					<button className='button-primary'>Create</button>
				</form>
			</div>
			<div className='image'>
				<img src={Image} />
			</div>
		</div>
	);
};

export default AddItem;
