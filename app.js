const express = require('express')
const cors = require('cors')
const app = express();
require('dotenv').config();
const port = process.env.REACT_APP_PORT;
app.use(express.json());
app.use(cors({ credentials: true, origin: `${process.env.REACT_APP_SERVER_URL}` }));

const corsOption = {
  origin: [`${process.env.REACT_APP_LOCAL_URL}`],
  credentials: true,
  methods: ["GET", "DELETE", "PATCH"],
}
app.use(cors(corsOption));

const dummyFeed = require('./dummyData/post_sample.js')
const dummyHeatmap = require('./dummyData/heatmap_sample.js').data
const dummyChallengeDetail = require('./dummyData/challengeSample_detail.js')
const dummyChallengeAll = require('./dummyData/challengeSample_all.js')
const dummyGoal = require('./dummyData/dummyGoal.js').data
const dummyUpdateGoal = require('./dummyData/dummyUserGoal.js').data

app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
  console.log(`${process.env.REACT_APP_LOCAL_URL}의 요청을 허락합니다.`);

});

/*
 * Feed
 */

app.get('/feed', (req, res) => {
  res.send(dummyFeed)
})

app.get('/feed/:id', (req, res) => {
  const id = req.params.id
  res.send(dummyFeed.find(x => parseInt(x.id) === parseInt(id)))
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
    feed: dummyFeed.data,
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
  res.send(dummyGoal)
})

app.get('/user-goal', (req, res) => {
  res.send(dummyUpdateGoal)
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

app.get('/challenge:id', (req, res) => {
  const challengeId = req.params.id
  const response = {
    status: 200,
    code: "COM-000",
    message: "OK",
    data: dummyChallengeDetail.find(x => x.challengeId === challengeId)
  }
  res.send(response)
})
