FROM node:12.14.0

# Install global files
RUN ["yarn", "global", "add", "knex"]
RUN ["yarn", "global", "add", "pm2"]
RUN ["yarn", "global", "add", "typescript"]

# Set environment
ENV NODE_ENV production
ENV PORT 5000

# Create app directory
RUN mkdir -p /app
COPY package.json /app/package.json
RUN ["yarn", "install"]

COPY . /app

WORKDIR /app

EXPOSE 5000

CMD ["bash", "./scripts/init-prod-server.sh"]