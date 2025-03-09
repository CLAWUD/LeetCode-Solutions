/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    let stack = [];

    for (let i = 0; i < asteroids.length; i++) {
        let asteroid = asteroids[i];
        let destroyed = false;

        while (
            stack.length > 0 && 
            stack[stack.length - 1] > 0 && 
            asteroid < 0
        ) {
            let last = stack[stack.length - 1];

            if (last + asteroid === 0) { 
                stack.pop();
                destroyed = true;
                break;
            } else if (last + asteroid < 0) { 
                stack.pop();
            } else {
                destroyed = true;
                break;
            }
        }

        if (!destroyed) {
            stack.push(asteroid);
        }
    }

    return stack;
};



