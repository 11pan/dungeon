const http = require('http')
const url  = require('url')
const port = 3000

const requestHandler = (request, response) => {
	q = url.parse(request.url,true).query
	data = q['data']
	if (data != undefined)
		console.log(data)
	response.end(`Your data was ${data}!`)
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
	if (err) {
		return console.log('something bad happened', err)
	}

	console.log(`server is listening on ${port}`)
})