const express = require('express');
require('isomorphic-fetch');
const app = express();
const port = 3000;

const URL = 'https://livesim.dashif.org/livesim/segtimeline_1/testpic_2s/Manifest.mpd';
const uidList = [];

const allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  next();
};
app.use(allowCrossDomain);

app.use(express.static('public'));

app.get('/manifest.mpd', async (req, res) => {
  const { uid } = req.query;

  if (uidList[uid]) {
    uidList[uid] = 0;
    console.log('delete', uidList);
    const data = await fetch(URL);
    let text = await data.text();

    text = text.replace('minimumUpdatePeriod="PT0S"', '')
      .replace('<Period id="p0" start="PT0S">', '<Period id="p0" start="PT0S" duration="PT1M">')
      .replace('type="dynamic"', 'type="static"')
    ;

    res.set('Content-Type', 'application/dash+xml');
    res.send(text);
  } else {
    uidList[uid] = 1;
    console.log('add', uidList);
    const data = await fetch(URL);
    const text = await data.text();
    res.set('Content-Type', 'application/dash+xml');
    res.send(text);
  }

});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});

