
const alexaCookie = require('alexa-cookie2/alexa-cookie.js');
const fs = require('fs');

if (!process.env.IP) throw new Error('process.env.IP is not set.')

// https://github.com/Apollon77/alexa-cookie/blob/master/example/example.js
const config = {
    logger: console.log,
    proxyOwnIp: process.env.IP, // required if proxy enabled: provide the own IP with which you later access the proxy.
                               // Providing/Using a hostname here can lead to issues!
                               // Needed to set up all rewriting and proxy stuff internally

    // The following options are optional. Try without them first and just use really needed ones!!

    amazonPage: 'amazon.com',  // optional: possible to use with different countries, default is 'amazon.de'
    acceptLanguage: 'ja-JP',   // optional: webpage language, should match to amazon-Page, default is 'de-DE'
    proxyOnly: true,           // optional: should only the proxy method be used? When no email/password are provided this will set to true automatically, default: false
    setupProxy: true,          // optional: should the library setup a proxy to get cookie when automatic way did not worked? Default false!
    proxyPort: 3456,           // optional: use this port for the proxy, default is 0 means random port is selected
    proxyListenBind: '0.0.0.0',// optional: set this to bind the proxy to a special IP, default is '0.0.0.0'
    proxyLogLevel: 'info',     // optional: Loglevel of Proxy, default 'warn'
    baseAmazonPage: 'amazon.com', // optional: Change the Proxy Amazon Page - all "western countries" directly use amazon.com including australia! Change to amazon.co.jp for Japan
    amazonPageProxyLanguage: 'ja_JP', // optional: language to be used for the Amazon Sign-in page the proxy calls. default is "de_DE")
    deviceAppName: process.env.APPNAME, // optional: name of the device app name which will be registered with Amazon, leave empty to use a default one
};

alexaCookie.generateAlexaCookie(config, (err, result) => {
    fs.writeFileSync('alexa-cookie.json', JSON.stringify(result, null, 2) + "\n", 'utf-8')
    if (result && result.csrf) {
        alexaCookie.stopProxyServer();
    }
});
