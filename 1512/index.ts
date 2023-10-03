function numIdenticalPairs(nums: number[]): number {
    let res = 0;

    nums.forEach((n, i) => {
        nums.forEach((m, j) => {
            if (i < j && n == m) {
                res += 1;
            }
        });
    });

    return res;
}
