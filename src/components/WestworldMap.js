import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';
import Area from "./Area"

class WestworldMap extends Component {
	
	render(){

		const areas = this.props.areas.map((area) => {
			return <Area selectHost={this.props.selectHost} selectedHost={this.props.selectedHost} key={area.id} area={area} hosts={this.props.deployedHosts.filter(host => host.area === area.name)}/>
		})

		return (
			<Segment id="map" >
				{ areas }
			</Segment>
		)
	}
}

export default WestworldMap
