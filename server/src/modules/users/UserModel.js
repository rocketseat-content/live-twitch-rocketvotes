import { model, Schema } from 'mongoose';

const UserSchema = new Schema(
  {
    githubId: {
      type: String,
      required: true
    },
    name: String,
    email: {
      type: String,
      lowercase: true,
      unique: true
    },
    avatarUrl: String
  },
  {
    timestamps: true
  }
);

export default model('User', UserSchema);
