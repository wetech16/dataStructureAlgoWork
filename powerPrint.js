// (function main() {
//     function isPowerOfTwo(num) {
//         let i = 1;
//         while(i < num) {
//             i *= 2
//         }
//         return i == num
//     }

//     function powerPrint(n) {
//         for (let i = 1; i < n; i++) {
//             isPowerOfTwo(i) ? console.log("POWER") : console.log(i)
//         }
//     }
//     powerPrint(10)
// })()
(function main() {

    function powerPrint(n) {
        function powerTwoTable (n) {
            let hash = {}
            let i = 0
            let powerValue = Math.pow(2,i)
            while(powerValue < n) {
                powerValue = Math.pow(2,i)
                hash[powerValue] = i + 1;
                i++
            }
            return hash
        }

        let hash = powerTwoTable(n)
        console.log(hash)
        for (let i = 1; i< n; i++) {
            hash[i] ? console.log("power") : console.log(i)
        }
    }

    powerPrint(10)
})()