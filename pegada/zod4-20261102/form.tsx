import React from "/Users/gabrieltaveira/.t3/worktrees/pegada/t3-a114023e/node_modules/react";
import { createRoot } from "/Users/gabrieltaveira/.t3/worktrees/pegada/t3-a114023e/node_modules/react-dom/client";
import { useForm } from "/Users/gabrieltaveira/.t3/worktrees/pegada/t3-a114023e/node_modules/react-hook-form";
import { zodResolver } from "/Users/gabrieltaveira/.t3/worktrees/pegada/t3-a114023e/node_modules/@hookform/resolvers/zod";
import i18next from "/Users/gabrieltaveira/.t3/worktrees/pegada/t3-a114023e/node_modules/i18next";
import { initI18n } from "/Users/gabrieltaveira/.t3/worktrees/pegada/t3-a114023e/packages/shared/i18n/i18n";
import { dogQuickClientSchema } from "/Users/gabrieltaveira/.t3/worktrees/pegada/t3-a114023e/packages/shared/schemas/dog-schema";
function App() {
 const {register,handleSubmit,formState:{errors}}=useForm({resolver:zodResolver(dogQuickClientSchema),defaultValues:{name:"N",bio:"",gender:"FEMALE",images:[]}});
 return <form onSubmit={handleSubmit(value=>document.querySelector('#saved').textContent=JSON.stringify(value))}>
 <h1>Pegada profile validation</h1><p>Production schema and React Hook Form resolver, browser harness</p>
 <label>Name <input {...register('name')}/></label><p role="alert">{errors.name?.message}</p>
 <p role="alert">{errors.images?.message}</p><button>Save profile</button><pre id="saved"/></form>
}
await initI18n(i18next); await i18next.changeLanguage('pt-BR');
createRoot(document.getElementById('root')).render(<App/>);
window.setLanguage=async lang=>{await i18next.changeLanguage(lang);document.querySelector('button').click();};
