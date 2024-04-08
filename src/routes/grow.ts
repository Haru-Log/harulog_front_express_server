import { Router } from 'express';
import mockHeatmap from '../mockData/mockHeatmap';

const growRouter = Router();

growRouter.get('/yearly/:nickname', (req, res) => {
  res.json({
    status: 200,
    code: 'COM-000',
    message: 'OK',
    data: mockHeatmap,
  });
});

growRouter.get('/daily', (req, res) => {
  res.json({
    status: 200,
    code: 'COM-000',
    message: 'OK',
    data: [
      {
        categoryName: '기상',
        userGoal: 1,
        goalUpdatedAt: '2024-02-13T19:02:04.131069',
        achievement: 0,
      },
      {
        categoryName: '독서',
        userGoal: 0,
        goalUpdatedAt: '2024-02-13T19:02:04.132644',
        achievement: 0,
      },
      {
        categoryName: '운동',
        userGoal: 0,
        goalUpdatedAt: '2024-02-13T19:02:04.125004',
        achievement: 140,
      },
      {
        categoryName: '공부',
        userGoal: 0,
        goalUpdatedAt: '2024-02-13T19:02:04.133756',
        achievement: 0,
      },
    ],
  });
});

export default growRouter;
