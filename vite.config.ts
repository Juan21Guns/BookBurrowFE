import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import requireTransform from 'vite-plugin-require-transform';

// https://vitejs.dev/config/

//references this tutorial: https://youtu.be/Sgcfiow4fVQ?si=iNT_j1r3NWhcRUrW
type ViteConfigInput = {
  command: string,
  mode: string,
}

export default (args: ViteConfigInput) => { 
  const generateScopedName = args.mode == 'production'
  ? '[hash:base64:2]' : '[local]_[hash:base64:2]';
  
  return defineConfig({
    plugins: [
      react(), 
      requireTransform({})
    ],
    define: {
      global: {},
    },
    css: {
      modules: {
        localsConvention: "camelCaseOnly",
        generateScopedName,
      }
    }
  })
}