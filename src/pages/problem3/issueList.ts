export const issues = [
  "Recomputing `getPriority` on every render instead of memoizing.",
  "Using inline functions inside map/filter which re-run every render.",
  "`useMemo` dependencies include prices but prices aren't used in sort/filter.",
  "Mapping `sortedBalances` twice (map → formatted, then map → JSX), extra iteration.",
  "Using index as key in map, which can cause rendering issues.",
  "Inefficient sorting inside useMemo with multiple `getPriority` calls.",
  " TypeScript unsafe indexing: `prices[b.currency]` without proper type checking.",
];
