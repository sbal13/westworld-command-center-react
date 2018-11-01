import React from 'react';
import { Grid, Button } from 'semantic-ui-react';
import ColdStorage from "./ColdStorage"
import HostInfo from "./HostInfo"

const Headquarters = ({ hosts, selectHost, changeStatus, changeArea, deployed, selectedHost, areas, deploy }) => {  
  return(
    <Grid celled='internally'>
      <Grid.Column width={8}>

        <ColdStorage hosts={hosts} selectHost={selectHost} selectedHost={selectedHost}/>

      </Grid.Column>

      <Grid.Column width={5}>

        {selectedHost ? <HostInfo changeStatus={changeStatus} areas={areas} changeArea={changeArea} selectedHost={selectedHost}/> : null}

      </Grid.Column>

      <Grid.Column width={3}>
        <Button onClick={deploy}>{deployed ? "Call Back" : "Deploy"}</Button>
      </Grid.Column>

    </Grid>
  )
}


export default Headquarters;
