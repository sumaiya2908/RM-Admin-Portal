import React, { useState } from 'react'
import './Tab.scss'

const Tab = ({ setTab }) => {
	const tabs = ['All', 'Resources', 'Requests', 'Users']
	const [selected, setSelected] = useState('Al')

	const handleSelect = ({ target }) => {
		const value = target.getAttribute('value')
		setSelected(value)
		setTab(value.toLowerCase())
	}
	return (
		<div className='tabs-container'>
			{tabs.map((tab, i) => {
				return (
					<div value={tab.slice(0, -1)} className={`tab tab${i + 1} ${selected == tab.slice(0, -1) ? 'selected' : null}`} onClick={handleSelect} > {tab}</div>
				)
			})}
		</div >
	)
}

export default Tab