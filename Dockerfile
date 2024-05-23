# Utilizando image alpine para otimizar container da aplicação
FROM node:20-alpine

# definindo diretório do app
WORKDIR /app

# Instalação dos pacotes necessários para o node_modules
COPY --chown=node:node package*.json ./
RUN npm ci

# Copiando arquivos do projeto e fazendo build da aplicação
COPY --chown=node:node . .
RUN npm run build

# Utilizando usuário que não é o root do sistema para executar a aplicação
USER node

# Executando a aplicação com usuario node
CMD [ "node", "dist/main.js" ]
