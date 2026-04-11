export default `
  <single-spa-router>
    <route path="editorial">
      <application name="cms-react-editorial"></application>
    </route>
    <route path="media-library">
      <application name="cms-vue-media"></application>
    </route>
    <route path="role-access">
      <application name="cms-angular-auth"></application>
    </route>
    <route path="real-time-editor">
      <application name="cms-svelte-collab"></application>
    </route>
  </single-spa-router>
`;
