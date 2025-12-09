import { S3Client } from "@aws-sdk/client-s3";
import { fromIni } from "@aws-sdk/credential-providers";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { GetObjectCommand, PutObjectCommand } from "@aws-sdk/client-s3";
import { config } from './config/config';

// Configure AWS
const credentials = config.aws_profile
  ? fromIni({ profile: config.aws_profile })
  : {
      accessKeyId: config.aws_access_key_id,
      secretAccessKey: config.aws_secret_access_key,
      sessionToken: config.aws_session_token
    };

// Create S3 client
export const s3Client = new S3Client({
  region: config.aws_region,
  credentials: credentials,
});

// Generates an AWS signed URL for retrieving objects
export async function getGetSignedUrl(key: string): Promise<string> {
  const command = new GetObjectCommand({
    Bucket: config.aws_media_bucket,
    Key: key
  });

  const signedUrl = await getSignedUrl(s3Client, command, {
    expiresIn: 60 * 5 // 5 minutes
  });

  return signedUrl;
}

// Generates an AWS signed URL for uploading objects
export async function getPutSignedUrl(key: string): Promise<string> {
  const command = new PutObjectCommand({
    Bucket: config.aws_media_bucket,
    Key: key
  });

  const signedUrl = await getSignedUrl(s3Client, command, {
    expiresIn: 60 * 5 // 5 minutes
  });

  return signedUrl;
}