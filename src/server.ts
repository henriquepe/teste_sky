import * as express from 'express';
import * as mongoose from 'mongoose';
import sessions from './routes/sessions.routes';
import signup from './routes/signup.routes';
import usersRouter from './routes/users.routes';

// app
const app = express();
app.use(express.json());

const uri =
  'mongodb+srv://rosa1702:rosa1702@cluster0.m7oe2.mongodb.net/skydb?retryWrites=true&w=majority';

mongoose.connect(
  uri,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  },
  err => {
    if (err) throw err;
    console.log('database connected!');
  },
);

// eslint-disable-next-line import/first
require('./models/User');

// rotas
app.use(signup);
app.use(sessions);
app.use(usersRouter);

app.listen(3333, () => {
  console.log('server is running on port 3333');
});
