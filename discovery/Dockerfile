FROM alpine:latest
RUN apk add --no-cache nodejs yarn
WORKDIR /app
COPY . /app

EXPOSE 5001
ENTRYPOINT [ "node" ]
CMD ["server.js"]