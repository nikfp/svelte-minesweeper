<script lang="ts">
  import Footer from "./lib/Footer.svelte";
  import GameBoard from "./lib/GameBoard.svelte";
  import Header from "./lib/Header.svelte";

  let x: number;
  let y: number;

  $: size = x > y ? y : x;
</script>

<svelte:window bind:innerWidth={x} bind:innerHeight={y} />
<div style="width: {size}px; height: {size}px;" class="game">
  <Header />

  <main>
    <GameBoard />
  </main>

  <Footer />
</div>

<style>
  .game {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
</style>
