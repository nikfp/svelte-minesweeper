<script lang="ts">
  import Adjuster from "./Adjuster.svelte";
  import { game } from "./stores/game";
  import { allowers } from "./stores/allowers";
</script>

<Adjuster
  title="Mine Count"
  value={$game.mineCount}
  canUp={$allowers.canIncreaseMines}
  upFunction={game.increaseMines}
  canDown={$allowers.canDecreaseMines}
  downFunction={game.decreaseMines}
/>
