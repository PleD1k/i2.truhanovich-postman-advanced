/*
Create object "utils". It should contain:
- function to generate random number
- function to generate random alphanumeric string
- simple logger: has to contain 2 arguments - level (default value is "INFO"), message
*/

// const utils = {
//   getRundomNumer: () => undefined,
//   getRandomString: () => undefined,
//   logger: () => undefined,
// };

const utils = {
  getRandomNumber: () => Math.random(),
  
  getRandomAlphanumericString: (length) => {
    const alphanumericCharacters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * alphanumericCharacters.length);
      result += alphanumericCharacters[randomIndex];
    }
    return result;
  },
  
  logger: (level = 'INFO', message) => {
    console.log(`[${level}] ${message}`);
  }
};

// Example usage
const randomNumber = utils.getRandomNumber();
const randomString = utils.getRandomAlphanumericString(10);
utils.logger('DEBUG', 'This is a debug message');
utils.logger('ERROR', 'An error occurred');