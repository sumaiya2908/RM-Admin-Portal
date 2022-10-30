import React, { useEffect, useMemo, useState } from "react";
import { useTable, usePagination, useGlobalFilter } from "react-table";
import { deleteItems } from "../../utils/deleteItems";
import { toast } from "react-toastify";

const ItemTable = ({ items }) => {
	const [selectedItems, setSelectedItems] = useState([]);
	const [isSelected, setIsSelected] = useState(false);
	const [itemList, updateItems] = useState(items)

	const columns = useMemo(
		() => [
			{ Header: "Title", accessor: "title" },
			{ Header: "Description", accessor: "description" },
			{ Header: "Link", accessor: "link" },
			{ Header: "ID", accessor: "id" }
		],
		[]
	);

	const data = useMemo(() => itemList);

	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		prepareRow,
		page,
		canPreviousPage,
		canNextPage,
		pageOptions,
		pageCount,
		gotoPage,
		nextPage,
		previousPage,
		state: { pageIndex, globalFilter },
		setGlobalFilter,
	} = useTable(
		{
			columns,
			data,
			initialState: { pageIndex: 0, pageSize: 6 },
		},
		useGlobalFilter,
		usePagination
	);

	useEffect(() => {
		if (selectedItems.length > 0) setIsSelected(true);
		else setIsSelected(false);

	}, [selectedItems]);

	const handleSelect = (e) => {
		if (e.target.checked)
			setSelectedItems(selectedItems.concat(e.target.id));
		else
			setSelectedItems(
				selectedItems.filter((item) => item !== e.target.id)
			);
	};

	const handleDelete = () => {
		deleteItems(itemList, updateItems, selectedItems)
		toast.success('Item deleted successfully', {
			position: toast.POSITION.TOP_RIGHT,
			autoClose: 5000
		})
	}

	return (
		<div>
			<h3>Items</h3>
			<table>
				<tr className='table-head'>
					<td>Title</td>
					<td>Description</td>
					<td>Link</td>
				</tr>

				{items && slice.map((item, key) => {
					return (
						<tr className='item-row' key={key}>
							<td className='title'>{item.title}</td>
							<td className='description'>{item.description}</td>
							<td className='link'>
								<a href={item.link} target='_blank'>{item.link}</a>
							</td>
						</tr>
					)
				})}
			</table>
			{items && <TableFooter range={range} slice={slice} setPage={setPage} page={page} />}


		</div >
	)
}

export default ItemTable