const express = require("express");
const fs = require("fs").promises;

const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));

// Function for searching by ID server
const findServerById = (jsonData, idToFind) => jsonData.find((server) => server.ID == idToFind);

// Function for reading a json file info servers
const readJsonData = async () => {
  try {
    const data = await fs.readFile("ServersInfo.json", "utf8");
    return JSON.parse(data);
  } catch (err) {
    console.error("File reading error:", err);
    throw err;
  }
};

// The function for determining the season
const getSeason = () => {
  const month = new Date().getMonth() + 1;
  if (month >= 3 && month <= 5) return 'spring';
  else if (month >= 6 && month <= 8) return 'summer';
  else if (month >= 9 && month <= 11) return 'autumn';
  else return 'winter';
};

// Route processing moth
app.get("/motd/:server/:language", async (req, res) => {
  try {
    const jsonData = await readJsonData();
    const season = getSeason();

    const serverInfo = findServerById(jsonData[2].data, req.params.server) || {
      "ID": "0",
      "NAME": "Endurance Server",
      "IP": "Not info",
      "PORT": "27015",
      "WelcomeRu": "Добро пожаловать на Endurance Server!",
      "WelcomeEn": "Welcome to Endurance Server!"
    };

    const renderParams = {
      server: serverInfo,
      language: req.params.language,
      season,
      randomImage: Math.floor(Math.random() * 21) + 1, // random picture from 1 to 21
    };

    const template = req.params.language === "en" ? "motdEN" : "motdRU";
    res.render(template, renderParams);
  } catch (err) {
    console.error("Error processing the route:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

const PORT = 3040;
const HOST = "0.0.0.0";
app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});
