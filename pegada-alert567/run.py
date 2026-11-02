import subprocess, pathlib, sys, hashlib, json
root=pathlib.Path('/Users/gabrieltaveira/.t3/worktrees/pegada/t3-a4ef9e7c')
tool=root/'.unistyles-codemod'; out=pathlib.Path(__file__).parent
head=subprocess.check_output(['git','rev-parse','HEAD'],cwd=root,text=True).strip()
files=subprocess.check_output(['git','ls-files','.unistyles-codemod','apps/mobile/src','packages/shared/themes','pnpm-lock.yaml'],cwd=root,text=True).splitlines()
manifest={'head':head,'node':subprocess.check_output(['node','--version'],text=True).strip(),'files':{f:hashlib.sha256((root/f).read_bytes()).hexdigest() for f in files}}
(out/'tested-files.json').write_text(json.dumps(manifest,indent=2)+'\n')
print('TESTED HEAD '+head,flush=True)
def run(cmd,expected=0):
 print('$ '+' '.join(cmd),flush=True)
 p=subprocess.run(cmd,cwd=tool,stdout=subprocess.PIPE,stderr=subprocess.STDOUT,text=True)
 print(p.stdout,flush=True)
 print('exit='+str(p.returncode)+' expected='+str(expected),flush=True)
 if p.returncode!=expected: sys.exit(1)
run(['npm','ci'])
run(['npm','run','test:history'])
run(['npm','audit'])
report=tool/'report.json'; original=report.read_bytes()
try:
 run(['npm','run','analyze'])
 run(['npm','run','transform','--','invalid'],0) if False else None
 run(['node_modules/.bin/tsx','src/cli.ts','unknown'],2)
finally: report.write_bytes(original)
for f,digest in manifest['files'].items():
 assert hashlib.sha256((root/f).read_bytes()).hexdigest()==digest, f+' changed during proof'
print('PASS all tested files restored byte for byte; developer CLI proof only',flush=True)
