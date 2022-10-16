import React, { useState } from 'react'
import tablePaginate from '../../utils/tablePaginate';
import './ItemTable.scss'
import TableFooter from './TableFooter';

const ItemTable = ({ items }) => {
	const [page, setPage] = useState(1);
	const { slice, range } = tablePaginate(items, page, 6);
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