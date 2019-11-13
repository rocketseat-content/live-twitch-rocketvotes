import { model, Schema } from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';

const TopicSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    votes: {
      type: [String],
      required: true
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    }
  },
  {
    timestamps: true
  }
);
TopicSchema.plugin(mongoosePaginate);

export default model('Topic', TopicSchema);
