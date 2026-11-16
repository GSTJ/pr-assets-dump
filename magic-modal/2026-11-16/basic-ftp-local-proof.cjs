const {parseList}=require('/tmp/gstj-magic-modal-20261116/node_modules/basic-ftp/dist/parseList');
const {Client}=require('/tmp/gstj-magic-modal-20261116/node_modules/basic-ftp');
const net=require('node:net');const assert=require('node:assert/strict');
console.log('basic-ftp '+require('/tmp/gstj-magic-modal-20261116/node_modules/basic-ftp/package.json').version);
assert.equal(parseList('__proto__=x;type=file;size=10; evil.txt')[0].name,'evil.txt');
console.log('PASS malicious MLSD __proto__ fact is ignored');
const server=net.createServer(socket=>{socket.write('220 ready\r\n');socket.on('data',d=>socket.write(d.toString().startsWith('USER')?'331 password\r\n':'200 ok\r\n'));});
server.listen(0,'127.0.0.1',async()=>{const client=new Client(1000);try{await assert.rejects(client.access({host:'127.0.0.1',port:server.address().port,user:'test',password:'x\r\nDELE file'}));console.log('PASS CRLF password rejects safely, process survives');}finally{client.close();server.close();}});
