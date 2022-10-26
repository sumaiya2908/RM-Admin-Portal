import React from "react";

const Pagination = ({
	gotoPage,
	canPreviousPage,
	previousPage,
	canNextPage,
	pageCount,
	pageIndex,
	pageOptions,
}) => {
	return (
		<div className='pagination'>
			<button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
				{"<<"}
			</button>{" "}
			<button onClick={() => previousPage()} disabled={!canPreviousPage}>
				Previous
			</button>{" "}
			<button onClick={() => nextPage()} disabled={!canNextPage}>
				Next
			</button>{" "}
			<button
				onClick={() => gotoPage(pageCount - 1)}
				disabled={!canNextPage}
			>
				{">>"}
			</button>{" "}
			<span>
				Page{" "}
				<strong>
					{pageIndex + 1} of {pageOptions.length}
				</strong>{" "}
			</span>
			<span>
				| Go to page:{" "}
				<input
					type='number'
					defaultValue={pageIndex + 1}
					onChange={(e) => {
						const pageNumber = e.target.value
							? Number(e.target.value) - 1
							: 0;
						gotoPage(pageNumber);
					}}
					style={{ width: "50px" }}
				/>
			</span>{" "}
		</div>
	);
};

export default Pagination;