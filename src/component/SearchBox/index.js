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
            <TextInput
                    ref={ref}
                    className={styles['search-box__input--search']}
                    icon="🔍" placeholder="Repository Name" maxLength="256"
                    rightBlock={isSearching ? LoadingIcon : Empty} rightBlockWidth="60px"
                    onChange={onSearch}
                />
            <div className={styles['search-box__message--error']}>{searchErrorMsg || nbsp}</div>
        </section>
    );
});

export default SearchBox;