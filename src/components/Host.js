import React, { Component }  from 'react';
import { Card } from 'semantic-ui-react'

class Host extends Component {

  handleClick = (e) => {
    this.props.selectHost(this.props.host)
  }

  render(){
    let style = this.props.clicked ? {width: "50px", border: "2px solid red", borderRadius: "5px"} : {width: "50px"}

    return(
      <Card onClick={this.handleClick} style={style}
        raised
        image={this.props.host.imageUrl}
      />
    )
}

}

export default Host
