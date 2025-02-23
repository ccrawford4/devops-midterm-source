# Use official Node.js image for building the frontend
FROM node:20 AS build

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the frontend for production
RUN npm run build

# Use a minimal web server to serve the built files
FROM node:20 AS serve

# Set working directory
WORKDIR /app

# Install a lightweight static file server (e.g., serve)
RUN npm install -g serve

# Copy built files from the previous stage
COPY --from=build /app/dist .

# Expose port 3000
EXPOSE 3000

# Start the frontend
CMD ["serve", "-s", ".", "-l", "3000"]