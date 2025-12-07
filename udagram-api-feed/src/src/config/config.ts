export const config = {
  // 'username': process.env.POSTGRES_USERNAME,
  // 'password': process.env.POSTGRES_PASSWORD,
  // 'database': process.env.POSTGRES_DB,
  // 'host': process.env.POSTGRES_HOST,
  // 'port': parseInt(process.env.POSTGRES_PORT || '5432'),
  'username': 'postgres',
  'password': 'postgres',
  'database': 'udagram',
  'host': 'localhost',
  'port': '5432',
  'dialect': 'postgres',
  'dialectOptions': {
    'ssl': false
  },
  'aws_region': process.env.AWS_REGION,
  'aws_profile': process.env.AWS_PROFILE,
  'aws_media_bucket': process.env.AWS_BUCKET,
  'url': 'http://localhost:8070',
  'jwt': {
    'secret': 'mysecret123',
  },
};
