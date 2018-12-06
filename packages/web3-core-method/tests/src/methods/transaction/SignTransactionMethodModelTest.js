import {formatters} from 'web3-core-helpers';
import SignTransactionMethod from '../../../../src/methods/transaction/SignTransactionMethod';

// Mocks
jest.mock('formatters');

/**
 * SignTransactionMethod test
 */
describe('SignTransactionMethodTest', () => {
    let method;

    beforeEach(() => {
        method = new SignTransactionMethod({}, {}, formatters);
    });

    it('rpcMethod should return eth_signTransaction', () => {
        expect(method.rpcMethod)
            .toBe('eth_signTransaction');
    });

    it('parametersAmount should return 1', () => {
        expect(method.parametersAmount)
            .toBe(1);
    });

    it('beforeExecution should do nothing with the parameters', () => {
        method.parameters = [{}];

        formatters.inputTransactionFormatter
            .mockReturnValueOnce({empty: false});

        method.beforeExecution({});

        expect(method.parameters[0])
            .toHaveProperty('empty', false);

        expect(formatters.inputTransactionFormatter)
            .toHaveBeenCalledWith({}, {});
    });

    it('afterExecution should just return the response', () => {
        expect(method.afterExecution('sendTransaction'))
            .toBe('sendTransaction');
    });
});