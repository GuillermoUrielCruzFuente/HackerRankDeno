# Breaking the Records

Maria plays college basketball and wants to go pro. Each season she maintains a
record of her play. She tabulates the number of times she breaks her season
record for most points and least points in a game. Points scored in the first
game establish her record for the season, and she begins counting from there.

## Example

```ts
const scores = [12, 24, 10, 24];
```

Scores are in the same order as the games played. She tabulates her results as
follows:

| Games | Scores | Minimum | Maximum | Count min | Count max |
| ----- | ------ | ------- | ------- | --------- | --------- |
| 0     | 12     | 12      | 12      | 0         | 0         |
| 1     | 24     | 12      | 24      | 0         | 1         |
| 2     | 10     | 10      | 24      | 1         | 1         |
| 3     | 24     | 10      | 24      | 1         | 1         |

Given the scores for a season, determine the number of times Maria breaks her
records for most and least points scored during the season.

## Function description

```ts
/**
 * An array with the numbers of times she broke her records.
 *
 * Index 0 is for breaking most points records,
 * and index 1 is for breaking least points records.
 */
type MinMaxRecordTuple = [number, number];

/**
 * @param scores points scored per game
 */
type BreakingTheRecordsDef = (scores: number[]) => MinMaxRecordTuple;
```
