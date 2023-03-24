<script>
    import Carousel from 'svelte-carousel'
    import { fade } from 'svelte/transition';
    import { fly } from 'svelte/transition'
    import {Motion} from "svelte-motion"

    import { backOut } from 'svelte/easing'
    import { beforeUpdate, afterUpdate } from 'svelte';
    import { inview } from 'svelte-inview';
    import VideoF from './VideoF.svelte';
    import { Player, Ui,Video,DefaultControls ,usePlayerStore,Youtube} from '@vime/svelte';
    let isInView;
    const options = {};
    import "hover-video-player";
  import { Button } from '@svelteuidev/core';
  let playing_video = "xW9DJTvB3NI"
    let player;
    let carousel; // for calling methods of the carousel instance
    const handleNextClick = () => {
      carousel.goToNext()
    }

    var height = window.innerHeight
    var color = "red"
    var visible = "hidden"

    var name = [{
      
      "image":"https://wallpapercave.com/wp/wp1837539.jpg",
      "title":"Attack on titan"
      
  
  },

  {
    "image":"https://c4.wallpaperflare.com/wallpaper/555/163/727/anime-demon-slayer-kimetsu-no-yaiba-zenitsu-agatsuma-hd-wallpaper-preview.jpg"
    ,"url":"FTma9DCnlI4"
  },
  {
    "image":"https://c4.wallpaperflare.com/wallpaper/249/973/174/anime-jujutsu-kaisen-yuji-itadori-hd-wallpaper-preview.jpg"
  },
  {
    "image":"https://c4.wallpaperflare.com/wallpaper/682/435/620/naruto-anime-uzumaki-naruto-jiraiya-naruto-shippuuden-hd-wallpaper-preview.jpg"
    ,"title":"Naruto"
  },
  {
    "image":"https://c4.wallpaperflare.com/wallpaper/965/883/624/manga-one-piece-wallpaper-preview.jpg"
    ,"title":"One Piece"
  }
]
var index =0 
var canplay = true

  </script>
<main>

  <div class="vieo1" use:inview={options}
  
  on:inview_enter={() => setTimeout(()=>{visible="visible",player.play(),console.log("name")},2000)}
  on:inview_leave={()=>player.pause()}>
  <div class="rtz">
    <h1 in:fly={{ y: 100,
      delay: 300 ,
      easing: backOut
}}>name
    </h1>
  </div>
    <Motion animate={{visibility:visible}} 
      transition={{duration:.2}}
     
      let:motion>
      <div use:motion>
        <Player  bind:this={player}>
          <Youtube videoId={playing_video} />
        
          <!-- ... -->
        </Player>
      </div>
    </Motion>
  </div>
  
  <Carousel
    bind:this={carousel}
    arrows={false}
    autoplay
    on:pageChange={
      e=>{{index = e.detail,playing_video=name[e.detail].url}}
    }
    autoplayDuration={40000}
   
  >

  {#each name as i}
    
  <div  
  >
  
  


  <!-- <div class="video1">
  <hover-video-player innerWidth="100%">
    <video src="https://media.vimejs.com/720p.mp4" muted loop playsinline />
    <img
      src={i.image}
      class="paused-overlay"
      slot="paused-overlay"
    />
  </hover-video-player>
</div> -->
    <div style="height: {height}px;" >
      <div class="title" style="top: {(height/4)}px;">
        <h1 in:fly={{ y: 100,
          delay: 300 ,
          easing: backOut
}}>{i.title}
        </h1>
      </div>
      <img src={i.image} class="img1" />
    </div>
  </div>
  {/each}
  
  </Carousel>
  </main>

  <div class="bg1" style="height: {height*2}px;">
    <img  transition:fade src={name[index].image}/>
  </div>
  <Button on:click={()=>{visible="visible",player.play()}}>name</Button>
  <Button on:click={()=>{visible="visible",player.play()}}>name</Button>
  <Button on:click={()=>{visible="visible",player.play()}}>name</Button>

  <Button on:click={()=>{playing_video="KFOejvMrsU",console.log("uui")}}>name</Button><style>
    img{
      min-width: 100%;
      min-height: 100%;
    }

    .title{
      position: absolute;
      text-overflow: clip;
      width: 200px;
      margin-left: 30px;
    }
    h1{
      font-family: 'Finlandica', sans-serif;
      color: aliceblue;
      font-size: 100px;
      z-index: 3000;
      position:absolute;
    }
    .bg1{
      position: absolute;
      top:0px;
      width: 100%;
      
      filter: blur(8px);
  -webkit-filter: blur(8px);
      background-color: aliceblue;
      z-index: -1;
      opacity: 30%;
    }
    hover-video-player:not(:defined) {
    /* Hide the hover-video-player element until the component is loaded and defined
        so we can avoid getting a flash of unstyled content */
    display: none;
  }

  hover-video-player img[slot="paused-overlay"] {
    object-fit: cover;
  }
  .video1{
      position: absolute;
      width: 100%;
      
    }
    .vieo1{
      position: absolute;
      z-index: 3;
      height: 100%;
      width: 100%;
    }
    .rtz{
      
      height: 112%;
      width: 100%;
      position: absolute;
      z-index: 20;
     
      -webkit-box-shadow: inset 10px 10px 94px 61px rgba(0,0,0,1);
-moz-box-shadow: inset 10px 10px 94px 61px rgba(0,0,0,1);
box-shadow: inset 10px 10px 94px 61px rgba(0,0,0,1);;
    }
  </style>