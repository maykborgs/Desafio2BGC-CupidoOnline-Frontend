const config = {
  s3: {
      REGION: "sa-east-1",
      BUCKET: "cupidoonlibebucket",
  },
  apiGateway: {
      REGION: "sa-east-1",
      URL: "https://flb5f4wxx0.execute-api.sa-east-1.amazonaws.com/prod",
  },
  cognito: {
      REGION: "sa-east-1",
      USER_POOL_ID: process.env.REACT_APP_COGNITO_USER_POOL_ID,
      APP_CLIENT_ID: process.env.REACT_APP_COGNITO_APP_CLIENT_ID,
      IDENTITY_POOL_ID: process.env.REACT_APP_COGNITO_IDENTITY_POOL_ID,
  },
};

export default config;