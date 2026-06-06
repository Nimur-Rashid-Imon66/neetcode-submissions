class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const fequMaps = {};
        nums.forEach((it) => {
            if (isNaN(fequMaps[it])) {
                fequMaps[it] = 1;
            } else {
                fequMaps[it]++;
            }
        });
        const ans = [];
        console.log(fequMaps);
        const sortedObj = Object.keys(fequMaps).sort((a, b) => fequMaps[b] - fequMaps[a]);
        console.log(sortedObj);
        for (const key in sortedObj) {
            k--;
            if (k < 0) break;
            ans.push(sortedObj[key]);
        }
        return ans;
    }
}
