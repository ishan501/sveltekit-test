<script>
  export let data;

  const { hero } = data;

  console.log(hero);
</script>

<ul>
    <li>
      <h1>{hero.title}</h1>
      <h1>{hero.description}</h1>
    </li>
</ul>
