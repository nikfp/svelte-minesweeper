<script lang="ts">
    import { update_slot } from "svelte/internal";

  export let title: string;
  export let upFunction: (args: any[]) => any;
  export let downFunction: (args: any[]) => any;

  export let canUp: boolean;
  export let canDown: boolean;

  export let value: number;
</script>


<div class="adjuster">
  <p>{title}</p>
  <div class="controls">
  <button class="up" on:click={() => upFunction()} disabled={!canUp}>Up</button>
    <div class="number">{value}</div>
  <button class="down" on:click={() => {
    console.log("Adjuster down clicked");
    downFunction()
  }} disabled={!canDown}>Dn</button>
  </div>
  </div>

  <style>

  .adjuster {
    max-height: 100%;
    max-width: 100%;
    margin: 0;
  }

  p {
    margin: 0;
  }

  .controls {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  </style>
