const CryptoJS = require('crypto-js');
const axios = require('axios');

const PRIV_KEY = '5ae69b860f1aa8a642731192295c2be3f3faaf13';
const PUBLIC_KEY = 'e121ce2b457a9b576dc0302550a94c44';

module.exports = async function() {

  let ts = new Date().getTime();
  let hash = CryptoJS.MD5(ts + PRIV_KEY + PUBLIC_KEY).toString(CryptoJS.enc.Hex);

  let url = 'https://gateway.marvel.com:443/v1/public/comics?title=Iron%20Man&characters=1009368&limit=20';
  // let requestUrl = 'http://gateway.marvel.com/v1/public/comics?ts=' + ts + '&apikey=' + PUBLIC_KEY + '&hash=' + hash;

  var characterId = '1009368'; // Iron Man

  const requestOptions = {
    url: url,
    method: 'GET',
    params: {
      "apikey": PUBLIC_KEY,
      "ts": ts,
      "hash": hash, 
      characters: characterId
    },
    headers: {
      'Accept': '*/*',
      'If-None-Match': 'f0fbae65eb2f8f28bdeea0a29be8749a4e67acb3'
    }
  }

  try {
    const response = await axios(requestOptions);
    // console.log(response.data.data.results);
    return response.data;
  } catch (err) {
    console.log(err);
  }
}
