function winnerOfGame(colors: string): boolean {
    let wa = colors
        .split("B")
        .filter((str) => str !== "" && str.length >= 3)
        .map((str) => str.length - 2)
        .reduce((a, v) => a + v, 0);
    let wb = colors
        .split("A")
        .filter((str) => str !== "" && str.length >= 3)
        .map((str) => str.length - 2)
        .reduce((a, v) => a + v, 0);

    return wa > wb;
}

console.log(
    winnerOfGame("ABBBBBBBAAA"),
    winnerOfGame("AABBBBBBBAAAABBBBBBBAAABBBBBBBAAA"),
    winnerOfGame("AAABABB"),
    winnerOfGame("AA")
);
