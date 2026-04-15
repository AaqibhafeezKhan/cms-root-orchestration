export default `
  <single-spa-router>
    <route path="auth">
      <application name="cms-angular-auth"></application>
    </route>
    <route path="editorial">
      <application name="cms-react-editorial"></application>
    </route>
    <route path="collab">
      <application name="cms-svelte-collab"></application>
    </route>
    <route path="media">
      <application name="cms-vue-media"></application>
    </route>
  </single-spa-router>
`;
