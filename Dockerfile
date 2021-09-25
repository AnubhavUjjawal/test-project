FROM node:14-buster-slim

ENV TINI_VERSION v0.19.0
ADD https://github.com/krallin/tini/releases/download/${TINI_VERSION}/tini /tini
RUN chmod +x /tini
WORKDIR /app
VOLUME ["/tmp"]

RUN apt-get update && \
    apt-get -y install g++ gcc make python wget libpq-dev && \
    rm -rf /var/lib/apt/lists/*

COPY package.json .
COPY package-lock.json .

RUN npm ci
COPY . .

RUN npm run build
RUN npm prune --production
EXPOSE 2221

RUN mkdir /app/temp
RUN chown node:node /app/temp

USER node
ENTRYPOINT ["/tini", "--"]

ENV PORT=2221
ENV NODE_ENV=production
# TODO: When we change healthcheck API to /health, change it here as well.
# HEALTHCHECK --interval=30s --timeout=1m --start-period=15s --retries=3 CMD ["./healthcheck.sh"] 
CMD ["npm", "run", "start:prod"]
