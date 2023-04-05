ARG TZ
ARG NODEJS_VERSION

FROM node:${NODEJS_VERSION}

WORKDIR /app

COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

USER node

ENTRYPOINT ["/entrypoint.sh"]
