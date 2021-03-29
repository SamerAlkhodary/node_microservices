# Node js Microservices

## Services:

* Gateway API: It is the only service that the user interacts with directly. It receives different requests and then the gateway checks the user's token and makes sure that the user is allowed to make such requests.
* Discovery service: It helps the Gateway API to keep track of the addresses and the ports of all the available services. Every service that comes online, registers itself in the discovery service.
* Weather service: This service fetches the weather of a certain city for the OpenWeatherMap API. This server needs a valid JWT to be reached. Also, an API key is needed.
* Auth service: This service handles authenticating login and sign_up actions.

## Usage:

Run command:

```console
docker-compose up --build
```

## requests:

* Sign-up : Post request to http://127.0.0.1:4444/auth
  body={  "service" : "auth","action" : "signup", "username": "username", "password":"password", "role":"role"}
* Login: Post request to http://127.0.0.1:4444/auth
  body={  "service" : "auth","action" : "login", "username": "username", "password":"password"}
* get weather: Get request to http://127.0.0.1:4444/private?service=weather&city=Lund&country=SE
  headers: Authorization: user's token
