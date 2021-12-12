import React from 'react';
import { Divider, Form, Button, Icon, Message } from 'semantic-ui-react';
import _find from 'lodash/find';

const typeUserOptions = [
  { key: 'ad', value: 'Administrador', text: 'Administrador' },
  { key: 'li', value: 'Lider', text: 'Líder' },
  { key: 'es', value: 'Estudiante', text: 'Estudiante' },
]

export default ({styles, handleClick, handleSubmit, handleChange, args, errors}) => {


  return (
  <div>
    <div  style={styles.box}>
      <h1>Gestor de Proyectos</h1>
      <h4>Regístrate para crear y administrar tus proyectos.</h4>
      <Form  onSubmit={(ev)=>handleSubmit(ev, args)}>
        <Divider horizontal> o </Divider>
        <Form.Field>
          <Form.Input  name="email" onChange={handleChange} placeholder='Email' icon={!errors.length?null: _find(errors, {path:'email'})?<Icon name="remove circle" color="red" size="large" />:<Icon name="check circle outline" color="green" size="large" />} />
        </Form.Field>
        <Form.Field>
          <Form.Input  name="username" onChange={handleChange} placeholder='Nombre completo' icon={!errors.length?null: _find(errors, {path:'username'})?<Icon name="remove circle" color="red" size="large" />:<Icon name="check circle outline" color="green" size="large" />} />
        </Form.Field>
        <Form.Field>
          <Form.Input  name="numdoc" onChange={handleChange} placeholder='Documento de identidad ' icon={!errors.length?null: _find(errors, {path:'numdoc'})?<Icon name="remove circle" color="red" size="large" />:<Icon name="check circle outline" color="green" size="large" />} />
        </Form.Field>
        <Form.Field>
          <Form.Input  name="password" onChange={handleChange} type="password" placeholder='Contraseña' icon={!errors.length?null: _find(errors, {path:'password'})?<Icon name="remove circle" color="red" size="large" />:<Icon name="check circle outline" color="green" size="large" />} />
        </Form.Field>
        <Form.Field>
          <Form.Select name="tipo_usuario" onChange={handleChange} placeholder='Selecciona el tipo de usuario' options={typeUserOptions} />
          </Form.Field>
        <Button
          type='submit'
          disabled={!args.email || !args.username || !args.numdoc || !args.password || !args.tipo_usuario}
          primary
          fluid>
          Registrarte
        </Button>

        {
          errors.length?<Message negative header="Errores:"
            list={errors.map(error=>` ${error.message}`)} />:null
        }


      </Form>

    </div>
    <div  style={styles.box}>
        ¿Tienes una cuenta? <a href="" onClick={handleClick}>Inicia sesión</a>
    </div>
  </div>)
}
