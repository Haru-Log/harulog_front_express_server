import { Router } from 'express';

interface LoginRequestType {
  email: string;
  password: string;
}

const loginRouter = Router();

loginRouter.post('/', (req, res) => {
  const requestBody: LoginRequestType = req.body;

  console.log(requestBody);

  res.set('Authorization', 'TEST_JWT_TOKEN');

  res.json({
    status: 200,
    code: 'COM-000',
    message: 'OK',
    data: {
      nickname: '어드민',
      userRole: 'ADMIN',
    },
  });
});

export default loginRouter;
