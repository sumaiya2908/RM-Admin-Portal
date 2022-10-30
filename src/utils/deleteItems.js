export function deleteItems(items, updateItems, ids) {
	let updatedItems = items.filter((item) => !ids.includes(item.id))
	updateItems(updatedItems)
}