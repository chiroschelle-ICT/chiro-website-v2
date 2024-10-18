# Use the official Node.js image as the base image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if exists) to the container
COPY package*.json ./

# Install the app dependencies
RUN npm install

# Copy the rest of your application files to the container
COPY . .

# Expose the application's port
EXPOSE 3000

# Command to run the application
CMD ["node", "server.js"]
