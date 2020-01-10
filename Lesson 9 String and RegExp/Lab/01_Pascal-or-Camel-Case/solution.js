function solve() {
  const input = document.getElementById('text').value;
  const convention = document.getElementById('naming-convention').value;
  const output = document.getElementById('result');
  
  const upperFirstLetter = transformString.bind(undefined, 'toUpperCase');
  const lowerFirstLetter = transformString.bind(undefined, 'toLowerCase');

  const types = {
    'Pascal Case': string => pascal(string),
    'Camel Case': string => lowerFirstLetter(pascal(string))
  };

  output.textContent = types[convention] ?
    types[convention](input) :
    'Error!';

  function pascal(str) {
    return str
      .toLowerCase()
      .split(' ')
      .map(upperFirstLetter)
      .join('');
  }

  function transformString(transformation, str) {
    return `${str[0][transformation]() + str.slice(1)}`;
  }
}