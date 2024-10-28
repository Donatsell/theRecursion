function factorial(n) {
    let ans = 1;

    // generate factorial
    if (n === 0)
        return 1;
    for (let i = 2; i <= n; i++)
        ans = ans * i;
    return ans;
}

// Jangan hapus kode di bawah ini!
export default factorial;
