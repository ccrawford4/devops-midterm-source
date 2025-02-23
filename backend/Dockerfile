# Use official Golang image as base
FROM golang:1.21 AS build

# Set working directory
WORKDIR /app

# Copy go.mod and go.sum first (for caching dependencies)
COPY go.mod go.sum ./

# Download dependencies
RUN go mod download

# Copy the rest of the application
COPY . .

# Build the Go application
RUN go build -o main .

# Use a minimal base image for the final container
FROM alpine:latest

# Set working directory in the final container
WORKDIR /root/

# Copy built binary from the previous stage
COPY --from=build /app/main .

# Expose the backend port
EXPOSE 8080

# Run the application
CMD ["./main"]