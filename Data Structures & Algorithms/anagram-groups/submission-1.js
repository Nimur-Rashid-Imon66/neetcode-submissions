class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const maps = {};
        strs.forEach((val) => {
            const txt = val.split("").sort().join("");
            if (Array.isArray(maps[txt])) {
                maps[txt].push(val);
            } else {
                maps[txt] = [val];
            }
        });
        const ans = [];
        for (const key in maps) {
            ans.push(maps[key]);
        }
        return ans;
    }
}
