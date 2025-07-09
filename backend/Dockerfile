# Usa uma imagem oficial do Node.js
FROM node:18

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos do projeto para o container
COPY package*.json ./
RUN npm install
COPY . .

# Expõe a porta que o app usa
EXPOSE 3000

# Comando para iniciar o app
CMD ["node", "app.js"]
