import { createRoot } from 'react-dom/client'
import { Amplify } from 'aws-amplify'
import App from './App.tsx'
import './index.css'
import awsConfig from './lib/aws-config'
import { AuthProvider } from 'react-oidc-context'
import oidcConfig from './lib/oidc-config'

// Keep Amplify configured for other AWS features if needed
Amplify.configure(awsConfig);

createRoot(document.getElementById('root')!).render(
  <AuthProvider {...oidcConfig}>
    <App />
  </AuthProvider>
);
