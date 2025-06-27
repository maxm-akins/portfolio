# STAGE 1 BUILD
FROM node:22.17.0-alpine AS build
WORKDIR /app
COPY . .
RUN npm install && npm run build
# STAGE 2 RUN
FROM node:22.17.0-alpine
WORKDIR /app
COPY --from=build /app ./
EXPOSE 3000
CMD ["npm", "start"]