const express = require('express');

const app = express();

app.use(express.static('./dist/group2-viz-teams-tracker-front'));
app.get('/*', function(req, res) {
    res.sendFile('index.html', {root: 'dist/group2-viz-teams-tracker-front/'}
  );
});
app.listen(process.env.PORT || 8080);
