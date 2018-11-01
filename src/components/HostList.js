import React from 'react'
import { Card } from 'semantic-ui-react'
import Host from './Host'

const HostList = ({ hosts, selectedHost, selectHost }) => {

	const hostCards = hosts.map((host) => {
		
		return <Host host={host} clicked={host == selectedHost} selectHost={selectHost}/>
	})

	return (
		<Card.Group itemsPerRow={6}>
			{ hostCards }
		</Card.Group>
	)
}


export default HostList
