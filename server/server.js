//whatever is in the environment variable PORT || 8080
//run PORT=4444 node index.js, Node will use process.env.PORT which equals to 4444

const port = process.env.PORT || 8080;
const app = require("../server/index");
const db = require("./db/db.js");

//sync creates new tables
//no async and await
// db.sync().then(() => {
//   app.listen(PORT, () =>
//     console.log(`
//         Listening on port ${PORT}
//         http://localhost:${PORT}/
//     `)
//   );
// });

const init = async () => {
  try {
    //DROP TABLE IF EXISTS
    await db.sync({force: true})
    // start listening (and create a 'server' object representing our server)
    app.listen(port, () => console.log(`
    Listening on port ${port}
    http://localhost:${port}/
`))
  } catch (ex) {
    console.log(ex)
  }
}

init()