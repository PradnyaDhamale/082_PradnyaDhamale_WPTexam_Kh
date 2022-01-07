const mysql = require("mysql");
const Promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo= {
    host:"localhost",
    user:"root",
    password:"cdac",
    database:"wpt",
};

 async function addMessage(user){ 
     const connection = mysql.createConnection(dbinfo);
   await connection.connectAsync;

    let sql = `insert into message (messages) values(?)`;
   await connection.queryAsync(sql,[user.messages]);

   console.log("messages added");
   await connection.endAsync;
}

const user ={
    messages:"All the best"
}

// addMessage(user);


async function selectMessage(){ 
    const connection = mysql.createConnection(dbinfo);
  await connection.connectAsync;

   let sql = `select * from message`;
   const list = await connection.queryAsync(sql,[]);

  console.log("messages added");
  await connection.endAsync;
  return list;
}

// selectMessage();

module.exports ={selectMessage, addMessage};