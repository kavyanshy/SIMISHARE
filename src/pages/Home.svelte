<script>
import {Motion} from "svelte-motion"
import { Chip, Group, Input, InputWrapper, TextInput } from '@svelteuidev/core';
import Carousel from "../components/Carousel.svelte";
import Header from "../components/Header.svelte";
import { shortcut } from '@svelte-put/shortcut';
import Card from "../components/Card.svelte";
  import CardContainer from "../lib/CardContainer.svelte";
  import { Affix, Button, Text,Modal,Tooltip } from '@svelteuidev/core';
	import { ArrowUp } from 'radix-icons-svelte';
  import { fly } from 'svelte/transition';

  let scrollY = 0;
  let search= false
  let opened = false

  function handleK(){
    search=!search
  }

</script>
<svelte:window on:scroll={() => scrollY = window.scrollY } use:shortcut={{
  trigger: {
    key: ";",
    callback: handleK,
  },
}}

se:shortcut={{
  trigger: {
    key: "1",
    callback: handleK,
  },
}}


/>
<main>
  <Modal opened={search} on:close={()=>search=false} >
    <div style="margin: 0px;">
      <TextInput label="search" description="for ex:chainsaw man"/>
      <Group>
        <Chip  color="red" variant="filled" size="xs">Click me</Chip>
      </Group>
      <button on:click={()=>opened=true}>dd</button>
      <CardContainer/>
      
    </div>
  </Modal>
  <Modal opened={opened} on:close={()=>opened=false}>
    <div style="margin: 0px;">
      <h2>dss</h2>
    </div>
  </Modal>
    <Header/>
    
<Carousel></Carousel>
<Affix position={{ bottom: 20, right: 20 }}>
  {#if scrollY > 0}
      <div transition:fly={{ y: 20, duration: 250 }} class="mmp">
        <Tooltip label="scroll up">

          <Button on:click={() => window.scrollTo(0, 0)} override={{backgroundColor:"Wheat"}}>
            
            <ArrowUp color={"black"}/>
            
          </Button>
        </Tooltip>
      </div>
  {/if}
</Affix>

<CardContainer />
<CardContainer url="https://api.consumet.org/anime/gogoanime/top-airing"/>
<CardContainer/>
<CardContainer/>




</main>

<style>
  .mmp{
    box-shadow: 0px 0px 20px 3px black;
  }
</style>