const http = require('node:http');
const {spawn} = require('node:child_process');
const fs = require('node:fs');
const cwd = process.cwd();
const page = `<!doctype html><html><head><title>Pegada dependency security probe</title><style>body{background:#10141c;color:#e6edf3;font:17px system-ui;margin:32px;max-width:1000px}h1{font-size:26px}button{padding:12px;font:inherit}pre{white-space:pre-wrap;background:#171e29;padding:20px;line-height:1.65;font:16px monospace}p{color:#aeb9c8}</style></head><body><h1>Pegada dependency security probe</h1><p>Installed built consumers: Expo code-signing certificates and AWS XML builder.<br>node-forge 1.4.3 / fast-xml-parser 5.12.0</p><button onclick="run()">Run installed consumers and attack regressions</button><pre id="out">Ready</pre><p>Local Node execution with disposable keys and XML fixtures. No native app, device, deployment, or production exploitability claim. HTTP/TLS/Ed25519 and stopNodes cases directly exercise the libraries; the consumer control signs a manifest through Expo and parses S3-shaped XML through AWS.</p><script>async function run(){out.textContent='Running real Node subprocess...\\n';let r=await fetch('/run',{method:'POST'});let reader=r.body.getReader();let decoder=new TextDecoder();out.textContent='';while(true){let {value,done}=await reader.read();if(done)break;out.textContent+=decoder.decode(value);}}</script></body></html>`;
http.createServer((req,res)=>{
 if(req.url==='/run' && req.method==='POST'){
  res.writeHead(200,{'content-type':'text/plain'});
  res.write('node scripts/test-forge-xml-security.cjs\n\n');
  const p=spawn(process.execPath,['scripts/test-forge-xml-security.cjs'],{cwd});
  let log='';for(const s of [p.stdout,p.stderr]) s.on('data',d=>{log+=d;res.write(d)});
  p.on('close',code=>{const ending='\nProcess exit: '+code+'\n';fs.writeFileSync('/tmp/pegada-security-proof/live-run.log',log+ending);res.end(ending)});
 }else{res.writeHead(200,{'content-type':'text/html'});res.end(page)}
}).listen(45831,'127.0.0.1');
