import React, { Component } from 'react'
import { Radio, Icon, Card, Grid, Image, Dropdown, List, Segment, Divider } from 'semantic-ui-react'


class HostInfo extends Component{
  state = {
    checked: false,
    value: "cold_storage"
    // This state is here to show you how the Info box should work. But it doesn't have to (and probably shouldn't) live here
    // Plus the areas aren't called area1,2,or 3. That's just a placeholder.
  }


  handleChange = (e, data) => {
    this.setState({
      value: data.value
    })

    this.props.changeArea(data.value, this.props.selectedHost.imageUrl)
  }

  static getDerivedStateFromProps(props, state){

    return {
      checked: props.selectedHost.status === "Active",
      value: props.selectedHost.area,
    }

  }

  toggle = () => {
    this.props.changeStatus(this.props.selectedHost.imageUrl)
  }



  render(){
    const { value } = this.state
    // A lot of these values are hardcoded.....but they shouldn't be, hint hint....
    const areas = this.props.areas.map(area => {
      return {key: area.name, text: area.name, value: area.name}
    })

    areas.push({key: "cold_storage", text: "cold_storage", value: "cold_storage"})
    return (
      <Segment>
        <Grid>
          <Grid.Column width={6}>
            <Image floated='left' size='small' src={this.props.selectedHost.imageUrl}/>
          </Grid.Column>
          <Grid.Column width={10}>
            <Card>
              <Card.Content>
                <Card.Header>
                  {this.props.selectedHost.firstName + " " + this.props.selectedHost.lastName} <Icon name={this.props.selectedHost.gender === "Male" ? "man" : "woman"} />
                </Card.Header>
                <Card.Meta>
                  <Radio style={{margin: "10px"}} slider onChange={this.toggle} label={this.state.checked ? "Active" : "Decommissioned"} checked={this.state.checked}/>
                </Card.Meta>

                <Divider />
                Current Area:
                <Dropdown
                  onChange={this.handleChange}
                  value={value}
                  selection
                  options={areas} />

              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid>
      </Segment>
    )
  }
}

export default HostInfo
