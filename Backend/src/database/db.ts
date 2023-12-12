const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email: {type: String, required: true},
    password: {type: String, required: true},
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    street: {type: String},
    telephoneNumber: {type: String}
})

userSchema.index({ email: 1 }, { unique: true });

export const UserModel = mongoose.model('users', userSchema);

const quizSchema = new mongoose.Schema({
    title: { type: String, required: true },
    questions: [{ type: String, required: true }],
    // Define other quiz fields here
  });
  
export const QuizModel = mongoose.model('quizzes', quizSchema);

mongoose.connect('mongodb+srv://taimoor0074:Ff3MGY8VSelcVqdG@cluster0.b9sxebj.mongodb.net/quiz?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((error: any) => {
    console.error('MongoDB connection error:', error);
});