const express = require("express");

const app = express();
app.set("view engine", "ejs");
app.set("views", __dirname);
app.use(express.static("public"));

const getSeason = () => {
  const month = new Date().getMonth() + 1;
  if (month >= 3 && month <= 5) return "spring";
  if (month >= 6 && month <= 8) return "summer";
  if (month >= 9 && month <= 11) return "autumn";
  return "winter";
};

app.get("/motd/:mode/:lang", (req, res) => {
  res.render("motd", {
    mode: req.params.mode,
    lang: req.params.lang,
    name: req.query.name || "",
    ip: req.query.ip || "",
    port: req.query.port || "",
    season: getSeason(),
    randomImage: Math.floor(Math.random() * 21) + 1,
  });
});

const PORT = 3040;
const HOST = "0.0.0.0";
app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});
