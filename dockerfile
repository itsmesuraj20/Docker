# Use the official Node.js LTS image as the base
FROM node:16-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if any)
COPY package*.json ./

# Install dependencies (skip this if no dependencies)
RUN npm install

# Copy the application code to the container
COPY . .

# Set the default command to run your script
CMD ["node", "index.js"]
