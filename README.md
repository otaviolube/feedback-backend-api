# Projeto Prático da C1 - Template
## Backend do Sistema de Feedback

### Principais comandos

Iniciando o projeto.

`npm init -y`

Lembrem-se de iniciar o GIT no projeto.

`git init`

Salvem periodicamente seus repositórios e comitem com o Github.

Criar a estrutura do projeto como está em anexo.

### Alguns plugins utilizados em sala de aula

- Gitlens
- Dracula Theme
- VSCode Icons
- Fira Code (Tipografia)

### Instalação do Typescript

`npm install typescript --save-dev` 

Vamos lembrar de criar um arquivo para ignorar a pasta node_modules e demais elementos desnecessários do projeto: .gitignore

Precisamos agora configurar o typescript:

`npx tsc --init` 

### Configurações do tsconfig.json

~~~Javascript
    {
    "compilerOptions": {
        "target": "es2016",
        "module": "commonjs",
        "rootDir": "./src",
        "outDir": "./dist",
        "esModuleInterop": true,
        "forceConsistentCasingInFileNames": true,
        "strict": true,
        "skipLibCheck": true
        }
    } 
~~~ 