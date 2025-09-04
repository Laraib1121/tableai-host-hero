import { useState } from "react";
import { signIn, confirmSignIn } from 'aws-amplify/auth';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
import tableaiLogo from "@/assets/tableai-logo.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [mfaCode, setMfaCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [challengeStep, setChallengeStep] = useState<string | null>(null);
  const { toast } = useToast();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { nextStep } = await signIn({ username: email, password });
      
      if (nextStep.signInStep === 'CONFIRM_SIGN_IN_WITH_NEW_PASSWORD_REQUIRED') {
        setChallengeStep('NEW_PASSWORD_REQUIRED');
      } else if (nextStep.signInStep === 'CONFIRM_SIGN_IN_WITH_SMS_CODE') {
        setChallengeStep('SMS_MFA');
      } else if (nextStep.signInStep === 'CONFIRM_SIGN_IN_WITH_TOTP_CODE') {
        setChallengeStep('TOTP_MFA');
      } else if (nextStep.signInStep === 'DONE') {
        toast({
          title: "Login Successful",
          description: "Redirecting to dashboard...",
        });
        window.location.href = '/dashboard';
      }
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

  const handleNewPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (newPassword !== confirmPassword) {
      toast({
        title: "Password Mismatch",
        description: "New password and confirmation do not match.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    try {
      const { nextStep } = await confirmSignIn({ challengeResponse: newPassword });
      
      if (nextStep.signInStep === 'DONE') {
        toast({
          title: "Password Updated",
          description: "Redirecting to dashboard...",
        });
        window.location.href = '/dashboard';
      }
    } catch (error: any) {
      toast({
        title: "Password Update Failed",
        description: error?.message || "Failed to update password. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleMfaChallenge = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { nextStep } = await confirmSignIn({ challengeResponse: mfaCode });
      
      if (nextStep.signInStep === 'DONE') {
        toast({
          title: "Login Successful",
          description: "Redirecting to dashboard...",
        });
        window.location.href = '/dashboard';
      }
    } catch (error: any) {
      toast({
        title: "Verification Failed",
        description: error?.message || "Invalid verification code. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const renderLoginForm = () => (
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
  );

  const renderNewPasswordForm = () => (
    <form onSubmit={handleNewPassword} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="newPassword">New Password</Label>
        <Input
          id="newPassword"
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          placeholder="Enter your new password"
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="confirmPassword">Confirm New Password</Label>
        <Input
          id="confirmPassword"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm your new password"
          required
        />
      </div>
      <Button 
        type="submit" 
        className="w-full bg-gradient-hero hover:shadow-elegant transition-all duration-300"
        disabled={loading}
      >
        {loading ? "Updating Password..." : "Set New Password"}
      </Button>
    </form>
  );

  const renderMfaForm = () => (
    <form onSubmit={handleMfaChallenge} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="mfaCode">
          {challengeStep === 'SMS_MFA' ? 'SMS Verification Code' : 'TOTP Code'}
        </Label>
        <Input
          id="mfaCode"
          type="text"
          value={mfaCode}
          onChange={(e) => setMfaCode(e.target.value)}
          placeholder={challengeStep === 'SMS_MFA' ? 'Enter SMS code' : 'Enter TOTP code'}
          required
          maxLength={6}
        />
      </div>
      <Button 
        type="submit" 
        className="w-full bg-gradient-hero hover:shadow-elegant transition-all duration-300"
        disabled={loading}
      >
        {loading ? "Verifying..." : "Verify Code"}
      </Button>
    </form>
  );

  const getTitle = () => {
    switch (challengeStep) {
      case 'NEW_PASSWORD_REQUIRED':
        return 'Set New Password';
      case 'SMS_MFA':
        return 'SMS Verification';
      case 'TOTP_MFA':
        return 'Authentication Code';
      default:
        return 'Welcome Back';
    }
  };

  const getDescription = () => {
    switch (challengeStep) {
      case 'NEW_PASSWORD_REQUIRED':
        return 'Please set a new password to continue';
      case 'SMS_MFA':
        return 'Enter the verification code sent to your phone';
      case 'TOTP_MFA':
        return 'Enter the code from your authenticator app';
      default:
        return 'Sign in to your restaurant dashboard';
    }
  };

  const renderCurrentForm = () => {
    switch (challengeStep) {
      case 'NEW_PASSWORD_REQUIRED':
        return renderNewPasswordForm();
      case 'SMS_MFA':
      case 'TOTP_MFA':
        return renderMfaForm();
      default:
        return renderLoginForm();
    }
  };

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
          <CardTitle>{getTitle()}</CardTitle>
          <CardDescription>
            {getDescription()}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {renderCurrentForm()}
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