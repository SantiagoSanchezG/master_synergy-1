export default `
    type Query {
      allProyects: [Proyect]!
      getProyect(_id: ID!): Proyect!
    }

    type Mutation {
      createProyect(proyect: CreateProyect): Proyect!
    }
    
    type Proyect {
      _id: ID!
      proyectname: String!
      obj_general: String!
      obj_especificos: String!
      presupuesto: Float!
      fecha_inicio: String
      fecha_fin: String
      proyect_estado: String
      proyect_fase: String
      proyect_lider: UserShort
  }

  input CreateProyect {
    proyectname: String!
    obj_general: String!
    obj_especificos: String!
    presupuesto: Float!
    fecha_inicio: String
    fecha_fin: String
    proyect_estado: String
    proyect_fase: String
  }
    `;

