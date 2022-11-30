import * as env from "dotenv";
console.log(env.config());

describe('My first test', () => {
    test('Test 1', () => {
        const a = 1;
        const b = 2;

        const expectedAnswer = 3;

        const answer = a + b;

        expect(expectedAnswer).toBe(answer);
    });

    
});