# Example: SQS and Lambda

This repository contains example code which is integrating SQS and Lambda as described in our blog post [Integrate SQS and Lambda: serverless architecture for asynchronous workloads](https://cloudonaut.io/integrate-sqs-and-lambda-serverless-architecture-for-asynchronous-workloads/).

## Deploy

Use the following command to deploy the example. Replace `<YOUR_NICKNAME>` with your nickname.

```
aws s3 mb s3://sqs-lambda-<YOUR_NICKNAME>

aws cloudformation package --template-file cloudformation.yml --s3-bucket sqs-lambda-<YOUR_NICKNAME> --output-template-file output.yml && aws cloudformation deploy --template-file output.yml --stack-name sqs-lambda-example --capabilities CAPABILITY_IAM
```
