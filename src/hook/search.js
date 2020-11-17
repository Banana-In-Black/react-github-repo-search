import { useState } from 'react';
import { searchRepoBy } from '../api';
import { debounce, partialRight } from 'lodash-es';

let searchQueue = Promise.resolve();
const searching = new Set();

const search = (keyword, handlePromise, clear) => {
    let promise;

    if (keyword) {
        searching.add(keyword);
        promise = searchRepoBy(keyword, clear).finally(
            () => searching.delete(keyword)
        );
    } else {
        promise = Promise.resolve([]);
    }

    searchQueue = searchQueue.then(() => handlePromise(promise));
};

const INPUT_DELAY = 500;
const debouncedSearch = debounce(search, INPUT_DELAY);

export default function useSearch() {
    const [isSearching, toggleSearching] = useState(false);

    const search = (keyword, success, failure, clear) => {
        const endSearch = () => {
            if (searching.size === 0) {
                toggleSearching(false)
            }
        };
        const handlePromise = promise =>
            promise.then(success, failure).finally(endSearch);
        
        toggleSearching(true);
        debouncedSearch(keyword, handlePromise, clear);
    };

    const clearSearch = partialRight(search, true);

    return [isSearching, search, clearSearch];
};