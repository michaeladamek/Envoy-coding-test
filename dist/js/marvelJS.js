const CryptoJS = require('crypto-js');

const PRIV_KEY = '0fa56a9548b67cd96e06097e77e7c6f7a5f81647';
const PUBLIC_KEY = 'Cbb530c155c9e17b6ee5191f960ac608';

function getMarvelResponse() {

  let ts = new Date().getTime();
  let hash = CryptoJS.MD5(ts + PRIV_KEY + PUBLIC_KEY);

  let requestUrl = 'http://gateway.marvel.com/v1/public/comics?ts=' + ts + '&apikey=' + PUBLIC_KEY + '&hash=' + hash;

  console.log('requestUrl' + requestUrl)

  const xhr = new XMLHttpRequest();

  xhr.open('GET', requestUrl);
  xhr.responseType = 'text';
  xhr.send();

  xhr.onload = function() {
    console.log(xhr.response)
  }

}

getMarvelResponse();