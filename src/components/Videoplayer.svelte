<script>
     import {animate, Motion} from "svelte-motion"
    import { Player, Ui ,Video,DefaultUi,Controls,PlaybackControl,Hls} from '@vime/svelte';
  import { Button, ThemeIcon } from "@svelteuidev/core";
  import { Gear,Home } from 'radix-icons-svelte';
  import { navigate} from "svelte-routing";
  import { onMount } from 'svelte';

    var visi = "hidden"
    var name =[]
    onMount(async()=>{
        const res = await fetch("https://api.consumet.org/anime/gogoanime/info/spy-x-family")
        let x = await res.json()
        name = x.episodes
        
    })


    let i =1
    let n =1
    const width = window.innerWidth
    let xname = width
    let hls_inpt = "https://tc-030.astar-cdn.com/1ab5d45273a9183bebb58eb74d5722d8ea6384f350caf008f08cf018f1f0566d0cb82a2a799830d1af97cd3f4b6a9a81ef3aed2fb783292b1abcf1b8560a1d1aa308008b88420298522a9f761e5aa1024fbe74e5aa853cfc933cd1219327d1232e91847a185021b184c027f97ae732b3708ee6beb80ba5db6628ced43f1196fe/f967ac6e1a055f4491cc97e76c3394df/ep.1.1677625152.360.m3u8"
    async function getep(e){
        const res = await fetch("https://www026.anifastcdn.info/videos/hls/QctYt1_4J96PZHvJj_97jQ/1679657089/25615/027e9529af2b06fe7b4f47e507a787eb/ep.220.1677648482.m3u8")
        let x = await res.json()
        console.log(x.jk)
    }
    let hlsConfig ={}

</script>

<main>

    <Motion let:motion animate={{visibility:visi}} transition={{duration:0.9 }}>
        <div class="top" use:motion trasition:fade>
            <Button ripple on:click={()=>navigate("/")} override={{margin:3,backgroundColor:"Black",borderRadius:200,opacity:"50%"}}><Home/></Button>
            <Button ripple override={{margin:3,backgroundColor:"Black",borderRadius:200,opacity:"50%"}} on:click={()=> {if (n%2==0) { xname=width} else{xname=width-530} n++}}><Gear/></Button>
            <Button ripple override={{margin:3,backgroundColor:"Black",borderRadius:200,opacity:"50%"}}><Gear /></Button>
        </div>
        
    </Motion>

    <Motion let:motion animate={{visibility:visi,x:xname}} transition={{duration:0.9 }}>
        <div use:motion class="name">
            {#each name as i}
                <Button on:click={getep(i.id)}>{i.id}</Button>
            {/each}
        </div>
    </Motion>

   

    

    <div class="play">

        <Player autoplay={true}  on:vmControlsChange={()=>{ if (i%2==0) { visi="hidden"} else{visi="visible"} i++ }} >
            <!-- Provider component is placed here. -->
            
            <Hls crossorigin="https://anihdplay.com" version="latest" config="{hlsConfig}" poster="/media/poster.png">
                <source data-src="https://www026.anifastcdn.info/videos/hls/QctYt1_4J96PZHvJj_97jQ/1679657089/25615/027e9529af2b06fe7b4f47e507a787eb/ep.220.1677648482.m3u8" type="application/x-mpegURL" />
              </Hls>
            <DefaultUi>
                
            </DefaultUi>
        </Player>
    </div>
    </main>

<style>
    .top{
        width: 3%;
        padding: 10px;
        display: flex;
        position: absolute;
        z-index: 1200;
        flex-direction: row;
        position: absolute;
        top:95%
        
        

    }
    
    .name{
        width: 400px;
        height: 100%;
        background-color: rgb(209, 27, 27);
        position: absolute;
        z-index: 1000;
        margin-left: 100px;
        margin-top: 30px;
        
    }
    .play{
        height: 90%;
    }
</style>