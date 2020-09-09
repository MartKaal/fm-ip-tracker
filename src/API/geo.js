import axios from 'axios';
import config from '../config'

const getIpData = async (searchIP) => {
	let res = await axios.get(`https://geo.ipify.org/api/v1?apiKey=` + config.MY_KEY + '&ipAddress=' + searchIP);
	let { ip, isp, location } = res.data;
	return { ip, isp, location };
}

export default getIpData;