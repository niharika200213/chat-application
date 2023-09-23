# Base image
FROM node:alpine

# Create app directory
WORKDIR /app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json .

# Install app dependencies
RUN npm ci

# Bundle app source
COPY . .

RUN npm run build

EXPOSE 3000
# Creates a "dist" folder with the production build
CMD ["npm", "run", "start:prod"]