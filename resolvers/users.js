import bcrypt from "bcrypt";
import auth from '../auth.js';

const formatErrors = (error, otherErrors) => {
  const errors = error.errors;
  let objErrors = [];

  if (errors) {
    Object.entries(errors).map((error) => {
      const { path, message } = error[1];
      objErrors.push({ path, message });
    });
    objErrors = objErrors.concat(otherErrors);
    return objErrors;
  } else if (otherErrors.length) {
    return otherErrors;
  }

  const uknownError = {};
  switch (error.code) {
    case 11000:
      uknownError.path = "email" 
      uknownError.message = "El correo electrónico ya está registrado";
      break
    default:
      uknownError.path = "Desconocido";
      uknownError.message = error.message;
  }
  return [uknownError];
};

export default {
  Query: {
    allUsers: async (parent, args, { models }) => await models.User.find(),
    getUser: async (parent, args, { models }) =>
      await models.User.findOne(args),
  },
  Mutation: {
    login: async (parent, { email, password }, {models:{User}, SECRET})=> auth.login(email, password, User, SECRET),
    createUser: async (parent, { password, ...args }, { models }) => {
      const otherErrors = [];
      try {
        if (password.length < 8) {
          otherErrors.push({
            path: "password",
            message: "La contraseña debe ser mayor a 8 caracteres",
          });
        }

        const hashPassword = await bcrypt.hash(password, 10);
        const usuario = await models.User.create({ ...args, password: hashPassword });

        if (otherErrors.length) {
          throw otherErrors;
        }
        return {
          success: usuario && true,
          errors: [],
        };
      } catch (error) {
        console.log(formatErrors(error, otherErrors));
        // return false;
        return {
          success: false,
          errors: formatErrors(error, otherErrors),
        };
      }
    },
  },
};
