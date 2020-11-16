import styles from './style.module.scss';

const RepoList = ({ repos = [] }) => {
    return (
        <ul className={styles['repo-list']}>
            {repos.map(repo =>
                <li className={styles['repo-list__item']} key={repo.id}>
                    {repo.full_name}
                </li>
            )}
        </ul>
    )
};

export default RepoList;
