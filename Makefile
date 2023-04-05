SHELL := /bin/bash
DOCKER_COMPOSE_FILE_PATH = ./docker/docker-compose.yaml
NODEJS_CONTAINER_NAME = nodejs
NODEJS_CONTAINER_SHELL = bash

.PHONY: dev-up dev-down drop prune

dev-up:
	@docker compose -f $(DOCKER_COMPOSE_FILE_PATH) up -d --build
	@docker exec -ti $(NODEJS_CONTAINER_NAME) $(NODEJS_CONTAINER_SHELL)

dev-down:
	@docker container rm -f $(shell docker container ls -qa)

drop:
	@docker image prune -af
	@docker network prune -f
	@docker volume prune -f

prune:
	@docker system prune -af --volumes
