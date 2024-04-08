import { Router } from 'express';

interface SignupRequestBodyType {
  email: string;
  userName: string;
  password: string;
  nickname: string;
}

const signupRouter = Router();

signupRouter.post('/', (req, res) => {
  const requestBody: SignupRequestBodyType = req.body;

  console.log(requestBody);

  res.json({
    status: 200,
    code: 'COM-000',
    message: 'OK',
  });
});

export default signupRouter;
