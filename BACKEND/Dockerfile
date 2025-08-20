# Dockerfile for the backend
FROM node:14 

# Set the working directory inside the container
WORKDIR /usr/src/app  

# Copy package.json and package-lock.json to the working directory
COPY BACKEND/package*.json ./

# Install dependencies
RUN npm install

# Copy the entire backend code into the container
COPY BACKEND/ ./

# Expose the backend port
EXPOSE 5000  

# Start the backend server
CMD ["npm", "start"]  
