# Serverless-Web-App-Using-AWS

## Project Name: Serverless Web Application using AWS

### Project Description:

In this project, I build a serverless web application using AWS Lambda, DynamoDB, and S3. The application will allow users to create, read, update, and delete (CRUD) items from a DynamoDB table.

### Project Architecture:

![Serverless Web Application on AWS Architecture](https://github.com/narendrayalla/Serverless-Web-App-Using-AWS/blob/main/Architecture.png)

### Steps to Build the Project:

* Create a DynamoDB table to store the items. \
* Build a Lambda function to handle the CRUD operations on the DynamoDB table. \
* Use S3 to store and host the web application's static files (HTML, CSS, and JavaScript). \
* Create a CloudFront distribution to serve the S3-hosted static files with low latency. \
