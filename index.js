const express = require("express");
const request = require("sync-request");

const app = express();

app.get("/getforecast", async (req, res, next) => {
    const response = await request("GET", "http://magicseaweed.com/api/{keygoeshere}/forecast/?spot_id=314");
    const data = await JSON.parse(response.body.toString('utf-8'));
    res.send(data);
})

app.listen(5000, () => console.log("Listening on port 5000"));