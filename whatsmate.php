#!/usr/bin/env node

<html>
    <head>
        <script>
		
		var http = require('http');

		// When you have your own Client ID and secret, put down their values here:
		var clientId = "FREE_TRIAL_ACCOUNT";
		var clientSecret = "PUBLIC_SECRET";

		// TODO: Specify your translation requirements here:
		var fromLang = "en";
		var toLang = "de";
		var text = "Let's have some fun!";

		var jsonPayload = JSON.stringify({
			fromLang: fromLang,
			toLang: toLang,
			text: text
		});

		var options = {
			hostname: "api.whatsmate.net",
			port: 80,
			path: "/v1/translation/translate",
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"X-WM-CLIENT-ID": clientId,
				"X-WM-CLIENT-SECRET": clientSecret,
				"Content-Length": Buffer.byteLength(jsonPayload)
			}
		};

		var request = new http.ClientRequest(options);
		request.end(jsonPayload);

		request.on('response', function (response) {
			console.log('Status code: ' + response.statusCode);
			response.setEncoding('utf8');
			response.on('data', function (chunk) {
				console.log('Translated text:');
				console.log(chunk);
			});
		});

		</script>
    </head>
</html>



