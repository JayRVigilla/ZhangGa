/** Server for microblog. */

const app = require("./app");

app.listen(process.env.HOSTED_DATABASE_URL || 5000, function () {
  console.log("Server is listening on port 5000");
});
