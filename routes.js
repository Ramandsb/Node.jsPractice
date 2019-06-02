const fs = require('fs')


const requestHandler = (req, res) => {


    let url = req.url
    let method = req.method

    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>')
        res.write('<head><title>Node js App</title></head>')
        res.write('<body><p>hello from node js response /</p></body>')
        res.write('</html>')
        return res.end()
    }
    if (url === '/test') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>')
        res.write('<head><title>Node js App</title></head>')
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"></input><button type="submit">Send</button</form></body>')
        res.write('</html>')
        return res.end()
    }
    if (url === '/message' && method === 'POST') {
        const body = []
        req.on('data', (data) => {
            body.push(data)
        })
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString()
            fs.writeFileSync('message.txt', parsedBody.split('=')[1])
            res.statusCode = 302;
            res.setHeader('Location', '/')
            res.end();
        })
    }


}

module.exports = {
    handler: requestHandler,
    someText: 'some text'
};