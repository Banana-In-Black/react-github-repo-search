import { useEffect } from 'react';
import { partial, throttle } from 'lodash-es';

const LOADING_DISTANCE = 200; // px
const CHECKING_INTERVAL = 300;

const runCallbackIfBottomIsClose = throttle(callback => {
    const pixelsFromBottom =
        document.body.clientHeight - window.scrollY - document.documentElement.clientHeight;
    if (pixelsFromBottom < LOADING_DISTANCE){
        callback();
    }
}, CHECKING_INTERVAL);

export default function useInfinityScroll(callback) {
    useEffect(() => {
        const onScroll = partial(runCallbackIfBottomIsClose, callback);
        window.addEventListener('scroll', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    });
}