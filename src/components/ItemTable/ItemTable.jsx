import React, { useEffect, useMemo, useState } from "react";
import { useTable, usePagination, useGlobalFilter } from "react-table";
import "./ItemTable.scss";
import SearchIcon from "../../assets/search-icon.svg";
import Pagination from "./Pagination";
import { Link } from "react-router-dom";
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
		<>
			<div className='table-heading'>
				<div className='heading'>Items</div>
				<div className='search-input'>
					<img src={SearchIcon} className='icon' />
					<input
						className='field'
						type='text'
						placeholder='Search...'
						value={globalFilter || ""}
						onChange={(e) => setGlobalFilter(e.target.value)}
					/>
				</div>
			</div>

			<table {...getTableProps()}>
				{headerGroups.map((headerGroup) => (
					<thead
						className='table-head'
						{...headerGroup.getHeaderGroupProps()}
					>
						<tr>
							<th></th>
							{headerGroup.headers.map((column) => (
								<th {...column.getHeaderProps()} className={column.id}>

									{column.render("Header")}
								</th>
							))}
						</tr>
					</thead>
				))}

				<tbody {...getTableBodyProps()}>
					{page.map((row) => {
						prepareRow(row);
						return (
							<tr className='item-row' {...row.getRowProps()}>
								<td className='check'>
									<input
										type='checkbox'
										onChange={handleSelect}
										checked={selectedItems.includes(row.values.id)}
										id={parseInt(row.values.id)}
									/>

								</td>
								{row.cells.map((cell) => {
									return (
										<td
											className={cell.column.id}
											{...cell.getCellProps()}
										>
											{" "}
											{cell.column.id == "link" ? (
												<a
													href={cell.value}
													target='_blank'
												>
													{cell.render("Cell")}
												</a>
											) : (
												cell.render("Cell")
											)}
										</td>
									);
								})}
							</tr>
						);
					})}
				</tbody>
			</table>

			<div className='table-footer'>
				<div className='action-buttons'>
					<Link to='/add-item' state={{ 'set': updateItems }}>
						<button className='button-secondary' disabled={isSelected}>
							Add Item
						</button>
					</Link>
					<button className='button-tertiary' disabled={!isSelected} onClick={handleDelete}>
						Delete
					</button>
				</div>

				<Pagination
					{...{
						gotoPage,
						canNextPage,
						canPreviousPage,
						pageCount,
						pageIndex,
						pageOptions,
						previousPage,
					}}
				/>
			</div>
		</>
	);
};

export default ItemTable;
