import { fetchAuthSession } from 'aws-amplify/auth';
// Note: When using OIDC via react-oidc-context, prefer passing tokens
// from components using `useAuth()` rather than relying on Amplify here.

export async function apiFetch(input: RequestInfo | URL, init: RequestInit = {}): Promise<Response> {
  try {
    const { tokens } = await fetchAuthSession();
    const idToken = tokens?.idToken?.toString();
    
    const headers = new Headers(init.headers || {});
    if (idToken) {
      headers.set('Authorization', `Bearer ${idToken}`);
    }
    
    return fetch(input, { ...init, headers });
  } catch (error) {
    // If auth session fails, make request without auth headers
    return fetch(input, init);
  }
}
