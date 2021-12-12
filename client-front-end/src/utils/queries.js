import gpl from 'graphql-tag';

export default {
  query: {

  },
  mutation: {
    login: gpl`
      mutation($email: String!, $password: String!){
        login(email: $email, password: $password) {
          success
          token
          errors{
            path
            message
          }
        }
      }
    `,
    createUser: gpl`
      mutation($username: String!, $numdoc: String!, $email: String!, $password: String!, $tipo_usuario: String!){
        createUser(username: $username, numdoc: $numdoc, email: $email, password: $password, tipo_usuario: $tipo_usuario){
          success
          errors{
            path
            message
          }
        }
      }
    `
  },
  // subscription:{},
}
