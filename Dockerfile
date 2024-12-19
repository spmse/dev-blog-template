# Use the official NGINX base image
FROM nginx:alpine

# Set the working directory
WORKDIR /usr/share/nginx/html

# Copy the build files to NGINX's default directory
COPY build/ .

# Expose port 80 for serving the site
EXPOSE 80

# Start the NGINX server
CMD ["nginx", "-g", "daemon off;"]
