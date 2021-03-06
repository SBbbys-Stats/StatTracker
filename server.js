const api = require('call-of-duty-api')({ platform: 'uno', debug: 0, useCORS: 0, ratelimit: { maxRPS: 1 } });
const config = require('./config.json');
const fs = require('fs');

let players = ["rifreef#5834629", "tump13b#2037814", "soyboy#3744098", "Therz#6653039", "Dewey#1264161", "rikrazu#8772551", "FunkySqwrl#3676703", "ProphetObadiah#2286197", "Akhillez101#7770014", "Dachoudono#1747236", "uncutking420#4781128", "chllmstr420#8668025"];

api.login(config.email, config.password).then(start).catch(console.log);

async function start() {
    let results = [];
    for await(let player of players) {
        console.log(player);
        var response = await api.MWBattleData(player);
        results.push({ player, response});
    }
    await fs.writeFileSync("wzstats.json", JSON.stringify(results, null, 2));
    await console.log("Done");
}