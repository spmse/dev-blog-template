# My Developer Blog

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Repository Description

This repository hosts a developer blog built with Docusaurus. It includes tools and scripts for creating, managing, and deploying static web content. The software supports rapid local development, customizable theming, and seamless deployment to platforms like GitHub Pages or NGINX.

## Table of Contents

- [Quickstart](#quickstart)
  - [Prerequisites](#prerequisites)
- [Repository Structure](#repository-structure)
- [Deployment](#deployment)
  - [Deploy to GitHub Pages](#deploy-to-github-pages)
  - [Deploying using NGINX](#deploying-using-nginx)

## Quickstart

### Prerequisites

Ensure you have the following tools installed:

- [Node.js](https://nodejs.org/) (v16 or later recommended)
- [pnpm](https://pnpm.io/) (package manager for faster and more efficient dependency handling)
- [Docker](https://www.docker.com/products/docker-desktop) (only required if [Deploying using NGINX](#deploying-using-nginx))

1. Installation

   ```
   $ pnpm install
   ```

2. Local Development

   ```
   $ pnpm start
   ```

   This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

3. Build

   ```
   $ pnpm build
   ```

   This command generates static content into the `build` directory and can be served using any static contents hosting service.

4. Deployment

   In order to deploy onto Github Pages, ensure that your `docusaurus.config.ts` conforms with the [documentation guidelines](https://docusaurus.io/docs/deployment#deploying-to-github-pages). After that is ensured run the following command to deploy:

   ```
   $ USE_SSH=true pnpm deploy
   ```

For detailed information about deploying this Docusaurus project, refer to the [Deployment](#deployment) section below.

## Repository Structure

The repository is organized as follows:

- `docs/`: Contains markdown files for documentation. These files are referenced in `sidebars.ts` to define the sidebar structure.
- `blog/`: Contains markdown files for blog posts. Blog-related metadata is automatically picked up by the Docusaurus configuration.
- `src/`: Contains custom React components, CSS, and JavaScript for additional functionality or theming.
- `static/`: Stores static assets (e.g., images, icons) served directly without processing.
- `sidebars.ts`: Configures the structure of sidebars in the documentation section.
- `docusaurus.config.ts`: Main configuration file for customizing and managing Docusaurus behavior.
- `build/`: Generated after running the `pnpm build` command. Contains the static website files ready for deployment.

New content can be added as follows:

- Add new documentation files to the `docs/` folder.
- Add new blog posts to the `blog/` folder. No additional configuration is required.

## Deployment

### Deploy to Github Pages

Using SSH:

```
$ USE_SSH=true pnpm deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> pnpm deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

### Deploying using NGINX

```dockerfile
# Base image: Nginx built on Alpine Linux for a lightweight and efficient environment
FROM nginx:alpine

# Copy the build files (static assets) into Nginx's default directory
COPY build/ /usr/share/nginx/html

# Expose port 80 to make the application accessible via HTTP
EXPOSE 80

# Start the Nginx web server in the foreground to keep the container running
CMD ["nginx", "-g", "daemon off;"]
```

Build and run the container:

```bash
$ docker build -t docusaurus-blog .
$ docker run -d -p 80:80 docusaurus-blog
```
