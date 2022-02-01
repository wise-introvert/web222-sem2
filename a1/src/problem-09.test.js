const { pureBool, every, any, none } = require('./solutions');

describe('Problem 9 - pureBool(), all(), none() functions', function () {
  describe('pureBool()', function () {
    test('pure boolean values work as expected', function () {
      expect(pureBool(true)).toBe(true);
      expect(pureBool(false)).toBe(false);
    });

    test('various forms of Yes should return true', function () {
      expect(pureBool('Yes')).toBe(true);
      expect(pureBool('yes')).toBe(true);
      expect(pureBool('YES')).toBe(true);
      expect(pureBool('YeS')).toBe(true);
      expect(pureBool('YEs')).toBe(true);
      expect(pureBool('Y')).toBe(true);
      expect(pureBool('y')).toBe(true);
    });

    test('various forms of Oui (French) should return true', function () {
      expect(pureBool('Oui')).toBe(true);
      expect(pureBool('oui')).toBe(true);
      expect(pureBool('OUI')).toBe(true);
      expect(pureBool('OuI')).toBe(true);
      expect(pureBool('OUi')).toBe(true);
      expect(pureBool('O')).toBe(true);
      expect(pureBool('o')).toBe(true);
    });

    test('various forms of No should return false', function () {
      expect(pureBool('No')).toBe(false);
      expect(pureBool('no')).toBe(false);
      expect(pureBool('nO')).toBe(false);
      expect(pureBool('n')).toBe(false);
      expect(pureBool('N')).toBe(false);
    });

    test('various forms of Non (French) should return false', function () {
      expect(pureBool('Non')).toBe(false);
      expect(pureBool('non')).toBe(false);
      expect(pureBool('nON')).toBe(false);
      expect(pureBool('NoN')).toBe(false);
    });

    test('various forms of True should return true', function () {
      expect(pureBool('True')).toBe(true);
      expect(pureBool('true')).toBe(true);
      expect(pureBool('TRUE')).toBe(true);
      expect(pureBool('TruE')).toBe(true);
      expect(pureBool('TRuE')).toBe(true);
      expect(pureBool('TRue')).toBe(true);
      expect(pureBool('trUE')).toBe(true);
      expect(pureBool('truE')).toBe(true);
      expect(pureBool('t')).toBe(true);
      expect(pureBool('T')).toBe(true);
    });

    test('various forms of Vrai (French) should return true', function () {
      expect(pureBool('Vrai')).toBe(true);
      expect(pureBool('vrai')).toBe(true);
      expect(pureBool('VRAI')).toBe(true);
      expect(pureBool('VraI')).toBe(true);
      expect(pureBool('VRaI')).toBe(true);
      expect(pureBool('vRAI')).toBe(true);
      expect(pureBool('vrAI')).toBe(true);
      expect(pureBool('vraI')).toBe(true);
      expect(pureBool('v')).toBe(true);
      expect(pureBool('V')).toBe(true);
    });

    test('various forms of False should return false', function () {
      expect(pureBool('False')).toBe(false);
      expect(pureBool('false')).toBe(false);
      expect(pureBool('FALSE')).toBe(false);
      expect(pureBool('FALSe')).toBe(false);
      expect(pureBool('FALSe')).toBe(false);
      expect(pureBool('FALse')).toBe(false);
      expect(pureBool('FAlse')).toBe(false);
      expect(pureBool('falsE')).toBe(false);
      expect(pureBool('falSE')).toBe(false);
      expect(pureBool('faLSE')).toBe(false);
      expect(pureBool('fALSE')).toBe(false);
      expect(pureBool('f')).toBe(false);
      expect(pureBool('F')).toBe(false);
    });

    test('various forms of Faux (French) should return false', function () {
      expect(pureBool('Faux')).toBe(false);
      expect(pureBool('faux')).toBe(false);
      expect(pureBool('FAUX')).toBe(false);
      expect(pureBool('FAUx')).toBe(false);
      expect(pureBool('FAux')).toBe(false);
      expect(pureBool('Faux')).toBe(false);
      expect(pureBool('fAUX')).toBe(false);
      expect(pureBool('faUX')).toBe(false);
      expect(pureBool('fauX')).toBe(false);
    });

    test('positive numbers should be true', function () {
      for (let i = 1; i < 1000; i++) {
        expect(pureBool(i)).toBe(true);
      }
    });

    test('zero should be false', function () {
      expect(pureBool(0)).toBe(false);
    });

    test('negative numbers should be false', function () {
      for (let i = 1; i < 1000; i++) {
        expect(pureBool(i * -1)).toBe(false);
      }
    });

    test('various non-values should throw', function () {
      expect(() => pureBool(undefined)).toThrowError(new Error('invalid value'));
      expect(() => pureBool()).toThrowError(new Error('invalid value'));
      expect(() => pureBool(null)).toThrowError(new Error('invalid value'));
    });
  });

  /**
 *  * Yes, yes, YES, Y, Oui, oui, OUI, O, t, TRUE, true, True, vrai, V, VRAI, 1, 2, ...any positive number
 * No, no, NO, Non, non, NON, N, n, f, FALSE, false, False, FAUX, faux, Faux, 0, -1, -2, ...any negative number

 */

  describe('every()', function () {
    test('single "true" value works the same as pureBool()', function () {
      expect(every(true)).toBe(true);
      expect(every('true')).toBe(true);
      expect(every(10000)).toBe(true);
    });

    test('single "false" value works the same as pureBool()', function () {
      expect(every(false)).toBe(false);
      expect(every('false')).toBe(false);
      expect(every(-10000)).toBe(false);
    });

    test('lists of normalized true values results in true', function () {
      expect(
        every(
          'Yes',
          'yes',
          'YES',
          'Y',
          'Oui',
          'oui',
          'OUI',
          'O',
          't',
          'TRUE',
          true,
          'True',
          'VRAI',
          'vrai',
          'V',
          1,
          2,
          3,
          100000
        )
      ).toBe(true);
    });

    test('lists of mostly normalized true values results in false', function () {
      // Last value switched to false
      expect(
        every(
          'Yes',
          'yes',
          'YES',
          'Y',
          'Oui',
          'oui',
          'OUI',
          'O',
          't',
          'TRUE',
          true,
          'True',
          'VRAI',
          'vrai',
          'V',
          1,
          2,
          3,
          -100000
        )
      ).toBe(false);
    });
  });

  describe('any()', function () {
    test('single "true" value works the same as pureBool()', function () {
      expect(any(true)).toBe(true);
      expect(any('true')).toBe(true);
      expect(any(10000)).toBe(true);
    });

    test('single "false" value works the same as pureBool()', function () {
      expect(any(false)).toBe(false);
      expect(any('false')).toBe(false);
      expect(any(-10000)).toBe(false);
    });

    test('lists of normalized true values results in true', function () {
      expect(
        any(
          'Yes',
          'yes',
          'YES',
          'Y',
          'Oui',
          'oui',
          'OUI',
          'O',
          't',
          'TRUE',
          true,
          'True',
          'VRAI',
          'vrai',
          'V',
          1,
          2,
          3,
          100000
        )
      ).toBe(true);
    });

    test('lists of mostly normalized true values results in true', function () {
      // Last value switched to false
      expect(
        any(
          'Yes',
          'yes',
          'YES',
          'Y',
          'Oui',
          'oui',
          'OUI',
          'O',
          't',
          'TRUE',
          true,
          'True',
          'VRAI',
          'vrai',
          'V',
          1,
          2,
          3,
          0
        )
      ).toBe(true);
    });
  });

  describe('none()', function () {
    test('lists of normalized false values results in true', function () {
      expect(
        none(
          'No',
          'Non',
          'no',
          'non',
          'NO',
          'NON',
          'N',
          'n',
          'f',
          'FAUX',
          'faux',
          'FALSE',
          false,
          'False',
          0,
          -1,
          -100000
        )
      ).toBe(true);
    });

    test('lists of mostly normalized false values results in false', function () {
      // Last value switched to true
      expect(
        none(
          'No',
          'Non',
          'no',
          'non',
          'NO',
          'NON',
          'N',
          'n',
          'f',
          'FAUX',
          'faux',
          'FALSE',
          false,
          'False',
          0,
          -1,
          100000
        )
      ).toBe(false);
    });
  });
});
