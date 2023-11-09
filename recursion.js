/** product: calculate the product of an array of numbers. */

function product(nums) {
  // base case
  if (nums.length == 0 || nums.length == 1) {
      return nums[0];
  }
  // recursive case
  else {
      return nums[0] * product(nums.slice(1));
  }
}
/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  if (words.length == 0) {
    return 0;
  }

  if (words.length == 1) {
    return words[0].length;
  } else {
    let firstWord = words[0].length;
    let restWord = longest(words.slice(1));

    if (firstWord > restWord) {
      return firstWord;
    } else {
      return restWord;
    }
  }
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  if (str.length == 0) {
    return '';
  }
  if (str.length == 1) {
    return str;
  } else {
    return str.charAt(0) + everyOther(str.substring(2));
  }
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  if (str.length < 2) {
    return true;
  }
  if (str[0] === str[str.length-1]) {
    return isPalindrome(str.slice(1, -1));
  } else {
    return false;
  }

}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {
  if (arr.length === 0) {
    return -1;
  }
  
  if (arr[0] === val) {
    return 0;
  } 

  const subIdx = findIndex(arr.slice(1), val);
  return subIdx === -1 ? -1 : subIdx + 1;
}


/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  
  if (str.length <= 1) {
    return str;
  }

  return str.charAt(str.length - 1) + revString(str.substring(0, str.length - 1));
  }


/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let stringsArray = [];

  for (let key in obj) {
    if (typeof obj[key] === 'string') {
      stringsArray.push(obj[key]);
    } else if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
      stringsArray = stringsArray.concat(gatherStrings(obj[key]));
    }
  }

  return stringsArray;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, low = 0, high = arr.length -1) {
  
    if (low > high) {
      return -1
    }

    let mid = Math.floor((low + high) / 2);

    if(arr[mid] === val) {
      return mid;
    }

    if(arr[mid] > val) {
      return binarySearch(arr, val, low, mid - 1);
    }

    return binarySearch(arr, val, mid + 1, high);
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
