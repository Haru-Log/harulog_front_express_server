import { Router } from 'express';
import mockGoal from '../mockData/mockGoal';

interface UpdateGoalListType {
  categoryName: string;
  goal: number;
}

interface UpdateGoalRequestType {
  updateGoalList: UpdateGoalListType[];
}

const goalRouter = Router();

goalRouter.get('/', (req, res) => {
  res.json({
    status: 200,
    code: 'COM-000',
    message: 'OK',
    data: mockGoal,
  });
});

goalRouter.put('/update', (req, res) => {
  const data: UpdateGoalRequestType = req.body;

  console.log(data);

  res.json({
    status: 200,
    code: 'COM-000',
    message: 'OK',
    data: mockGoal,
  });
});

export default goalRouter;
