// OIDC config for Cognito Hosted UI with react-oidc-context
// Ensure you set the following Vite env vars in your environment or .env file:
// - VITE_COGNITO_REGION (e.g., us-east-1)
// - VITE_COGNITO_USER_POOL_ID (e.g., us-east-1_XXXXXXXXX)
// - VITE_COGNITO_CLIENT_ID (App client ID for a public client)
// - VITE_COGNITO_DOMAIN (e.g., https://your-domain.auth.us-east-1.amazoncognito.com)
// - VITE_OIDC_REDIRECT_URI (e.g., https://yourapp.com/auth/callback)
// - VITE_OIDC_LOGOUT_URI (e.g., https://yourapp.com/)
// - VITE_OIDC_SCOPES (optional, defaults to 'openid email profile')

const region = import.meta.env.VITE_COGNITO_REGION as string;
const userPoolId = import.meta.env.VITE_COGNITO_USER_POOL_ID as string;
const clientId = import.meta.env.VITE_COGNITO_CLIENT_ID as string;
const domain = (import.meta.env.VITE_COGNITO_DOMAIN as string | undefined)?.replace(/\/$/, "");

const defaultRedirect = `${window.location.origin}/auth/callback`;
const defaultLogout = `${window.location.origin}/`;

const oidcConfig = {
  authority: `https://cognito-idp.${region}.amazonaws.com/${userPoolId}`,
  client_id: clientId,
  redirect_uri: (import.meta.env.VITE_OIDC_REDIRECT_URI as string) || defaultRedirect,
  post_logout_redirect_uri: (import.meta.env.VITE_OIDC_LOGOUT_URI as string) || defaultLogout,
  response_type: 'code',
  scope: (import.meta.env.VITE_OIDC_SCOPES as string) || 'openid email profile',
  // Provide explicit logout endpoint because Cognito's issuer doc may omit it
  metadata: domain
    ? {
        end_session_endpoint: `${domain}/logout`,
      }
    : undefined,
};

export default oidcConfig;

