import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import getRequest from "../../utils/axiosRequest";

import Loader from "../Loader/Loader";
import ResourceCard from "./ResourceCard";
import SearchIcon from "../../assets/search-icon.svg";
import { searchQuery, tagWiseData } from "../../utils/searchQuery";
import Tab from "../Tab/Tab";

const ResourceContainer = () => {
	const [resources, setResources] = useState([]);
	const [query, setQuery] = useState("");
	const [searchData, setSearchData] = useState([]);
	const [tag, setTag] = useState('')

	const url =
		"https://media-content.ccbp.in/website/react-assignment/resources.json";

	useEffect(() => {
		getRequest(url, setResources);
	}, [])

	useEffect(() => {
		searchQuery(query, setSearchData, resources)
	}, [query]);

	useEffect(() => {
		tagWiseData(tag, setSearchData, resources)
	}, [tag, resources])

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