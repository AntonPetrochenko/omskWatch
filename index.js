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
				
			pool.query("SELECT * FROM Точка").then(
				rows => {
					reply = {
						"type": "FeatureCollection",
						"features": []
					}
					for (i = 0; i < rows.length; i++) {
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
			)
		}
		
		message.comments[0].category
		if (message[0] == "InfoRequest") {
				
			pool.query("SELECT * FROM ИНФО WHERE `ID_тчк` = " + message[1]).then(
				rows => {
					reply = {
						"type": "SidebarInfo",
						"address": rows[0]["Адрес"],
						"comments": []
					}
					for (i = 0; i < rows.length; i++) {
						reply.comments.push({
						"category": rows[i]["Категория"],
						"name": rows[i]["ФИО"],
						"content": rows[i]["Содержание"]
						})
					}
					ws.send(JSON.stringify(reply))
					
				}
			)
		}
		
		// ID_тчк
		// ID_Категории
		// Содержание
		// ID_автора = 1
		
		
		/*  [
				"PostComment",	
				[
					ID_Точки,
					ID_Категории,
					Содержание,
					1 (id автора, пока всегда такой)
				]
			]
		*/
		
		if (message[0] == "SendComment") {
			pool.query(`CALL ( ${message[1][0]}, ${message[1][1]}, ${message{1}{2}}, ${message{1}{3}})`)
		}
		
	});
	
	

});