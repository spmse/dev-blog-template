# Deploy Docusaurus with Docker and NGINX

To deploy the site using NGINX and Docker, use the following example Dockerfile configuration:

```dockerfile
# Use Node:18 image as base
FROM node:18 AS build

# Set the working directory
WORKDIR /app

# Copy the package files and install dependencies
COPY package.json ./
RUN npm install

# Copy the rest of the application files
COPY . .

# Copy the example.env to .env
COPY example.env .env

# Build the Docusaurus site
RUN npm run build

# Set up Nginx to serve the built site
FROM nginx:alpine

# Copy the build output from the previous step into the Nginx container
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 for Nginx
EXPOSE 80

# Nginx will automatically run in the foreground
CMD ["nginx", "-g", "daemon off;"]
```

Build and run the container:

```bash
$ docker build -t docusaurus-blog .
$ docker run -d -p 3000:80 docusaurus-blog
```

Once the container is running, the blog website will be accessible at `http://localhost:3000` or `http://<YOUR_VM_IP>:3000` in your browser.