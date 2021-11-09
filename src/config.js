const dev = {
  s3: {
    REGION: 'us-west-2',
    BUCKET: 'use-reducer-login-files-dev-uploads-92g5zjgvdwju',
  },
  apiGateway: {
    REGION: 'us-west-2',
    URL: 'https://c4vm8qy4r2.execute-api.us-west-2.amazonaws.com/dev/',
  },
  cognito: {
    REGION: 'us-west-2',
    USER_POOL_ID: 'us-west-2_i8bIHQauY',
    APP_CLIENT_ID: '4r70shlla5i2msad6cb56k7k3h',
    IDENTITY_POOL_ID: 'us-west-2_i8bIHQauY0.0',
  },
  google: {
    analyticsCode: '__GOOGLE_ANALYTICS_CODE__',
  },
};

const prod = {
  s3: {
    REGION: 'us-west-2',
    BUCKET: '__S3_BUCKET__',
  },
  apiGateway: {
    REGION: 'us-west-2',
    URL: '__API_GATEWAY_URL__',
  },
  cognito: {
    REGION: 'us-west-2',
    USER_POOL_ID: '__USER_POOL_ID__',
    APP_CLIENT_ID: '__APP_CLIENT_ID__',
    IDENTITY_POOL_ID: '__IDENTITY_POOL_ID__',
  },
  google: {
    analyticsCode: '__GOOGLE_ANALYTICS_CODE__',
  },
};

const app = {
  SITE_TITLE: 'Use Reducer Login Demo',
  ALERT_FADEOUT: 7000,
  MAX_ATTACHMENT_SIZE: 5000000,
  IMAGE_FORMATS: ['image/jpg', 'image/jpeg', 'image/gif', 'image/png'],
  AUDIO_FORMATS: ['audio/mp3', 'audio/mp4'],
};

// Default to dev if not set
const envConfig = process.env.REACT_APP_STAGE === 'production' ? prod : dev;

const config = {
  app,
  ...envConfig,
};

export default config;
