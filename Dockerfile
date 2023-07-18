FROM node:20.2.0
                        
WORKDIR /app

COPY Veel-Glorie/package.json ./   

RUN npm install         

CMD npm run dev