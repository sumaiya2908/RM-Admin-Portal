function searchQuery(query, setFilteredData, data) {
	if (query !== "") {
		const filteredData = data.filter((item) => {
			return Object.values(item)
				.join("")
				.toLowerCase()
				.includes(query.toLowerCase());
		});
		setFilteredData(filteredData)
	}
	else setFilteredData(data)
}

function tagWiseData(tag, setData, data) {
	if (tag == '' || tag == 'al') {
		setData(data)
		return
	}

	const tagData = data.filter((item) => item.tag == tag)
	console.log(tagData)
	setData(tagData)
}

export { searchQuery, tagWiseData }