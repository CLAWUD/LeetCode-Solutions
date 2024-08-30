function spirmatrixlOrder(matrix) {
    let a=[];
    let n=matrix.length;
    let m=matrix[0].length;
    
    let top=0;
    let bottom=n-1;
    let left=0;
    let right=m-1;
    while(top<=bottom && left<=right){
        for(let i=left;i<=right;i++){
            a.push(matrix[top][i]);
        }
        top++;
        for(let i=top;i<=bottom;i++){
            a.push(matrix[i][right])
        }
        right--;
        for(let i=right;i>=left;i--){
            a.push(matrix[bottom][i])
        }
        bottom--;
        for(let i=bottom;i>=top;i--){
            a.push(matrix[i][left])
        }
        left++;
    }
    return a;
}