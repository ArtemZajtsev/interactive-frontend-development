/**
 * Created by minhi_000 on 12.03.2017.
 */
import Counter from '../src/Counter';

describe('increase', () => {
    it('really increases counter', () => {
        let counter = new Counter();
        counter.increase();
        expect(counter.getCount()).to.eql(1);
    });
});

describe('getCount', () => {
    it('sets counter to 0 initially', () => {
        let counter = new Counter();
        expect(counter.getCount()).to.eql(0);
    });
});
