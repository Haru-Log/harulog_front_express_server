import { Router } from 'express';
import mockChallengeAll from '../mockData/mockChallengeAll';
import mockChallengeDetail from '../mockData/mockChallengeDetail';

const challengeRouter = Router();

challengeRouter.get('/', (req, res) => {
  res.json({
    status: 200,
    code: 'COM-000',
    message: 'OK',
    data: mockChallengeAll,
  });
});

challengeRouter.post('/register', (req, res) => {
  res.json({
    status: 200,
    code: 'COM-000',
    message: 'OK',
    data: {
      challengeId: 1,
      challengeTitle: '30일 챌린지',
      challengeContent: '매일 30분씩 운동하기',
      challengeGoal: 30,
      submission: '운동 후 사진 제출',
      imageUrl: null,
      startDate: '2024-02-01T00:00:00',
      endDate: '2024-03-02T00:00:00',
      categoryName: '운동',
      chatRoomId: '68c19a9a-d3f1-4105-9ba1-71e01b0f5f5d',
      challengeUserList: [
        {
          userId: 1,
          nickname: 'local',
          imageUrl: null,
          role: 'LEADER',
          success: false,
        },
      ],
      challengeLeader: true,
      participate: true,
    },
  });
});

challengeRouter.post('/join', (req, res) => {
  res.json({
    status: 200,
    code: 'COM-000',
    message: 'OK',
    data: {
      challengeId: '1',
      challengeTitle: 'test title',
      challengeContent: 'test content',
      challengeGoal: '1',
      submission: 'test submission',
      imageUrl: null,
      startDate: '2024-02-01T00:00:00',
      endDate: '2024-02-01T00:00:00',
      categoryName: 'test',
      challengeUserList: [
        {
          userId: 'testuser1',
          nickname: 'testuser1',
          imageUrl: null,
          role: 0,
          success: false,
        },
      ],
      challengeLeader: false,
      participate: true,
    },
  });
});

challengeRouter.get('/:id', (req, res) => {
  const selectedPostIdx = mockChallengeDetail.findIndex(
    (challenge) => challenge.challengeId === Number(req.params.id)
  );

  console.log(req.params);

  res.json({
    status: 200,
    code: 'COM-000',
    message: 'OK',
    data: mockChallengeDetail[selectedPostIdx],
  });
});

export default challengeRouter;
