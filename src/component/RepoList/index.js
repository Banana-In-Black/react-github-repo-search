import styles from './style.module.scss';

const RepoList = ({ repos = [] }) => {
    return (
        <ul className={styles['repo-list']}>
            {repos.map(repo =>
                <li className={styles['repo-list__item']} key={repo.id}>
                    <a href={repo.html_url} rel="noreferrer" target="_blank">
                        {repo.full_name}
                    </a>
                </li>
            )}
        </ul>
    )
};

export default RepoList;
