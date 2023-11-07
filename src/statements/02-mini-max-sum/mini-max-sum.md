# Mini-Max Sum

Given five positive integers, find the minimum and maximum values that can be
calculated by summing exactly four of the five integers. Then return the
respective minimum and maximum values as an an array.

**Example**

```ts
const arr = [1, 3, 5, 7, 9];
```

The minimum sum is `1 + 3 + 5 + 7 = 16` and the mximum sum is
`3 + 5 + 7 + 9 = 24`. The function must return `[16, 24]`.

## Function description

```ts
type MiniMaxSumFn = (
	array: [number, number, number, number, number],
) => [number, number];
```
