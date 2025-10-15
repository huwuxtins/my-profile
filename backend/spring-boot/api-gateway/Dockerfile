FROM openjdk:17-jdk-slim

WORKDIR /app

COPY target/api_gateway_0.0.1.jar api_gateway.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "api_gateway.jar"]