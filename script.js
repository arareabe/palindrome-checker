const input = document.getElementById('text-input');
const button = document.getElementById('check-btn');
const result = document.getElementById('result');

const cleanString = (str) => {
  const regex = /[^a-zA-Z\d]/g;

  return str.replace(regex, '');
};

const isPalindrome = (str) => {
  const clean = cleanString(str);
  const punc = clean.toLowerCase();
  const arr = punc.split('');
  const rev = arr.toReversed();

  for (let i = 0; i < rev.length; i++) {
    if (arr[i] !== rev[i]) {
      return false
    }
  }

  return true;
};

const showResult = () => {
  const str = input.value;

  if (str.length === 0) {
    alert('Please input a value')
    return;
  }

  const res = isPalindrome(str);

  result.classList.remove('hide');
  if (res) {
    result.innerHTML = `${str} is a palindrome`
  } else {
    result.innerHTML = `${str} is not a palindrome`
  }
}

button.addEventListener('click', showResult);
