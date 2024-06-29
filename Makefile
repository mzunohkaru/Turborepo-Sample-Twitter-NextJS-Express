db:
	@echo "Dockerコンテナを起動します..."
	@docker-compose -f docker-compose.local.yaml up -d --build
	@echo "Dockerコンテナが起動しました。"

psgl:
	docker-compose -f docker-compose.local.yaml exec postgres psql -U myuser -d mydb
