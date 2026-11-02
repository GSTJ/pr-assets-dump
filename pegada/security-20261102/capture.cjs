const { chromium } = require('/tmp/expo-shots/node_modules/playwright');
const { createRequire } = require('node:module');
const fs = require('node:fs');
const assert = require('node:assert/strict');
const req = createRequire(process.cwd() + '/package.json');
(async () => {
 const uri=req('fast-uri');
 const uriResults=['%6Aavascript:alert(1)','%u006Aavascript:alert(1)'].map(input=>{
  const parsed=uri.parse(input); assert.equal(parsed.error,'URI scheme is malformed.');
  assert.notEqual(uri.normalize(input),'javascript:alert(1)');
  return {input, output:uri.normalize(input), error:parsed.error};
 });
 const browser=await chromium.launch({headless:true});
 const page=await browser.newPage({viewport:{width:1200,height:800},deviceScaleFactor:1});
 await page.setContent('<html><body><h1>Pegada local security checks</h1><pre id="results"></pre></body></html>');
 await page.addScriptTag({path:req.resolve('dompurify/dist/purify.js')});
 const dom=await page.evaluate(()=>{
   const host=document.createElement('div');const root=host.attachShadow({mode:'open'});
   root.append(document.createTextNode('$'),document.createElement('object'),document.createTextNode('{alert(document.domain)}'));
   const before=root.textContent;
   DOMPurify.sanitize(host,{IN_PLACE:true,SAFE_FOR_TEMPLATES:true});root.normalize();
   const after=root.textContent;
   if(after.includes('${')) throw new Error('Shadow root template expression survived');
   return {version:DOMPurify.version,before,after};
 });
 const result={timestamp:new Date().toISOString(),base:'25aa1b9',dompurify:dom,fastUri:uriResults,undiciVersion:req('undici/package.json').version};
 fs.writeFileSync('/tmp/pegada-security-proof/results.json',JSON.stringify(result,null,2));
 await page.evaluate(r=>{
  document.body.style='background:#121923;color:#e9eef5;padding:35px;font:20px monospace';
  document.querySelector('h1').style='font:28px monospace;color:#80e4a4';
  document.querySelector('#results').textContent=JSON.stringify(r,null,2)+'\n\nPASS: shadow-root template removed\nPASS: encoded schemes rejected\nInstalled undici version shown above (not a crash regression test).';
 },result);
 await page.screenshot({path:'/tmp/pegada-security-proof/security-smoke.png',fullPage:true});
 await browser.close(); console.log(JSON.stringify(result,null,2));
})().catch(e=>{console.error(e);process.exit(1)});
