import React from 'react';
import { Form, Button, Icon, Message } from 'semantic-ui-react'
import _find from 'lodash/find';


export default ({ styles, handleClick, handleSubmit, handleChange, args, errors }) => {
  // const args={}
  //
  // const handleChange = (ev, input)=>{
  //   args[input.name] = input.value
  // }

  return (
    <div>
      <div style={styles.box}>
        <h1>Gestor de Proyectos</h1>
        <Form onSubmit={(ev) => handleSubmit(ev, args)}>
          <Form.Field>
            <Form.Input name="email" onChange={handleChange} placeholder='Email' icon={!errors.length ? null : _find(errors, { path: 'email' }) ? <Icon name="remove circle" color="red" size="large" /> : <Icon name="check circle outline" color="green" size="large" />} />
          </Form.Field>
          <Form.Field>
            <Form.Input name="password" onChange={handleChange} type="password" placeholder='Contraseña' icon={!errors.length ? null : _find(errors, { path: 'password' }) ? <Icon name="remove circle" color="red" size="large" /> : <Icon name="check circle outline" color="green" size="large" />} />
          </Form.Field>
          <Button
            type='submit'
            disabled={!args.email || !args.password}
            primary fluid>
            Iniciar sesión
          </Button>
          {
            errors.length ? <Message negative header="Error:"
              list={errors.map(error => `${error.message}`)} /> : null
          }
        </Form>
      </div>
      <div style={styles.box}>
        ¿No tienes una cuenta? <a href="" onClick={handleClick}>Regístrate</a>
      </div>
    </div>)
}
