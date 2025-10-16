export const environment = {
  URL_BACKEND: 'http://localhost:3000/api',
  URL_FAKEAPI: 'https://fakestoreapi.com',
  URL_IP: 'https://api.ipify.org?format=json',
  TWILIO_ACTIVE: false,
  DAV: {
    BASEURL: 'http://54.91.70.251:4000',
    //BASEURL: 'http://localhost:3000',
    GRANT_TYPE: 'client_credentials',
    CLIENT_ID: 'B9lAAOSf5oyOXYNdrAoMB2YxpI0cAKXDgp5ol9NIQsGpxEGo',
    CLIENT_SECRET:
      'HfmvLkYR1hNWJ6ORnq5289IrGLRfeRz8GAAJkUea0J5wwTE3HVgzQqj2zH6AFULy',
    SCOPE: 'daviplata',
    NOTIFICATION_TYPE: 'API_DAVIPLATA',
    COMERCIO_ID: '0010203040',
    TERMINAL_ID: 'ESB10934',
    USER_TEST: { tipoDocumento: '01', numeroDocumento: '1134568019' },
    // USER_TEST: { tipoDocumento: '02', numeroDocumento: '786630' },
    // USER_TEST: { tipoDocumento: '04', numeroDocumento: '1389123506' },
  },
  BAN: {
    BASEURL: 'http://localhost:4001',
    // BASEURL: 'http://localhost:3001',
    GRANT_TYPE: 'client_credentials',
    CLIENT_ID: '4ae1448cf4c3c30ee0f03b3611fdbc68',
    CLIENT_SECRET: 'da22353d7d9d5dd2d1bb5ed9084e091a',
    SCOPE:
      'Product-balance:read:user TermsConditions:read:user TermsConditions-register:write:user Transfer-Intention:read:app Transfer-Intention:write:app',
    COMMERCE_URL: 'https://gateway.com/payment/route?commerce=Telovendo',
    CONFIRMATION_URL:
      'https://pagos-api-dev.tigocloud.net/bancolombia/callback',
  },
};
