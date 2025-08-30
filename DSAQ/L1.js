// // Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.
// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [9,4]
// Explanation: [4,9] is also accepted.

let nums1 = [1,2,2,1] ;
let nums2 = [2 , 2];
function intersection(nums1, nums2)
{
    let array1 =  [... new Set(nums1)];
    let array2 = [... new Set(nums2)];
    let newArray = [];
    let K = 0;
    
    for(let i = 0; i < array1.length; i++)
    {
        for(let j = 0; j < array2.length; j++)
        {
            if(array1[i] === array2[j])
            {
                newArray[K] = array1[i]
                K++;
            }
        }
    }
    return newArray;
    
}
console.log(intersection(nums1, nums2));