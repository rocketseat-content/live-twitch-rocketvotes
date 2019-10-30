import { model, Schema } from 'mongoose';

const UserSchema = new Schema(
  {
    githubId: {
      type: String,
      required: true
    },
    name: {
      type: String
    },
    email: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

export default model('User', UserSchema);
