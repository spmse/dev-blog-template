# My Developer Blog

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

        TODO: improve repo description:

        - What is this repository about?
        - What kind of software is contained in this repo and what can be done with the software?

        => in the best case this should not be longer than 5 sentences, 2-3 would be ideal case.

        TODO: Table of Contents

            - this should be a listing of all distinct (sub)topics that are described in the document

## Quickstart

        TODO: 
        
        - add prerequisites

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

   For detailed information about deploying this docusaurus project refer to the `Deployment` Section [below](#deployment).

## Repository Structure

        TODO: 
        - list important directories of this repository
        - ensure relations between different locations are named and described
            - e.g. relation between `docs/` and `blog/` folders with `sidebars.ts` or `docusaurus.config.ts`
        - This sections aims to provide an overview for every new person that tries to build/run the application on his local machine --> it should be clear where to put new content to, or how to troubleshoot if something is not working as expected/anticipated.

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

        TODO: Create container image definition for deployment