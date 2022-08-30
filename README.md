# team2
## 実行方法
```
docker compose run --rm frontend npm install
docker compose up -d
```
`localhost:3000`にアクセス

##以下のエラーが出たとき

```
npm ERR! EPROTO: protocol error, symlink '../acorn/bin/acorn' -> '/frontend/node_modules/.bin/acorn'
```

```
docker-compose run --rm frontend npm install express --no-bin-links
docker compose up -d
```
