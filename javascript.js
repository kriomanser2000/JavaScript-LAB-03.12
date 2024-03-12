/*
. Напишіть функцію, яка приймає 2 рядки та порівнює їх
довжину. Функція повертає 1, якщо в першому рядку
більше символів, ніж у другому; -1 – якщо у другому біль-
ше символів, ніж у першому; 0 – якщо рядки однакової
довжини.
2. Напишіть функцію, яка переводить у верхній регістр пер-
ший символ переданого рядка.
3. Напишіть функцію, яка підраховує кількість голосних
літер у переданому рядку.
4. Напишіть функцію для перевірки спаму в переданому
рядку. Функція повертає true, якщо рядок містить спам.
Спамом вважати наступні слова: 100% безкоштовно ,
збільшення продажів, тільки сьогодні, не видаляйте, ххх.
Функція має бути нечутливою до регістру.
5. Напишіть функцію скорочення рядка. Функція приймає
рядок та його максимальну довжину. Якщо довжина ряд-
ка більша, ніж максимальна, необхідно відкинути зайві
символи, додавши замість них трикрапку.
Наприклад: truncate("Hello, world!", 8) має повернути
"Hello...". 6. Напишіть функцію, яка перевіряє, чи є переданий рядок
паліндромом.
7. Напишіть функцію, яка підраховує кількість слів у речен-
ні.
8. Напишіть функцію, яка повертає найдовше слово з речен-
ня.
9. Напишіть функцію, яка підраховує середню довжину
слова у реченні.
10. Напишіть функцію, яка приймає рядок і символ і виводить
індекси, за якими знаходиться цей символ у рядку. Також
виведіть, скільки разів зустрічається цей символ у рядку.
*/
//--
//1.
function compareStrings(str1, str2) 
{
    if (str1.length > str2.length) 
    {
        return 1;
    } 
    else if (str1.length < str2.length) 
    {
        return -1;
    } 
    else 
    {
        return 0;
    }
}

//2.
function capitalizeFirstLetter(str) 
{
    return str.charAt(0).toUpperCase() + str.slice(1);
}

//3.
function countVowels(str) 
{
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for (let char of str) 
    {
        if (vowels.includes(char)) 
        {
            count++;
        }
    }
    return count;
}

//4.
function checkForSpam(str) 
{
    const spamWords = ['100% free', 'increase in sales', 'only today', 'dont delete', 'xxx'];
    const lowerCaseStr = str.toLowerCase();
    return spamWords.some(spamWord => lowerCaseStr.includes(spamWord));
}

//5.
function truncate(str, maxLength) 
{
    if (str.length > maxLength) 
    {
        return str.slice(0, maxLength - 3) + '...';
    } 
    else 
    {
        return str;
    }
}

//6.
function isPalindrome(str) 
{
    const reversed = str.split('').reverse().join('');
    return str.toLowerCase() === reversed.toLowerCase();
}

//7.
function countWords(sentence) 
{
    return sentence.split(/\s+/).length;
}

//8.
function longestWord(sentence) 
{
    const words = sentence.split(/\s+/);
    let longest = '';
    for (let word of words) 
    {
        if (word.length > longest.length) 
        {
            longest = word;
        }
    }
    return longest;
}

//9.
function averageWordLength(sentence) 
{
    const words = sentence.split(/\s+/);
    const totalLength = words.reduce((acc, curr) => acc + curr.length, 0);
    return totalLength / words.length;
}

//10.
function findCharacterIndices(str, char) 
{
    const indices = [];
    let count = 0;
    for (let i = 0; i < str.length; i++) 
    {
        if (str[i] === char) 
        {
            indices.push(i);
            count++;
        }
    }
    return { indices: indices, count: count };
}
console.log(compareStrings("apple", "banana"));
console.log(capitalizeFirstLetter("hello"));
console.log(countVowels("JavaScript"));
console.log(checkForSpam("Get 100% free stuff now!"));
console.log(truncate("Hello, world!", 8));
console.log(isPalindrome("level"));
console.log(countWords("Hello world!"));
console.log(longestWord("JavaScript is awesome"));
console.log(averageWordLength("JavaScript is awesome"));
console.log(findCharacterIndices("hello", "l"));
