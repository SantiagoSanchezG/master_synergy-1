export default `
    type Query {
      allUsers: [User]!
      getUser(_id: ID!): User!
    }

    type Mutation {
      login(email: String!, password: String!): Response!
      createUser(username: String!, numdoc: Int!, email: String!, password: String!, tipo_usuario: TypeUser!, user_estado: UserState): Response!
    }

    type User {
      _id: ID!
      username: String!
      numdoc: Int!
      password: String!
      email: String!
      tipo_usuario: TypeUser!
      user_estado: UserState
  }

    type UserShort {
      _id: ID,
      username: String!,
      numdoc: String,
  }

    enum TypeUser {
      Administrador
      Estudiante
      Lider
    
  }

    enum UserState {
      Pendiente
      Autorizado
      Unauthorized
    }

    type Response {
      success: Boolean!
      token: String
      errors: [Error]
  }

    type Error{
      path: String!
      message: String!
  }
    `;

