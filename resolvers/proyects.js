export default {
    Query: {
      allProyects: (parent, args, {models}) => models.Proyect.find(),
      getProyect: (parent, args, {models}) => models.Proyect.findOne(args)
    },
    Mutation: {
      createProyect: async (parent, args, {models, user} ) => await models.Proyect.create({...args.proyect, proyect_lider: user}),
      deleteProyect: async(parent, args, {models} ) => {
        const { _id } = args;
        await models.Proyect.findByIdAndDelete(_id);
        return "Proyecto eliminado"
      },
    },
      
  }