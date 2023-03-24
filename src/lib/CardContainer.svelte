<script>
    
  import { Button } from '@svelteuidev/core';
import { onMount } from 'svelte';
  import Card from '../components/Card.svelte';
    var  name = []
    onMount(async()=>{
        const res = await fetch(url)
        let x = await res.json()
        name = x.results
        console.log("done")
        
    })
    export let url = "https://api.consumet.org/anime/gogoanime/recent-episodes"

    var box ;
    var i =100;
</script>

<main>
    <h2>Popular</h2>
    <Button on:click={()=>{box.scroll(i,i),i+100,console.log(i) }}>dsa</Button>
  
    <div class="cardc" bind:this={box}>
       
        {#each name as i }
        <Card image={i.image} title={i.title} ep={i.episodeNumber}></Card>
        {/each}
    </div>
</main>

<style>
    .cardc{
        display: flex;
        overflow-x: scroll;
        cursor:grab;
        overflow-y: hidden;
    }
    h2{
        margin: 0px;
        color: aliceblue;
        font-size: 30px;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    }

</style>