const express = require('express');
const app = express();

app.get('/age-verification', (req, res) => {
  res.send(`
    <html>
      <body>
        <h1>Are you over 18?</h1>
        <form method="POST" action="/age-verification">
          <button type="submit" name="choice" value="yes">Yes</button>
          <button type="submit" name="choice" value="no">No</button>
        </form>
      </body>
    </html>
  `);
});

app.post('/age-verification', (req, res) => {
  const { choice } = req.body;
  if (choice === 'yes') {
    res.redirect('www.google.com');
  } else {
    res.redirect('www.mehukatti.fi');
  }
});
app.listen(3000, () => {
  console.log('Age verification app listening on port 3000!');
});
