# Plus Minus

Given an array of integers, calculate the ratios of its elements that are
positive, negative, and zero. Print the decimal value of each fraction on a new
line with **6** places after the decimal.

**Note:** This challenge introduces precision problems. The test cases are
scaled to six decimal places, though answers with absolute error of up to `10^4`
are acceptable.

**Example**

```ts
const testArray = [1, 1, 0, -1, -1];
```

There are **n=5** elements, two positives, two negatives, and one zero. Their
ratios are `2/5 = 0.400000`, `2/5 = 0.400000` and `1/5 = 0.200000`.

Function should return:

```ts
plusMinus(testArray); //["0.400000", "0.400000", "0.200000"]
```

## Function description

```ts
type PlusMinusFn = (array: number[]) => [string, string, string];
```
