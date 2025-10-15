FROM openjdk:17-jdk-slim

WORKDIR /app

COPY target/eureka_server_0.0.1.jar eureka_server.jar

EXPOSE 8761

ENTRYPOINT ["java", "-jar", "eureka_server.jar"]