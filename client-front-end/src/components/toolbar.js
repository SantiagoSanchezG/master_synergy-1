import React, { Fragment } from "react";
import { Link } from 'react-router-dom';
import { Icon, Menu, Segment, Sidebar, Grid, Image} from "semantic-ui-react";
import Container from './container';

export default () => (
  <Fragment>

<Grid columns={2} divided>
    <Grid.Row>
      <Grid.Column width={2}>
    <Sidebar
      as={Menu}
      animation="overlay"
      icon="labeled"
      inverted
      vertical
      visible
      width="thin"
    >
      <Menu.Item as="a">
        <Icon name="home" />
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item as="a">
        <Icon name="users" />
        <Link to="/usuarios">Usuarios</Link>

      </Menu.Item>
      <Menu.Item as="a">
        <Icon name="folder" />
        <Link to="/proyectos">Proyectos</Link>
      </Menu.Item>
      <Menu.Item as="a">
        <Link to="/logout">Salir</Link>
      </Menu.Item>

    </Sidebar>

      </Grid.Column>
      <Grid.Column width={14}>
        <Container></Container>
      </Grid.Column>
    </Grid.Row>
  </Grid>
  
  </Fragment>

);
