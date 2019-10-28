import { model, Schema } from 'mongoose';

const TopicSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  votes: {
    type: Number,
    required: true
  }
});

export default model('Topic', TopicSchema);
