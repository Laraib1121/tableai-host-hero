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

    // Debug logging
    console.log('Login attempt:', { email, timestamp: new Date().toISOString() });

    try {
      const { nextStep } = await signIn({ username: email, password });
      
      console.log('Sign-in response:', {
        signInStep: nextStep.signInStep,
        nextStep: nextStep,
        timestamp: new Date().toISOString()
      });
      
      if (nextStep.signInStep === 'CONFIRM_SIGN_IN_WITH_NEW_PASSWORD_REQUIRED') {
        console.log('New password required for user');
        setChallengeStep('NEW_PASSWORD_REQUIRED');
      } else if (nextStep.signInStep === 'CONFIRM_SIGN_IN_WITH_SMS_CODE') {
        console.log('SMS MFA required');
        setChallengeStep('SMS_MFA');
      } else if (nextStep.signInStep === 'CONFIRM_SIGN_IN_WITH_TOTP_CODE') {
        console.log('TOTP MFA required');
        setChallengeStep('TOTP_MFA');
      } else if (nextStep.signInStep === 'DONE') {
        console.log('Login successful, redirecting to dashboard');
        toast({
          title: "Login Successful",
          description: "Redirecting to dashboard...",
        });
        window.location.href = '/dashboard';
      } else {
        console.log('Unexpected sign-in step:', nextStep.signInStep);
        toast({
          title: "Unexpected Response",
          description: `Unexpected sign-in step: ${nextStep.signInStep}`,
          variant: "destructive",
        });
      }
    } catch (error: any) {
      console.error('Login error:', {
        name: error?.name,
        message: error?.message,
        code: error?.code,
        stack: error?.stack,
        fullError: error,
        timestamp: new Date().toISOString()
      });

      let errorMessage = 'Please check your credentials and try again.';
      let debugInfo = '';

      if (error?.name === 'UserNotConfirmedException') {
        errorMessage = 'Please confirm your email first.';
        debugInfo = 'User email not confirmed';
      } else if (error?.name === 'NotAuthorizedException') {
        errorMessage = 'Incorrect email or password.';
        debugInfo = 'Invalid credentials';
      } else if (error?.name === 'UserNotFoundException') {
        errorMessage = 'No account found with this email address.';
        debugInfo = 'User not found';
      } else if (error?.name === 'TooManyRequestsException') {
        errorMessage = 'Too many failed attempts. Please try again later.';
        debugInfo = 'Rate limited';
      } else if (error?.name === 'InvalidParameterException') {
        errorMessage = 'Invalid login parameters. Please check your input.';
        debugInfo = 'Invalid parameters';
      } else if (error?.message) {
        errorMessage = error.message;
        debugInfo = `Error: ${error.name || 'Unknown'}`;
      }

      console.log('Processed error:', { errorMessage, debugInfo });
      
      toast({
        title: "Login Failed",
        description: `${errorMessage} ${process.env.NODE_ENV === 'development' ? `(${debugInfo})` : ''}`,
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

    console.log('Setting new password');
    setLoading(true);
    
    try {
      const { nextStep } = await confirmSignIn({ 
        challengeResponse: newPassword
      });
      
      console.log('New password response:', nextStep);
      
      if (nextStep.signInStep === 'DONE') {
        console.log('New password set successfully');
        toast({
          title: "Password Updated",
          description: "Redirecting to dashboard...",
        });
        window.location.href = '/dashboard';
      } else {
        console.log('Additional steps required after password change:', nextStep.signInStep);
      }
    } catch (error: any) {
      console.error('New password error:', error);
      
      let errorMessage = "Failed to update password. Please try again.";
      
      if (error?.name === 'InvalidPasswordException') {
        errorMessage = "Password doesn't meet requirements. Use at least 8 characters with uppercase, lowercase, numbers.";
      } else if (error?.message) {
        errorMessage = error.message;
      }
      
      toast({
        title: "Password Update Failed",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleMfaChallenge = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    console.log('MFA challenge attempt:', { challengeStep, codeLength: mfaCode.length });

    try {
      const { nextStep } = await confirmSignIn({ challengeResponse: mfaCode });
      
      console.log('MFA response:', nextStep);
      
      if (nextStep.signInStep === 'DONE') {
        console.log('MFA verification successful');
        toast({
          title: "Login Successful",
          description: "Redirecting to dashboard...",
        });
        window.location.href = '/dashboard';
      } else {
        console.log('Additional steps required after MFA:', nextStep.signInStep);
      }
    } catch (error: any) {
      console.error('MFA verification error:', error);
      
      let errorMessage = "Invalid verification code. Please try again.";
      
      if (error?.name === 'CodeMismatchException') {
        errorMessage = "The verification code is incorrect. Please check and try again.";
      } else if (error?.name === 'ExpiredCodeException') {
        errorMessage = "The verification code has expired. Please request a new one.";
      } else if (error?.message) {
        errorMessage = error.message;
      }
      
      toast({
        title: "Verification Failed",
        description: errorMessage,
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