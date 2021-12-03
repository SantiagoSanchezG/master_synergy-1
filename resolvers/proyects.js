export default {
    Query: {
      allProyects: (parent, args, {models}) => models.Proyect.find(),
      getProyect: (parent, args, {models}) => models.Proyect.findOne(args)
    },
    Mutation: {
      createProyect: (parent, args, {models, user}) => models.Proyect.create({...args.proyect, proyect_lider: user})
    },
  }