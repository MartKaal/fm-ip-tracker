import React from 'react'
import styles from './Search.module.css';

function Search({ change, keyDown, loading }) {
	return (
		<>
			<input
				className={styles.input}
				type="text"
				onChange={change}
				onKeyDown={keyDown}
				disabled={loading}
				placeholder="Search for any IP address or domain"
			/>
		</>
	)
}

export default Search
