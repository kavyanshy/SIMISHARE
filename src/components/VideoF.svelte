<script>
 import { inview } from 'svelte-inview';
    import { Player, Ui,Video,DefaultControls ,usePlayerStore} from '@vime/svelte';
    let isInView;
    const options = {};
    let player;
    import { fade } from 'svelte/transition';
  import { onMount } from 'svelte';
    var height = window.innerHeight
    
    let pause=false
</script>

<main>
    <div class="video1" style="height: {height}px;" transition:fade use:inview={options} >
        <Player controls   bind:this={player} >
          <Video  crossorigin="" poster="https://media.vimejs.com/poster.png">
            <!-- These are passed directly to the underlying HTML5 `<video>` element. -->
            <!-- Why `data-src`? Lazy loading, you can always use `src` if you prefer.  -->
            <source data-src="https://media.vimejs.com/720p.mp4" type="video/mp4" />
            <track
              default
              kind="subtitles"
              src="https://media.vimejs.com/subs/english.vtt"
              srclang="en"
              label="English"
            />
          </Video>
        
          <Ui >
          </Ui>
        </Player>
      </div>
      
</main>
<style>
  .video1{
      position: absolute;
      width: 100%;
      
    }
    
</style>