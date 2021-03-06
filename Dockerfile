FROM node:10.22.0-alpine

# Create app directory
WORKDIR /app

# Set environment variable
ENV NODE_ENV production

ENV MODE ''

# Install app dependencies
COPY package.json /app
RUN npm install

# Bundle app source
COPY . /app

# Port
EXPOSE 8080

# Start
CMD npm run start$MODE