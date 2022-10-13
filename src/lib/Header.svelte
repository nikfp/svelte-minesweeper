<script>
  import BoardSize from "./BoardSize.svelte";
    import Minecount from "./Minecount.svelte";
</script>

<header>
  <Minecount />
  <BoardSize />
</header>

<style>
  header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 15vh;
  }
</style>
