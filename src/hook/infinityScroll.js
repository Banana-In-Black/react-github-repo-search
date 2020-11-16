import { useEffect } from 'react';
import { partial, throttle } from 'lodash-es';

const LOADING_DISTANCE = 200; // px
const CHECKING_INTERVAL = 300;

const loadMoreIfBottomIsClose = throttle(callback => {
    const pixelsFromBottom =
        document.body.clientHeight - window.scrollY - document.documentElement.clientHeight;
    console.log('checking...', { pixelsFromBottom });
    if (pixelsFromBottom < LOADING_DISTANCE){
        callback();
    }
}, CHECKING_INTERVAL);

export default function useInfinityScroll(callback) {
    useEffect(() => {
        const onScroll = partial(loadMoreIfBottomIsClose, callback);
        window.addEventListener('scroll', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    });
}