import { useState } from "react";
import { signIn } from 'aws-amplify/auth';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import tableaiLogo from "@/assets/tableai-logo.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { nextStep } = await signIn({ username: email, password });
      
      if (nextStep.signInStep && nextStep.signInStep !== 'DONE') {
        // Handle MFA or other additional steps in the future
        toast({
          title: "Additional Step Required",
          description: "Please complete the additional authentication step.",
          variant: "default",
        });
        return;
      }
      
      toast({
        title: "Login Successful",
        description: "Redirecting to dashboard...",
      });
      
      // Redirect to dashboard
      window.location.href = '/dashboard';
    } catch (error: any) {
      const errorMessage = 
        error?.name === 'UserNotConfirmedException' 
          ? 'Please confirm your email first.'
        : error?.name === 'NotAuthorizedException'
          ? 'Incorrect email or password.'
        : error?.message || 'Please check your credentials and try again.';
      
      toast({
        title: "Login Failed",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <img src={tableaiLogo} alt="TableAI" className="w-10 h-10" />
            <span className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              TableAI
            </span>
          </div>
          <CardTitle>Welcome Back</CardTitle>
          <CardDescription>
            Sign in to your restaurant dashboard
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
            </div>
            <Button 
              type="submit" 
              className="w-full bg-gradient-hero hover:shadow-elegant transition-all duration-300"
              disabled={loading}
            >
              {loading ? "Signing In..." : "Sign In"}
            </Button>
          </form>
          <div className="mt-4 text-center text-sm text-muted-foreground">
            Don't have an account?{" "}
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