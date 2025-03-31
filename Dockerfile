FROM node:20.16-alpine as builder

WORKDIR /app

ARG BLOG_ENABLED=false
ARG DEPLOYMENT_URL="https://spmse.github.io"
ARG DEPLOYMENT_BRANCH="main"
ARG GITHUB_ORG="spmse"
ARG GITHUB_PROJECT="dev-blog-template"

COPY . $WORKDIR

RUN npm install && npm run build

FROM nginx:latest as runner

COPY --from=builder /app/build /usr/share/nginx/html