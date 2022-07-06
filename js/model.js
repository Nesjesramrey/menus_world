const userSchema = new mongoose.Schema({
  username: {
    type: String,
    minlength: 4,
    maxlength: 20,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 4,
  },
});

const administratorSchema = new mongoose.Schema({
  username: {
    type: String,
    minlength: 4,
    maxlength: 20,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 4,
  },
});

const comentSchema = new mongoose.Schema({
  title: {
    type: String,
    minlength: 5,
    maxlength: 100,
  },
  content: String,
  comments: [
    {
      user: String,
      date: {
        type: Date,
        default: Date.now,
      },
      comment: String,
    },
  ],
});
