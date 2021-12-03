import mongoose from 'mongoose';
import validate from 'mongoose-validator';

const proyectSchema = mongoose.Schema({
  proyectname: {
    type: String,
    require: true
  },
  obj_general: {
    type: String,
    required: true
  },
  obj_especificos: {
    type: String,
    required: true
  },
  presupuesto: {
    type: Number,
    required: true
  },
  fecha_inicio: {
    type: Date,
    default: new Date,
    required: true
  },
  fecha_fin: {
    type: Date, 
    default: new Date,
    required: true
  },
  proyect_estado: {
    type: String,
    default: "Inactivo"
  },
  proyect_fase: {
    type: String,
    default: null,
  },
  proyect_lider:{
      type: {},
      required: true
  },
}
)

const proyectModel = mongoose.model('Proyecto', proyectSchema)

export default proyectModel;
