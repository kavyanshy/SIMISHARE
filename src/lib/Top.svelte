<script>
import {Button,Group} from "@svelteuidev/core"
import {Motion} from "svelte-motion"
import { Input, InputWrapper } from '@svelteuidev/core';
var i = 1

</script>


<main>
    
    <div>
        <Motion animate={{x:i}} onHoverStart={()=>i=2} onHoverEnd={()=> i=1} 
            transition={{duration:.5}}
            dragConstraints={{ left: -60, right: 60 ,up :100,down:30}}
            drag
            let:motion>
            <button use:motion>name

            </button>
            
        </Motion>
        <Button class="name">dsk</Button>
    </div>
    <Input></Input>

</main>

<style>
    .name{
        background-color: antiquewhite;
    }
</style>