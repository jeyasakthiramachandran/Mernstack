# Dockerfile for the frontend
FROM node:14  

# Set the working directory inside the container
WORKDIR /usr/src/app  

# Copy package.json and package-lock.json to the working directory
COPY book-store/package*.json ./

# Install dependencies
RUN npm install

# Copy the entire frontend code into the container
COPY book-store/ ./

# Build the frontend
RUN npm run build

# Expose the frontend port
EXPOSE 3000

# Start the frontend server
CMD ["npx", "serve", "-s", "build"]  
