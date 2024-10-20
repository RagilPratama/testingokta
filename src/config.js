const { CLIENT_ID, ISSUER } = process.env

export default {
  oidc: {
    clientId: CLIENT_ID,
    issuer: ISSUER,
    redirectUri: window.location.origin + '/login/callback',
    postLogoutRedirectUri: window.location.origin + '/logout/callback', // Ensure this is registered in Okta
    scopes: ['openid', 'profile', 'email']
  },
  resourceServer: {
    messagesUrl: 'http://localhost:8080/api/messages'
  }
}
