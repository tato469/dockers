const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3333
const host = '0.0.0.0'
const morgan = require('morgan')

// *** app middleware *** //
if (process.env.NODE_ENV !== 'test') {
	app.use(morgan('dev'))
}

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (_request, response) => { response.json({ info: 'Postgis API' }) })

app.listen(port, host, () => { console.log(`App running on port ${port}.`) })
