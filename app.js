const express = require('express')
const cors = require('cors')
const app = express();
require('dotenv').config();
const port = process.env.REACT_APP_PORT;
app.use(express.json());
// app.use(cors({ credentials: true, origin: `${process.env.REACT_APP_SERVER_URL}` }));

const corsOption = {
  origin: [`${process.env.REACT_APP_LOCAL_URL}`],
  credentials: true,
  methods: ["GET", "DELETE", "PATCH", "PUT"],
}
app.use(cors(corsOption));

const dummyFeed = require('./dummyData/post_sample.js').data
const dummyHeatmap = require('./dummyData/heatmap_sample.js').data
const dummyChallengeDetail = require('./dummyData/challengeSample_detail.js')
const dummyChallengeAll = require('./dummyData/challengeSample_all.js')
let dummyGoal = require('./dummyData/dummyGoal.js').data
let dummyUpdateGoal = require('./dummyData/dummyUserGoal.js').data

app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
  console.log(`${process.env.REACT_APP_LOCAL_URL}의 요청을 허락합니다.`);

});

/*
 * Feed
 */

app.get('/feed', (req, res) => {
  res.send({
    status: 200,
    code: "common-000",
    message: "OK",
    data: dummyFeed
  })
})

app.get('/feed/:id', (req, res) => {
  const id = req.params.id
  const response = {
    status: 200,
    code: 'common-000',
    message: "OK",
    data: dummyFeed.find(x => parseInt(x.post_id) === parseInt(id))
  }
  res.send(response)
})

/*
 * User
 */

app.get('/profile', (req, res) => {

  const response = {
    user: {
      image_url: "https://firebasestorage.googleapis.com/v0/b/harulog-img-storage.appspot.com/o/feed%2F20231121_091209.jpg?alt=media",
      name: "이강혁",
      posts: 6,
      challenges: 4,
      followers: 1,
      followings: 1,
    },
    heatmap: dummyHeatmap,
    feed: dummyFeed,
    challenge: dummyChallengeDetail.data
  }

  res.send(response)

})

/*
 * Grow
 */

app.get('/grow', (req, res) => {
  res.send(dummyHeatmap)
})

app.get('/grow/daily', (req, res) => {
  console.log('dummyGoal', dummyGoal);
  res.send(dummyGoal)
})

app.get('/user-goal', (req, res) => {
  console.log('dummyUpdateGoal', dummyUpdateGoal);
  res.send(dummyUpdateGoal)
})

app.put('/user-goal/update', (req, res) => {
  const data = req.body.updateGoalsList

  const tempDummyGoal = [
    {
      "categoryName": '기상',
      "userGoal": data.find(x => x.categoryName === '기상').goal,
      "archievement": 22,
      "updatedAt": '2024-01-01'
    },
    {
      "categoryName": '운동',
      "userGoal": data.find(x => x.categoryName === '운동').goal,
      "archievement": 80,
      "updatedAt": '2024-01-01'
    },
    {
      "categoryName": '공부',
      "userGoal": data.find(x => x.categoryName === '공부').goal,
      "archievement": 50,
      "updatedAt": '2024-01-01'
    },
    {
      "categoryName": '독서',
      "userGoal": data.find(x => x.categoryName === '독서').goal,
      "archievement": 22,
      "updatedAt": '2024-01-01'
    },
  ]

  dummyGoal = dummyGoal.map((x, idx) => {
    if (x.userGoal !== tempDummyGoal[idx].userGoal) {
      return {
        ...x,
        updatedAt: new Date()
      }
    } else {
      return x
    }
  })

  const tempDummyUpdateGoal = [{
    "categoryName": "운동",
    "goal": data.find(x => x.categoryName === '운동').goal
    , "updatedAt": '2024-01-01'

  },
  {
    "categoryName": "기상",
    "goal": data.find(x => x.categoryName === '기상').goal
    , "updatedAt": '2024-01-01'

  },
  {
    "categoryName": "공부",
    "goal": data.find(x => x.categoryName === '공부').goal
    , "updatedAt": '2024-01-01'

  },
  {
    "categoryName": "독서",
    "goal": data.find(x => x.categoryName === '독서').goal
    , "updatedAt": '2024-01-01'
  }]

  dummyUpdateGoal = dummyUpdateGoal.map((x, idx) => {
    if (x.goal !== tempDummyUpdateGoal[idx].goal) {
      return {
        ...x,
        updatedAt: new Date()
      }
    } else {
      return x
    }
  })

  res.send({
    status: 200,
    code: "COM-000",
    message: "OK",
    activityTimeVer: dummyGoal,
    data: dummyUpdateGoal
  })
})
/*
 * Challenge
 */

app.get('/main/challenge', (req, res) => {
  const mainChallenge = []
  const chs = [...dummyChallengeDetail.data]
  while (mainChallenge.length < 4) {
    mainChallenge.push(chs.splice(Math.floor(Math.random() * chs.length), 1)[0])
  }

  mainChallenge.map((it) => {
    return {
      'challengeId': it.challenge_id,
      challengeTitle: it.challenge_title,
      categoryName: it.category_name,
      challengeUserCount: it.participants,
      imageUrl: it.challenge_image
    }
  })
  res.send(mainChallenge)
})


app.get('/challenge', (req, res) => {
  const response = {
    status: 200,
    code: "COM-000",
    message: "OK",
    data: dummyChallengeAll
  }
  res.send(response)
})

app.get('/challenge/:id', (req, res) => {
  const challengeId = req.params.id
  const response = {
    status: 200,
    code: "COM-000",
    message: "OK",
    data: dummyChallengeDetail.filter(x => x.challengeId === parseInt(challengeId))[0]
  }
  res.send(response)
})
