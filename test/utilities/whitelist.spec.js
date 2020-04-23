import whitelist from '../../src/utilities/whitelist';

jest.mock('../../src/stubs/theme', () => {
    return {
        testComponent: {
            'class': 'class-one class-two',
            'variants': {
                variantOne: 'class-three',
                variantTwo: 'class-four',
            },
            'children': {
                childOne: {
                    classes: 'class-five class-six',
                    variants: {
                        variantThree: 'class-seven',
                    }
                }
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
            'class-four',
            'class-five',
            'class-six',
            'class-seven',
        ]);
    });

    it('can generate a list of classes to whitelist from a given theme', () => {
        const theme = {
            testComponent: {
                'class': 'class-one class-two',
                'variants': {
                    variantOne: 'class-three',
                    variantTwo: 'class-four',
                },
                'children': {
                    childOne: {
                        classes: 'class-five class-six',
                        variants: {
                            variantThree: 'class-seven',
                        }
                    }
                }
            }
        };

        expect(whitelist.generateFrom(theme)).toStrictEqual([
            'class-one',
            'class-two',
            'class-three',
            'class-four',
            'class-five',
            'class-six',
            'class-seven',
        ]);
    });
});
