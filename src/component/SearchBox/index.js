import { forwardRef } from 'react';
import { TextInput } from '../Input';
import LoadingIcon from '../LoadingIcon';
import styles from './style.module.scss';

const nbsp = '\u00a0';
const Empty = () => <span>{nbsp}</span>;

const SearchBox = forwardRef(({ isSearching, search, onSearchSuccess, onSearchFail, searchErrorMsg, setSearchErrorMsg }, ref) => {
    const onSearch = e => {
        setSearchErrorMsg('');
        const value = (e.target.value || '').trim();
        search(value, onSearchSuccess, onSearchFail);
    };

    return (
        <section className={styles['search-box']}>
            <div className={styles['search-box__text--description']}>
                For unauthenticated requests, the rate limit allows you to make up to 10 requests per minute.
            </div>
            <TextInput
                    ref={ref}
                    className={styles['search-box__input--search']}
                    icon="🔍" placeholder="Repository Name" maxLength="256"
                    rightBlock={isSearching ? LoadingIcon : Empty} rightBlockWidth="60px"
                    onChange={onSearch}
                />
            <div className={styles['search-box__message--error']}>{searchErrorMsg || nbsp}</div>
            <hr className={styles['search-box__divider']} />
        </section>
    );
});

export default SearchBox;