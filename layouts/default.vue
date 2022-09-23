<template>
  <div class="h-screen">
    <BaseHeader />
    <main class="main bg-light dark:bg-dark dark:text-white">
      <Nuxt />
    </main>
    <BaseFooter class="md:hidden" />
  </div>
</template>

<style>
.main {
  height: calc(100% - var(--header) - var(--footer));
}

@media (min-width: 768px) {
  .main {
    height: calc(100% - var(--header));
  }
}

html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
.title {
  font-family: 'Indie Flower', 'Source Sans Pro', -apple-system,
    BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 50px;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 30px;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
