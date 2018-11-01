import React from 'react';
import { Segment } from 'semantic-ui-react'
import HostList from './HostList'


const ColdStorage = ({ hosts, selectHost, selectedHost }) => {
  return(
    <Segment style={{height:'100%'}}>
      <h3>ColdStorage</h3>
      <HostList hosts={hosts} selectedHost={selectedHost} selectHost={selectHost}/>
    </Segment>
  )
}

export default ColdStorage
