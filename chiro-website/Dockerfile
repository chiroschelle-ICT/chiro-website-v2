# Use the official Node.js image to build the Angular app
FROM node:18 AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install Angular CLI globally
RUN npm install -g @angular/cli

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Angular app
RUN ng build --configuration production

# Stage 2 - Serve the application with Nginx
FROM nginx:alpine

# Copy the built Angular app to the Nginx server
COPY --from=build /app/dist/your-angular-app-name /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Command to run Nginx
CMD ["nginx", "-g", "daemon off;"]
