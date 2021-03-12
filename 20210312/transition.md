# Exercice 3

## Comment fonctionnent les transitions en D3 et en svelte ?

### D3

Les transitions se gèrent avec la fonction transition().

Exemple :

```js
rect
    .transition()
    .duration(1000)
    .attr('y', d => yScale(d[key]))
    .attr('height', d => HEIGHT - MARGIN_BOTTOM - yScale(d[key]))
```



### Svelte

Les transitions se gèrent avec la fonction transform().

Exemple :

```svelte
<svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`}>
  <g transform={`translate(${MARGIN / 2}, 0)`}>
    {#each DATA as d, i}
      <Baton d={d} i={i} key={key} />
    {/each}
  </g>
</svg>
```

