function winnerOfGame(colors: string): boolean {
    let a = colors.split("B").filter((str) => str !== "" && str.length >= 3);
    let b = colors.split("A").filter((str) => str !== "" && str.length >= 3);

    let wa = 0,
        wb = 0;

    a.forEach((n) => {
        wa += n.length - 2;
    });

    b.forEach((n) => {
        wb += n.length - 2;
    });

    return wa > wb;
}

console.log(
    winnerOfGame("ABBBBBBBAAA"),
    winnerOfGame("AABBBBBBBAAAABBBBBBBAAABBBBBBBAAA"),
    winnerOfGame("AAABABB"),
    winnerOfGame("AA")
);
