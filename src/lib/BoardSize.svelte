<script lang="ts">
  import Adjuster from './Adjuster.svelte';
import { allowers, game } from './stores/game';

</script>

<Adjuster 
  title="Board Size" 
  canDown={$allowers.canDecreaseSize} 
  canUp={$allowers.canIncreaseSize} 
  downFunction={() => game.decreaseSize()} 
  upFunction={() => game.increaseSize()} 
  value={$game.size}
/>
