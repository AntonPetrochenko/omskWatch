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

async function asyncRequest(sql) {
	
	let conn;
	try {
		conn = await pool.getConnection()
		const rows = await conn.query(sql)
		console.log('SQL request ' + sql)
	
}

asyncFunction()