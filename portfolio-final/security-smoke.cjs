const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const {Project} = require('/var/folders/_k/bw14_lm517v7c65ggwq0b7gr0000gn/T/portfolio-followup-udsazpix/main/node_modules/.pnpm/ts-morph@28.0.0/node_modules/ts-morph');
const sharp = require('/var/folders/_k/bw14_lm517v7c65ggwq0b7gr0000gn/T/portfolio-followup-udsazpix/main/node_modules/.pnpm/sharp@0.35.5_@types+node@26.6.5/node_modules/sharp');
(async () => {
const dir=fs.mkdtempSync(path.join(os.tmpdir(),'portfolio-glob-'));
try {
fs.writeFileSync(path.join(dir,'included.ts'),'export const value = 1;');
fs.writeFileSync(path.join(dir,'excluded.ts'),'export const value = 2;');
const project = new Project();
project.addSourceFilesAtPaths([path.join(dir,'*.ts'), '!'+path.join(dir,'excluded.ts')]);
assert.equal(project.getSourceFiles().length,1);
assert.equal(project.getSourceFiles()[0].getBaseName(),'included.ts');
const image=await sharp(Buffer.from('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"><rect width="16" height="16" fill="red"/></svg>')).png().toBuffer();
assert.equal((await sharp(image).metadata()).width,16);
console.log('ts-morph positive and negative globs, SVG rasterization and metadata passed');
} finally {fs.rmSync(dir,{recursive:true,force:true});}
})().catch(e=>{console.error(e);process.exitCode=1;});
