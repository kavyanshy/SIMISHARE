<script>
    import { Badge, Button, Group ,Input,Modal,useSvelteUITheme } from '@svelteuidev/core';
    import {Motion} from "svelte-motion"
    import { onMount } from 'svelte';
    import { fade } from 'svelte/transition';
    import { Divider, Menu, Text } from '@svelteuidev/core';
    import { navigate} from "svelte-routing";
    let i = 1
    let hover =false
    let visibility = 0
    export let image = "https://picfiles.alphacoders.com/399/thumb-399521.png"
    export let title = "Attack On TITAN"
    export let ep ="N/A"
    export let date  = "2019"
    var opened = false
    const theme = useSvelteUITheme();
    const PrimaryButton = {
            '$$blue': '#228be6',
            transition: 'all 0.2s ease-in-out',
            '&:hover': {
                boxShadow: '0 4px 20px $$blue',
            },
        };
</script>
<main >
<div transition:fade>
    <Motion animate={{scale:i}} onHoverStart={()=>{i=1.1 ,hover =true}} onHoverEnd={()=> {i=1,hover=false}} 
        transition={{duration:.2}}
       
        let:motion>
        <Modal {opened} on:close={()=>opened=false} overlayOpacity={0.55}
            overlayBlur={3} title="anime info" size="xl" override={PrimaryButton}>
            <div style="display: flex;">
            <div class="back"style="background-image: url({image});"></div>
            <div style="display: flex; flex-direction:column">

                <h1>{title}</h1>
                <p>dsdsdasdsadsadsadasdsad</p>
            </div>
            </div>
            <Group position="right">
                <Button on:click={()=>navigate("/watch"+"/df")} >Watch now</Button>
                <Button>Add to list</Button>
            </Group>
        </Modal>
        
        <div class="card1" use:motion>
            {#if hover==true}
                <div class="">
                    <div class="card3"></div>
                    
                    <div class="info" on:click={()=>{opened=true}}>
                        <Group position="apart">
                            <h4>{date}</h4>
                            <h4>{ep}</h4>
                            
                        </Group>
                        <div class="title">

                            <h3>{title}</h3>
                        </div>
                           
                            
    
                               
                           
                    </div>
                    
                </div>
       
        {/if}
            <img src={image}/>
        </div>
        
    </Motion>
    </div>
</main>

<style>
    .card1{
        height: 300px;
        width: 200px;
        margin: 5px;
    }
    .card1 img{
        max-width: 100%;
        max-height: 100%;
    }
    .card3{
        height: 300px;
        width: 200px;
        position: absolute;
        z-index: 3;
        background-color: rgb(49, 49, 49);
        opacity: 80%;
       
        
        
    }
    .info{
        height: 300px;
        width: 200px;
        position: absolute;
        z-index: 4;
        cursor: pointer;
    }
    h3{
        font-family: 'Finlandica', sans-serif;
        font-size: 20px;
        color: aliceblue;
    }
    h4{
        font-family: 'Finlandica', sans-serif;
        font-size: 14px;
        color: rgb(200, 202, 204);
    }

    .title{
        text-align: center;
    }
    .back{
        background-color: aquamarine;
        width: 250px;
        height: 300px;
    }
</style>