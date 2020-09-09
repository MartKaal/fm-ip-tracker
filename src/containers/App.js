import React, { useEffect, useState } from 'react';
import './App.css';
import getIpData from '../API/geo'

import Search from '../components/Search/Search'

function App() {
	const [searchIp, setSearchIp] = useState('');
	const [ipInfo, setIpInfo] = useState({
		'ip': '',
		'location': '',
		'timezone': '',
		'isp': '',
	});
	const [loading, setLoading] = useState(false);

	const getValueInputHandler = (e) => {
		setSearchIp(e.target.value);
	}

	const onKeyDownHandler = (e) => {
		if (e.key === 'Enter') {
			setLoading(true);

			getIpData(searchIp).then(res => {
				console.log(res);
				setIpInfo({
					'ip': res.ip,
					'location': res.location,
					'timezone': 'etc',
					'isp': res.isp,
				})
				setLoading(false);
			})
		}
	}

	return (
		<div className="App">
			<ul>
				<Search
					change={e => getValueInputHandler(e)}
					keyDown={e => onKeyDownHandler(e)}
					loading={loading}
				/>
				{/* Display location info */}
				{/* Location map */}
			</ul>
		</div>
	);
}

export default App;
