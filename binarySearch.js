(function main() {
    function binarySearch (searchArr, searchNum) {
        let startPt = 0;
        let endPt = searchArr.length -1;
        while(startPt <= endPt) {
            let midPt = Math.floor(startPt/2 + endPt/2);
            if(searchNum == searchArr[midPt]) return searchArr[midPt]
            else if(searchNum < searchArr[midPt]) endPt = midPt -1
            else startPt = midPt +1
        }
        return -1
    }
  let searchArr = [ 2,4,5,7,13,14,15,23, 26]
  let ans = binarySearch(searchArr, 7)
  console.log(ans)
})()