import React from 'react';
import HostList from './HostList';

const Area = ({ area, hosts, selectedHost, selectHost }) => {

	return(
		<div style={area.style} className='area'>
			<h3>{area.name.replace("_", " ")}</h3>
			<HostList selectHost={selectHost} selectedHost={selectedHost}hosts={hosts}/>
		</div>
	)
}

export default Area;
