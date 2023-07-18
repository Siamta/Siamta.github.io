FROM node:20.2.0
                        
WORKDIR /app

COPY package.json ./

RUN npm install         

CMD bash -c "npm install & npm run dev"