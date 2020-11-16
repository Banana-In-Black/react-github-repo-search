import cn from 'classnames';
import styles from './style.module.scss';

export default function LoadingIcon({ className }) {
    return (
        <div className={cn(styles['lds-facebook'], className)}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};