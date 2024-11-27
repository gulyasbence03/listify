/**
 * Shuffles the elements of an array in place using the Fisher-Yates algorithm.
 *
 * This function randomly shuffles the elements of the provided array of strings. The shuffle is performed in place, meaning
 * the original array is modified. The function returns the shuffled array.
 *
 * @param {string[]} array - The array of strings to be shuffled.
 * @returns {string[]} The shuffled array of strings.
 */
export const shuffleArray = (array: string[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

/**
 * Removes duplicate elements from an array of strings.
 *
 * This function iterates through the provided array and returns a new array with only unique values. Duplicates are removed.
 *
 * @param {string[]} arr - The array of strings from which duplicates should be removed.
 * @returns {string[]} A new array containing only the unique values from the original array.
 */
export const removeDuplicates = (arr: string[]): string[] => {
  const unique: string[] = [];
  arr.forEach((element) => {
    if (!unique.includes(element)) {
      unique.push(element);
    }
  });
  return unique;
};
