/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
var storage = {};

var encode = function(longUrl) {
   let possibleChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   let ending = 'http://tinyurl.com/';

   for(var i = 0; i < 6; i++) {
     let char = Math.floor(Math.random() * possibleChars.length);
     ending += char;
   }

    storage[ending] = longUrl;
    return ending;
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function(shortUrl) {
    return storage[shortUrl];
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */
