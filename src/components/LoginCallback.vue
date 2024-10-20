<template>
  <div>
    <h2>Logging in...</h2>
  </div>
</template>

<script>
export default {
  created() {
    this.$auth.handleLoginRedirect()
      .then(() => {
        // Optionally, you can navigate to a specific route after login
        this.$router.push({ path: '/profile' });
      })
      .catch(err => {
        console.error('Login error:', err);
      });
  }
};
</script>