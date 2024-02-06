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

const dummyFeed = require('./post_sample.js')
const dummyHeatmap = require('./heatmap_sample.js')
const dummyChallenge = require('./challenge_sample.js')

app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
  console.log(`${process.env.REACT_APP_LOCAL_URL}의 요청을 허락합니다.`);

});


app.get('/feed', (req, res) => {
  res.send(dummyFeed)
})

app.get('/feed/:id', (req, res) => {
  const id = req.params.id
  res.send(dummyFeed.find(x => parseInt(x.id) === parseInt(id)))
})

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
    heatmap: dummyHeatmap.data,
    feed: dummyFeed,
    challenge: dummyChallenge.data
  }

  res.send(response)

})