dev:
	@printf "\033[0;32m>>> Running app\033[0m\n"
	yarn run dev

fix:
	@printf "\033[0;32m>>> Fixing code standards\033[0m\n"
	yarn run fix

install:
	@printf "\033[0;32m>>> Installing app\033[0m\n"
	yarn

lint:
	@printf "\033[0;32m>>> Checking code standards\033[0m\n"
	yarn run lint

start:
	@printf "\033[0;32m>>> Starting server\033[0m\n"
	yarn run start

test:
	@printf "\033[0;32m>>> Running tests\033[0m\n"
	yarn test

.PHONY: test
