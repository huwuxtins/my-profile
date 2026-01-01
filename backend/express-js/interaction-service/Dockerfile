FROM nodejs:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 8085

CMD ["node", "app.js"]