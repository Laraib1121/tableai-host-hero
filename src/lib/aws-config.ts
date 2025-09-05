export const awsConfig = {
  Auth: {
    Cognito: {
      userPoolId: 'us-east-1_LfdhyenqW',
      userPoolClientId: '6ordovl4jktful0uqbfg0nnphu',
      region: 'us-east-1',
      signUpVerificationMethod: 'code' as const,
      loginWith: {
        email: true,
        username: false,
        phone: false
      },
      userAttributes: {
        email: {
          required: true
        }
      }
    }
  }
};

export default awsConfig;