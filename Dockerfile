# Use the official Node.js image
FROM node:20

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install --production

# Bundle app source
COPY . .

# Bind to the specified port
EXPOSE 3100
EXPOSE 3110

# Command to run the app
CMD ["node", "api/server.js"]
