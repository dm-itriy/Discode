/* Extremely minimal viable product */


let Problems = [
    {
        prompt: "Write a program that prints \"Hello World!\"",
        input: "None"
    },
    {
        prompt: "Given an integer __n__ from standard input, print out all even numbers __i__ where 0<=i<=n on separate lines.",
        input: 25
    },
    {
        prompt: "Given an integer from standard input, print 1 if it\'s prime and 0 if it\'s not.",
        input: 5
    },
    {
        prompt: "You are given __n__ words. Some words may repeat. For each word, output its number of occurrences.\n" + 
        "The output order should correspond with the input order of appearance of the word.\n" +
        "Input Format\n"+
        "The first line contains the integer, __n__ .\n" +
        "The next __n__ lines each contain a word.\n" +
        "Output 2 lines.\n" +
        "On the first line, output the number of distinct words from the input.\n"+
        "On the second line, output the number of occurrences for each distinct word according to their appearance in the input.\n",
        input: "4\nbcdef\nabcdefg\nbcde\nbcdef\n"
    },
    {
        prompt: "You are climbing a stair case. It takes n steps to reach to the top.\n" +
        "Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?\n",
        input: "3"
    }
]

module.exports = Problems