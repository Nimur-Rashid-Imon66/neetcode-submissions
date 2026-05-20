class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const maps = {};
        let ans = false;
        nums.map((num,inx)=>{
            const x = `${num}`;
            isNaN(maps[x]) ? maps[x] = 1: maps[x]++; 
            // console.log(maps[x]);
            if( maps[x] > 1) ans =  true;
        })
        return ans;
    }
}
