<script lang="ts">
  import Adjuster from "./Adjuster.svelte";
  import { game } from "./stores/game";
  import { allowers } from "./stores/allowers";
</script>

<Adjuster
  title="Board Size"
  canDown={$allowers.canDecreaseSize}
  canUp={$allowers.canIncreaseSize}
  downFunction={() => game.decreaseSize()}
  upFunction={() => game.increaseSize()}
  value={$game.size}
/>
