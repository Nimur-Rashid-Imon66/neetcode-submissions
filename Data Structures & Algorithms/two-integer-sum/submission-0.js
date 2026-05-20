class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const maps = {};
        let ans;
        for (let idx = 0; idx < nums.length; idx++) {
            const val = nums[idx];
            const need = target - val;
            if (isNaN(maps[need])) {
                maps[val] = idx;
            } else {
                return [maps[need], idx];
            }
        }
    }
}
