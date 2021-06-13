FROM node:14

WORKDIR /home/ec2-user/node_app/app


COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["node","app.js"]
