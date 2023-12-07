const app = require("express")();

const html = require("./data");

app.use(
  "/",
  (req, res, next) => {
    req.headers["test-header"] = 1234;
    next();
  },
  (req, res, next) => {
    console.log(`Rquest has test header: ${!!req.headers["test-header"]}`);
    next();
  }
);

app.get("/", (req, res, next) => {
  req.set("Content-Type", "text/html");
  res.send(Buffer.from(html));

  next();
});

app.listen(8080, function () {
  console.log("Esta corriendo en el 8080");
});
