import React, { Fragment } from 'react';
import { graphql } from 'react-apollo';
import gpl from 'graphql-tag';
import { Icon, Menu, Table, Label } from "semantic-ui-react";
import Toolbar from '../../components/toolbar';
import Container from '../../components/container';



const query = gpl`{
    allUsers {
      username
      email
      tipo_usuario
    }
  }
  `;

export default graphql(query)(
    ({ data: { allUsers = [], loading } }) =>
        <Fragment>

            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Nombre Usuario</Table.HeaderCell>
                        <Table.HeaderCell>Email</Table.HeaderCell>
                        <Table.HeaderCell>Tipo Usuario</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {allUsers.map((user, indice) => (
                        <Table.Row key={indice}>
                            <Table.Cell>{user.username}</Table.Cell>
                            <Table.Cell>{user.email}</Table.Cell>
                            <Table.Cell>{user.tipo_usuario}</Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan='3'>
                            <Menu floated='right' pagination>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron left' />
                                </Menu.Item>
                                <Menu.Item as='a'>1</Menu.Item>
                                <Menu.Item as='a'>2</Menu.Item>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron right' />
                                </Menu.Item>
                            </Menu>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>
            <ul>

            </ul>




        </Fragment >
)
