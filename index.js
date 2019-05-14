const fetch = require("node-fetch");
require("dotenv").config();

console.log(process.env.EMAIL);
const email = process.env.EMAIL;
const password = process.env.PASSWORD;
const latitude = process.env.LAT;
const longitude = process.env.LONG;

const main = async () => {
  const TGTG_URI = "https://apptoogoodtogo.com/index.php/api_tgtg";
 
  const response = await fetch(
    `${TGTG_URI}/login?email=${email}&password=${password}`,
    {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "none",
        "accept-language": "nl-NL;q=1.0, nl-NL;q=0.9"
      }
    }
  );
  const login = await response.json();
 
  const access_token = login.access_token;
  const user_id = login.user_id;
  const user_token = login.user_token;

  const responseList = await fetch(
    `${TGTG_URI}/list_all_business_map_v5_gz?access_token=${access_token}&user_id=${user_id}&user_token=${user_token}&latitude=${latitude}&longitude=${longitude}`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        "content-type": "none",
        "accept-language": "nl-NL;q=1.0, nl-NL;q=0.9"
      }
    }
  );
  const allBusinesses = await responseList.json();

  // A bit hacky way to find local businesses
  const local = allBusinesses.info.filter(i => Math.abs(parseFloat(i.latitude)-latitude) < 0.01 && Math.abs(parseFloat(i.longitude) - longitude) < 0.01);

  const business_id = 123456
  // TODO this gives a message that I should update the app, so I think this is an old version of the API endpoint
  const responseList2 = await fetch(
    `${TGTG_URI}/get_businessv5?user_id=${user_id}&localtime=utc&created_by=${business_id}`,
    {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "none",
        "accept-language": "nl-NL;q=1.0, nl-NL;q=0.9"
      }
    }
  );
  const business = await responseList2.json();
};

main();
