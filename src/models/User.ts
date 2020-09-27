import * as mongoose from 'mongoose';
import * as uuid from 'node-uuid';

const phoneSchema = new mongoose.Schema({
  phone: {
    type: String,
    require: true,
  },
  ddd: {
    type: String,
    required: true,
  },
});

const UserSchema = new mongoose.Schema({
  id: {
    type: String,
    default: function genUUID() {
      uuid.v1();
    },
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  contactPhones: {
    type: Array,
    required: true,
    add: phoneSchema,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
  last_login: {
    type: Date,
    default: Date.now,
  },
});

// registrar model na aplicação
mongoose.model('User', UserSchema);
