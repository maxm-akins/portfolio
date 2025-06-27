# STAGE ONE BUILD
FROM maven:3.9.10-eclipse-temurin-24 AS build
WORKDIR /app
COPY . .
RUN mvn clean package -DskipTests

# STAGE 2 RUN
FROM eclipse-temurin:24-alpine
WORKDIR /app
COPY --from=build /app/target/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]