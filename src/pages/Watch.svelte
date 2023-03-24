<script>
    import {Motion} from "svelte-motion"
    import { Input, InputWrapper } from '@svelteuidev/core';
  import Videoplayer from "../components/Videoplayer.svelte";
  import { fade } from 'svelte/transition';
</script>

<main  transition:fade>
    <Videoplayer/>
</main>