import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Link, Navigate } from "react-router-dom";
import tableaiLogo from "@/assets/tableai-logo.png";
import { useAuth } from 'react-oidc-context';

const Login = () => {
  const auth = useAuth();
  const { toast } = useToast();

  const signIn = async () => {
    try {
      await auth.signinRedirect();
    } catch (e: any) {
      toast({
        title: 'Login Failed',
        description: e?.message || 'Unable to start sign in.',
        variant: 'destructive',
      });
    }
  };

  if (auth.isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <Link to="/" className="flex items-center justify-center space-x-3 mb-4 hover:opacity-80 transition-opacity">
            <img src={tableaiLogo} alt="TableAI" className="w-10 h-10" />
            <span className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              TableAI
            </span>
          </Link>
          <CardTitle>Welcome Back</CardTitle>
          <CardDescription>
            Sign in to your restaurant dashboard
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button 
            onClick={signIn}
            className="w-full bg-gradient-hero hover:shadow-elegant transition-all duration-300"
            disabled={auth.isLoading}
          >
            {auth.isLoading ? 'Starting Sign In...' : 'Sign In with Cognito'}
          </Button>
          <div className="mt-4 text-center text-sm text-muted-foreground">
            Don't have an account?{' '}
            <Button variant="link" className="p-0 h-auto">
              Contact Sales
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
