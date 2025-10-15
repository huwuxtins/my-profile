FROM openjdk:17-jdk-slim

WORKDIR /app

COPY target/content_management_0.0.1.jar content_management.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "content_management.jar"]