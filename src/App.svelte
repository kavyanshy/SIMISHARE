<script>
  import svelteLogo from './assets/svelte.svg'
  import viteLogo from '/vite.svg'
  import Top from './lib/Top.svelte';
  import { SvelteUIProvider } from '@svelteuidev/core';
  import Header from './components/Header.svelte';
  import { Router, Link, Route } from "svelte-routing";
  import Home from './pages/Home.svelte';
  import Watch from './pages/Watch.svelte';
</script>

<main>
  <Router url="">
    <SvelteUIProvider>
    <div>
      <Route path="about" component="{Header}" />
      <Route path="/"><Home/></Route>
      <Route path="/watch/:id"><Watch/></Route>
    </div>
  </SvelteUIProvider> 
  </Router>
</main>

<style>
  
</style>
