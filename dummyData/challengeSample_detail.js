const dummyChallengeDetail = [
  {
    challengeId: 1,
    challengeTitle: '데일리 오운완',
    challengeContent: '매일 30분씩 운동하기',
    challengeGoal: 30,
    submission: '운동 일지 및 사진 제출',
    imageUrl: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fCVFQyU5QSVCNCVFQiU4RiU5OXxlbnwwfHwwfHx8MA%3D%3D',
    startDate: '2024-01-20T00:00:00',
    endDate: '2024-01-31T00:00:00',
    categoryName: '운동',
    chatRoomId: '101',
    challengeUserList: [
      {
        userId: 1,
        nickname: 'local',
        imageUrl: 'https://avatars.githubusercontent.com/u/64907633?v=4',
        role: 'LEADER',
        status: "(10/10)",
        dailyAchievement: true,
      }
    ]
  },
  {
    challengeId: 2,
    challengeTitle: '매일 30분 공부 인증',
    challengeContent: '주제별 공부 진행',
    challengeGoal: 30,
    submission: '학습 일지 및 정리물 제출',
    imageUrl: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8JUVBJUIzJUI1JUVCJUI2JTgwfGVufDB8fDB8fHww',
    startDate: '2024-02-01T00:00:00',
    endDate: '2024-02-14T00:00:00',
    categoryName: '공부',
    chatRoomId: '102',
    challengeUserList: [
      {
        userId: 1,
        nickname: 'local',
        imageUrl: 'https://avatars.githubusercontent.com/u/64907633?v=4',
        role: 'LEADER',
        status: "(10/10)",
        dailyAchievement: true,
      }
    ]
  },
  {
    challengeId: 3,
    challengeTitle: '한 달에 한 권씩',
    challengeContent: '매주 1권씩 책 읽기',
    challengeGoal: 450,
    submission: '독서 일지 및 인상 깊은 구절 공유',
    imageUrl: 'https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    startDate: '2024-03-01T00:00:00',
    endDate: '2024-03-31T00:00:00',
    categoryName: '독서',
    chatRoomId: '103',
    challengeUserList: [
      {
        userId: 1,
        nickname: 'local',
        imageUrl: 'https://avatars.githubusercontent.com/u/64907633?v=4',
        role: 'LEADER',
        status: "(10/10)",
        dailyAchievement: true,
      }
    ]
  },
  {
    challengeId: 4,
    challengeTitle: '일찍 일어나는 새가',
    challengeContent: '아침 6시에 기상하기',
    challengeGoal: 450,
    submission: '기상 시간 기록 및 기상 후 활동 기록',
    imageUrl: 'https://images.unsplash.com/photo-1552650272-b8a34e21bc4b?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    startDate: '2023-04-01T00:00:00',
    endDate: '2023-04-30T00:00:00',
    categoryName: '기상',
    chatRoomId: '104',
    challengeUserList: [
      {
        userId: 1,
        nickname: 'local',
        imageUrl: 'https://avatars.githubusercontent.com/u/64907633?v=4',
        role: 'LEADER',
        status: "(10/10)",
        dailyAchievement: true,
      }
    ]
  },
  {
    challengeId: 5,
    challengeTitle: '구름 피트니스',
    challengeContent: '유산소 운동 3회 이상',
    challengeGoal: 150,
    submission: '운동 일지 및 운동 종류 기록',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1663011511327-68549a941247?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    startDate: '2024-05-01T00:00:00',
    endDate: '2024-05-15T00:00:00',
    categoryName: '운동',
    chatRoomId: '105',
    challengeUserList: [
      {
        userId: 1,
        nickname: 'local',
        imageUrl: 'https://avatars.githubusercontent.com/u/64907633?v=4',
        role: 'LEADER',
        status: "(10/10)",
        dailyAchievement: true,
      }
    ]
  },
  {
    challengeId: 6,
    challengeTitle: '다함께 스터디',
    challengeContent: '프로그래밍 언어 학습하기',
    challengeGoal: 90,
    submission: '프로젝트 결과물 및 학습 일지 제출',
    imageUrl: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    startDate: '2024-06-01T00:00:00',
    endDate: '2024-06-30T00:00:00',
    categoryName: '공부',
    chatRoomId: '106',
    challengeUserList: [
      {
        userId: 1,
        nickname: 'local',
        imageUrl: 'https://avatars.githubusercontent.com/u/64907633?v=4',
        role: 'LEADER',
        status: "(10/10)",
        dailyAchievement: true,
      }
    ]
  },
  {
    challengeId: 7,
    challengeTitle: '비소설 도서 읽기',
    challengeContent: '비소설 도서 읽기',
    challengeGoal: 30,
    submission: '독서 일지 및 인상 깊은 구절 공유',
    imageUrl: 'https://images.unsplash.com/photo-1491309055486-24ae511c15c7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    startDate: '2024-07-01T00:00:00',
    endDate: '2024-07-31T00:00:00',
    categoryName: '독서',
    chatRoomId: '107',
    challengeUserList: [
      {
        userId: 1,
        nickname: 'local',
        imageUrl: 'https://avatars.githubusercontent.com/u/64907633?v=4',
        role: 'LEADER',
        status: "(10/10)",
        dailyAchievement: true,
      }
    ]
  },
  {
    challengeId: 8,
    challengeTitle: '아침에 물 한잔',
    challengeContent: '아침에 물 한 잔 마시기',
    challengeGoal: 720,
    submission: '물 섭취 기록 및 물의 중요성에 대한 공유',
    imageUrl: 'https://images.unsplash.com/photo-1549372691-289fcc650e4e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    startDate: '2024-08-01T00:00:00',
    endDate: '2024-08-31T00:00:00',
    categoryName: '기상',
    chatRoomId: '108',
    challengeUserList: [
      {
        userId: 1,
        nickname: 'local',
        imageUrl: 'https://avatars.githubusercontent.com/u/64907633?v=4',
        role: 'LEADER',
        status: "(10/10)",
        dailyAchievement: true,
      }
    ]
  },
  {
    challengeId: 9,
    challengeTitle: '스트레칭의 중요성',
    challengeContent: '스트레칭 루틴 실시',
    challengeGoal: 10,
    submission: '스트레칭 일지 및 몸의 변화 기록',
    imageUrl: 'https://images.unsplash.com/photo-1562771379-eafdca7a02f8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    startDate: '2024-09-01T00:00:00',
    endDate: '2024-09-15T00:00:00',
    categoryName: '운동',
    chatRoomId: '109',
    challengeUserList: [
      {
        userId: 1,
        nickname: 'local',
        imageUrl: 'https://avatars.githubusercontent.com/u/64907633?v=4',
        role: 'LEADER',
        status: "(10/10)",
        dailyAchievement: true,
      }
    ]
  },
  {
    challengeId: 10,
    challengeTitle: '외국어 학습',
    challengeContent: '외국어 학습하기',
    challengeGoal: 50,
    submission: '언어 학습 일지 및 간단한 대화 기록',
    imageUrl: 'https://images.unsplash.com/photo-1460518451285-97b6aa326961?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    startDate: '2024-10-01T00:00:00',
    endDate: '2024-10-31T00:00:00',
    categoryName: '공부',
    chatRoomId: '110',
    challengeUserList: [
      {
        userId: 1,
        nickname: 'local',
        imageUrl: 'https://avatars.githubusercontent.com/u/64907633?v=4',
        role: 'LEADER',
        status: "(10/10)",
        dailyAchievement: true,
      }
    ]
  }
];

module.exports = dummyChallengeDetail;
