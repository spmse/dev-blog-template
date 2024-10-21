---
title: Overview
---

# Introduction: Docker in the Context of Containers

To understand Docker’s role in the container ecosystem, it can be helpful to think of Docker as a brand that has become synonymous with the technology it popularized. Just as "Tempo" is a specific brand often used interchangeably with the term "tissue," Docker is a platform that has become almost synonymous with containers, even though other container technologies exist.

In this analogy:

- **Docker** is like **Tempo** or **Zewa**, brands that are commonly used to refer to tissues or paper towels in general, even when people are using a different brand.
- **Containers** are like **tissues** or **paper towels** themselves, which are the general products that serve a purpose independent of the specific brand.

While containers as a technology have existed before Docker, Docker revolutionized the way containers are built, shared, and deployed, much like how certain brands become household names by simplifying or standardizing a product. Docker provides a standardized set of tools to work with containers, which is why its name is often used as a shorthand for containers in general. However, it's important to remember that Docker is one option among many in the container space, similar to how "Tempo" is one brand among many tissue brands.

# What is Docker? 

Docker is a platform for building and deploying containerized application. Theses containers include everything 
needed to run an application, libraries and configurations. 

```Dockerfile title="Dockerfile"
# Use an official Python image as the base
FROM python:3.9-slim

# Set the working directory inside the container

WORKDIR /app

# Copy only the requirements file and install dependencies

RUN python -m pip install --no-cache-dir -r requirements.txt

# Copy the Code into the working direction

COPY . ${WORKDIR}

# Change to the app directory and run database migrations

WORKDIR /app/babyshop_app
RUN python manage.py makemigrations
RUN python manage.py migrate

# This is the command that will be executed on container launch

ENTRYPOINT ["sh", "-c", "python manage.py runserver 0.0.0.0:8025"]
```