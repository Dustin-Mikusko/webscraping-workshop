const Nightmare = require('nightmare');
const nightmare = Nightmare({ show: false });

nightmare
  .goto('https://www.mlb.com/team')
  .click('a[href="https://www.mlb.com/team"]')
  .wait('.p-featured-content')
  .evaluate(() => {
    let teamBlocks = Array.from(document.querySelectorAll('.p-featured-content'));
    return teamBlocks.map(team => {
      let teamInfo = team.innerText.split('\n');
      return {
        teamName: teamInfo[1],
        ballPark: teamInfo[2],
        website: teamInfo[6]
      };
  })
  })
  .end()
  .then(result => console.log(result))
  .catch(err => console.log(err))
