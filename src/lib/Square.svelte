<script lang="ts">
  import type {ISquare} from './stores/game'  

  export let square: ISquare;

  $: red = square.mine ? "red" : "";
</script>

<div class="{red}">{square.mine}</div>


  <style>

  .red {
    color: red;
  }
  </style>
