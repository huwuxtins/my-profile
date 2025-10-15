FROM openjdk:17-jdk-slim

WORKDIR /app

COPY target/notification_0.0.1.jar notification_service.jar

EXPOSE 8086

ENTRYPOINT ["java", "-jar", "notification_service.jar"]