import { useRef, useState } from 'react';
import styles from './App.module.scss';
import RepoList from './component/RepoList';
import useSearch from './hook/search';
import useInfinityScroll from './hook/infinityScroll';
import SearchBox from './component/SearchBox';

function App() {
    const searchInputRef = useRef();
    const [isSearching, search, clearSearch] = useSearch();
    const [searchErrorMsg, setSearchErrorMsg] = useState('');
    const [repos, setRepos] = useState([]);
    
    const setReposAndScrollToTop = repos => {
        window.scrollTo(0, 0);
        setRepos(repos);
    };
    const printSearchError = err => {
        if (err instanceof Error) {
            console.error(err);
            setSearchErrorMsg(err.message);
        }
    };
    
    useInfinityScroll(() =>
        search(searchInputRef.current.value, setRepos, printSearchError));

    return (
        <div className={styles.app}>
            <SearchBox
                ref={searchInputRef}
                isSearching={isSearching}
                search={clearSearch}
                onSearchSuccess={setReposAndScrollToTop}
                onSearchFail={printSearchError}
                searchErrorMsg={searchErrorMsg}
                setSearchErrorMsg={setSearchErrorMsg}
            />
            <RepoList repos={repos} />
        </div>
    );
}

export default App;
