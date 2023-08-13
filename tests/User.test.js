const bcrypt = require('bcrypt');
const User = require('../models/User');

const userInputPass = 'WARMACHINEROX-68';
let hashedPass;
let user;

describe('User Model Testing', () => {
  beforeEach(async () => {
    hashedPass = await bcrypt.hash(userInputPass, 10);
    user = new User({ password: hashedPass });
  });

  describe('Password hashing for User Model', () => {
    it('should hash the password for security of users', async () => {
      expect(user.password).not.toBe(userInputPass);
      expect(await bcrypt.compare(userInputPass, user.password)).toBe(true);
      expect(user.password).toBe(hashedPass);
    });
  });

  describe('Authentication Checks', () => {
    it('should compare passwords and return true if they match', async () => {
      const isPassCorrect = await user.checkPassword(userInputPass);
      expect(isPassCorrect).toBe(true);
    });

    it('should compare passwords and return false if they do not match', async () => {
      const incorrectPass = 'WARMACHINESUX-68';
      const isPassCorrect = await user.checkPassword(incorrectPass);
      expect(isPassCorrect).toBe(false);
    });
  });
});
