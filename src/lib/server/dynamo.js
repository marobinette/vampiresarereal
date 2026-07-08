import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb';
import { env } from '$env/dynamic/private';

// Single shared DynamoDB document client. The document client lets us work with
// plain JS objects instead of DynamoDB's attribute-value wire format.
//
// NOTE: The landing page is currently 100% static — nothing imports this yet.
// It exists so that when we move article content into DynamoDB, the wiring is
// already in place and matches the pattern used in the portfolio project.
//
// Credentials come from env vars (see .env.example). On Vercel these are set in
// the project's Environment Variables; locally they live in .env (gitignored).
const client = new DynamoDBClient({
  region: env.AWS_REGION,
  credentials: {
    accessKeyId: env.AWS_ACCESS_KEY_ID,
    secretAccessKey: env.AWS_SECRET_ACCESS_KEY,
  },
});

export const ddb = DynamoDBDocumentClient.from(client, {
  marshallOptions: { removeUndefinedValues: true },
});

// Table name defaults to "vampire_project" but can be overridden per-env.
export const VAMPIRE_TABLE = env.VAMPIRE_TABLE ?? 'vampire_project';
