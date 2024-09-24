function removeOuterParentheses(s) {
    const stack = [];
    let result = '';
    let primitiveStart = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            if (stack.length === 0) {
                primitiveStart = i;  // Start of a new primitive
            }
            stack.push('(');
        } else if (s[i] === ')') {
            stack.pop();
            if (stack.length === 0) {
                // We've found a complete primitive
                result += s.slice(primitiveStart + 1, i);  // Exclude outermost parentheses
            }
        }
    }

    return result;
}

// Example Usage:
const s = "(()())(())";
console.log(removeOuterParentheses(s));  // Output: "()()()"
