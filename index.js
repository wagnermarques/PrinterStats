console.log("==[index.js]=>");
var http = require('http');
let urlStatDevice_189_M811dn_SAME='http://192.168.0.189/cgi-bin/dynamic/printer/config/reports/devicestatistics.html'
var reqOptions = {
    host:       "192.168.0.2",
    port:       "3128",
    path:        urlStatDevice_189_M811dn_SAME,
    headers:    {
        'Proxy-Authorization':  'Basic ' + new Buffer('wagner:nicolas1*').toString('base64')
    }
};

function reqGoogleCallback_ConsoleLogResponse(responseData){
    console.log(responseData);
}

http.get(reqOptions, function(response) {
    var body = '';
    response.on('data', function(data) {
        body += data;
    });
    response.on('end', function() {
        console.log(body);
        //var parsed = JSON.parse(body);
        //console.log(parsed);
        //reqCallBackFn(parsed);
        //reqCallBackFn({
        //    email: parsed.email,
        //    password: parsed.pass
        //});
    });
});

