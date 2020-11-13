/*
A valid parentheses string is either empty (""), "(" + A + ")", or A + B, where A and B are valid parentheses strings,
and + represents string concatenation.

For example, "", "()", "(())()", and "(()(()))" are all valid parentheses strings.
A valid parentheses string S is primitive if it is nonempty, and there does not exist a way to split it into S = A+B,
with A and B nonempty valid parentheses strings.

Given a valid parentheses string S, consider its primitive decomposition:
S = P_1 + P_2 + ... + P_k, where P_i are primitive valid parentheses strings.

Return S after removing the outermost parentheses of every primitive string in the primitive decomposition of S.



Example 1:
Input: "(()())(())"
Output: "()()()"
Explanation:
The input string is "(()())(())", with primitive decomposition "(()())" + "(())".
After removing outer parentheses of each part, this is "()()" + "()" = "()()()".

Example 2:
Input: "(()())(())(()(()))"
Output: "()()()()(())"
Explanation:
The input string is "(()())(())(()(()))", with primitive decomposition "(()())" + "(())" + "(()(()))".
After removing outer parentheses of each part, this is "()()" + "()" + "()(())" = "()()()()(())".

Example 3:
Input: "()()"
Output: ""
Explanation:
The input string is "()()", with primitive decomposition "()" + "()".
After removing outer parentheses of each part, this is "" + "" = "".

Note:
S.length <= 10000
S[i] is "(" or ")"
S is a valid parentheses string
*/

/**
 * @param {string} S
 * @return {string}
 */
const removeOuterParentheses = S => {
    let lvl = 0, res = '';

    for (let i = 1; i < S.length; i++) {
        if (S[i - 1] === '(' && S[i] === '(') lvl++;
        if (S[i - 1] === ')' && S[i] === ')') lvl--;

        if (lvl > 0) {
            res += S[i];
        }
    }

    return res;
};

/*
The main logic behind this algo is to count levels of the parentheses, starting from level 0 to n.
Since we want to exclude the outermost parentheses, then we only need to exclude parentheses at level 0.
Other than that, we want to insert them to our answer.

We only increase/decrease the level if we find a consecutive parentheses.
For example if we find "((", that means we need to increase the parentheses' level
otherwise if we find "))" then we decrease the level.

Time complexity = O(n)
Space complexity = O(n)
 */

// CODE BELOW IS FROM DISCUSSIONS ON LEET
/*
const removeOuterParentheses = S =>
  Array.prototype.reduce
    .call(
      S,
      ({ open, result }, paren, idx) => {
        if (paren === '(' && open++) result.push(paren)
        if (paren === ')' && --open) result.push(paren)
        return { open, result }
      },
      { open: 0, result: [] }
    )
    .result.join('')
 */
