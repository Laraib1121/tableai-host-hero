import { fetchAuthSession } from 'aws-amplify/auth';

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