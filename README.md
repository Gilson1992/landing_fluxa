# FLUXA Fullstack Monorepo

Estrutura pronta para desenvolvimento e deploy (Coolify-ready):

- `frontend`: React + Vite + TypeScript + Axios
- `backend`: Node.js + Express + TypeScript + Prisma + PostgreSQL
- `docker-compose.dev.yml`: ambiente de desenvolvimento
- `docker-compose.prod.yml`: ambiente de produção

## Subir ambiente dev

```bash
docker-compose -f docker-compose.dev.yml up --build
```

## Endpoints backend

- `GET /health`
- `POST /leads`
- `GET /leads`
- `GET /leads/:id`
- `GET /plans`

## Variáveis de ambiente

Backend (`backend/.env.example`):
- `DATABASE_URL`
- `PORT`
- `JWT_SECRET`
- `LOG_LEVEL`
- `NODE_ENV`

Frontend (`frontend/.env.example`):
- `VITE_API_URL`
