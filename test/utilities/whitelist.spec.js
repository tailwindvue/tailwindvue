import whitelist from '../../src/utilities/whitelist';

jest.mock('../../src/stubs/theme', () => {
    return {
        testComponent: {
            'component': 'class-one class-two',
            'types': {
                one: 'class-three',
                two: 'class-four'
            }
        }
    };
});

describe('Whitelist', () => {
    it('can generate a list of classes to whitelist from the default theme', () => {
        expect(whitelist.generate()).toStrictEqual([
            'class-one',
            'class-two',
            'class-three',
            'class-four'
        ]);
    });

    it('can generate a list of classes to whitelist from a given theme', () => {
        const theme = {
            testComponent: {
                'component': 'class-one class-two',
                'types': {
                    one: 'class-three',
                    two: 'class-four'
                }
            }
        };

        expect(whitelist.generateFrom(theme)).toStrictEqual([
            'class-one',
            'class-two',
            'class-three',
            'class-four'
        ]);
    });
});
