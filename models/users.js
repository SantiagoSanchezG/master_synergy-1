import mongoose from 'mongoose';
import validate from 'mongoose-validator';

const userSchema = mongoose.Schema({
  username: {
    type: String,
    require: true,
    validate: [
      validate({
        validator: 'isLength',
        arguments: [8,40],
        message: 'El nombre de usuario debe contener entre {ARGS[0]} y {ARGS[1]} caracteres'
      }),
    ]
  },
  password: {
    type: String,
  },
  numdoc: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: validate({
      validator: 'isEmail',
      message: 'Introduzca un Email válido'
    })
  },
  password: {
    type: String,
    required: true
  },
  tipo_usuario: {
    type: String,
    required: true
  },
  user_estado: {
    type: String,
    default: "Pendiente",
  },
}
)

const userModel = mongoose.model('Usuario', userSchema)

export default userModel;
