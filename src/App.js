import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';
import Headquarters from "./components/Headquarters"
import WestworldMap from "./components/WestworldMap"

class App extends Component {

	state = {
		hosts: [],
		areas: [],
		selectedHost: null,
		deployed: false
	}

	componentDidMount(){
		fetch("http://localhost:3001/hosts")
		.then(res => res.json())
		.then((hosts) => {
			fetch("http://localhost:3001/areas")
			.then(res => res.json())
			.then((areas) => {
				this.setState({
					hosts,
					areas
				})
			})
		})

		
	}

	changeArea = (areaName, hostImage) => {
		const foundHost = this.state.hosts.find(host => host.imageUrl === hostImage)
		const index = this.state.hosts.indexOf(foundHost)

		if (areaName === "under_construction" && foundHost.firstName !== "Beranrd"){
			return
		}

		const newHost = {...foundHost}
		newHost.area = areaName

		const newHostList = [...this.state.hosts]

		newHostList[index] = newHost

		this.setState({
			hosts: newHostList,
			selectedHost: newHost
		})


	}

	changeStatus = (hostImage) => {
		const foundHost = this.state.hosts.find(host => host.imageUrl === hostImage)
		const index = this.state.hosts.indexOf(foundHost)
		const newHost = {...foundHost}
		newHost.status = newHost.status === "Active" ? "Decomissioned" : "Active"

		const newHostList = [...this.state.hosts]

		newHostList[index] = newHost

		this.setState({
			hosts: newHostList,
			selectedHost: newHost
		})
	}

	deploy = () => {
		this.setState({
			deployed: !this.state.deployed
		})
	}

	selectHost = (host) => {
		this.setState({
			selectedHost: host
		})
	}

	render(){
		console.log(this.state.hosts)
		const coldStorageHosts = this.state.deployed ? this.state.hosts.filter(host => host.area === "cold_storage" || host.status !== "Active") : this.state.hosts
		const deployedHosts = this.state.deployed ? this.state.hosts.filter(host => host.area !== "cold_storage" && host.status === "Active") : []
		return (
			<Segment id='app'>
				{ /* Your code here */}
				<WestworldMap selectHost={this.selectHost} selectedHost={this.state.selectedHost} deployedHosts={deployedHosts} areas={this.state.areas}/>
				<Headquarters changeStatus={this.changeStatus} deployed={this.state.deployed} deploy={this.deploy} changeArea={this.changeArea} areas={this.state.areas} selectHost={this.selectHost} selectedHost={this.state.selectedHost} hosts={coldStorageHosts}/>
			</Segment>
		)
	}
}

export default App;
