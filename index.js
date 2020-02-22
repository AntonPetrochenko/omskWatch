var StaticServer = require('static-server');
var server = new StaticServer({
  rootPath: 'static',            // required, the root of the server file tree
  port: 8888,               // required, the port to listen
  name: 'my-http-server',   // optional, will set "X-Powered-by" HTTP header
  cors: '*',                // optional, defaults to undefined
  followSymlink: true,      // optional, defaults to a 404 error
  templates: {
    index: 'foo.html',      // optional, defaults to 'index.html'
    notFound: '404.html'    // optional, defaults to undefined
  }
});

server.start(function () {
  console.log('Server listening to', server.port);
});

const mariadb = require('mariadb');
const pool = mariadb.createPool({
     host: '128.199.183.146', 
     user:'root', 
     password: '111',
     connectionLimit: 5,
	 database: 'OMSKWatch'
});

async function asyncFunction() {
  let conn;
  try {
	conn = await pool.getConnection();
	const rows = await conn.query("SELECT * FROM Коммент;");
	console.log(rows); //[ {val: 1}, meta: ... ]
	console.log('Request completed')
	//const res = await conn.query("INSERT INTO myTable value (?, ?)", [1, "mariadb"]);
	//console.log(res); // { affectedRows: 1, insertId: 1, warningStatus: 0 }

  } catch (err) {
	throw err;
  } finally {
	if (conn) return conn.end();
  }
}

async function doRequest(sql) {
	
	let conn;
	var rows;
	try {
		conn = await pool.getConnection()
		rows = await conn.query(sql)
	} catch (err) {
		throw err;
	} finally {
		if (conn) return conn.end();
	}
	return await rows
}

const WebSocket = require('ws');
 
const wss = new WebSocket.Server({ port: 12345 });

wss.on('connection', function connection(ws) {
	
	ws.on('message', async function incoming(message) {
		message = JSON.parse(message)
		if (message[0] == "PointRequest") {
				
		pool.getConnection().then(conn => {conn.query("SELECT * FROM Точка").then(
			rows => {
				
				reply = {
					"type": "FeatureCollection",
					"features": []
				}
				for (i = 0; i < rows.length - 1; i++) {
					reply.features.push({
					"type": "Feature",
					"id": rows[i]["ID_тчк"],
					"geometry": {
						"type": "Point",
						"coordinates": [rows[i].x, rows[i].y] 
					}
					})
				}
				ws.send(JSON.stringify(reply))
				
			}
		)})
				
				
				
				
				
		}
	});
	
	

});