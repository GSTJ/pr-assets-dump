const { chromium } = require('/tmp/pw-trends/node_modules/playwright');
(async()=>{
 const browser=await chromium.launch({headless:true});
 const context=await browser.newContext({viewport:{width:430,height:932},recordVideo:{dir:'/tmp/magic-toast-forge-fix/runtime/video',size:{width:430,height:932}}});
 const page=await context.newPage();const errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.goto('http://127.0.0.1:18943');
 await page.getByText('Press me to fire an alert!',{exact:true}).waitFor();
 await page.waitForTimeout(4500);
 for (const [button,message,name] of [
 ['Press me to fire an alert!','Oops! Something went wrong 😬','alert'],
 ['Press me to fire a success toast!','Hurray! It works 🎉','success'],
 ['Press me to fire a custom toast!','A toast of my own 🎨','custom']]) {
  await page.getByText(button,{exact:true}).click();
  await page.getByText(message,{exact:true}).waitFor({state:'visible'});
  await page.waitForTimeout(450);
  await page.screenshot({path:`/tmp/magic-toast-forge-fix/runtime/${name}.png`});
  await page.getByText(message,{exact:true}).waitFor({state:'hidden',timeout:8000});
 }
 await page.getByText('Press me to hide a toast early!',{exact:true}).click();
 await page.getByText('Hiding this early…',{exact:true}).waitFor({state:'visible'});
 await page.getByText('Hiding this early…',{exact:true}).waitFor({state:'hidden',timeout:3000});
 await page.screenshot({path:'/tmp/magic-toast-forge-fix/runtime/dismissed.png'});
 console.log(JSON.stringify({errors,result:await page.getByText(/last dismissal:/).innerText()}));
 if(errors.length) throw Error(errors.join('\n'));
 await context.close();await browser.close();
})();
