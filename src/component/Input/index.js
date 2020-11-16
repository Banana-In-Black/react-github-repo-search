import React, { memo, forwardRef } from 'react';
import cn from 'classnames';
import styles from './style.module.scss';

const Input = forwardRef(({
    icon,
    placeholder = 'Placeholder',
    rightBlock: RightBlock,
    rightBlockWidth,
    className,
    ...props
}, ref) => {
    return (
        <div className={cn(styles['form-input'], className)}>
            <span className={styles['form-input__icon']}>{icon}</span>
            <input
                ref={ref}
                placeholder={placeholder}
                className={styles['form-input__input']}
                style={RightBlock ? { paddingRight: rightBlockWidth } : {}}
                {...props}
            />
            <label className={styles['form-input__placeholder']}>{placeholder}</label>
            {RightBlock && <RightBlock className={styles['form-input__right-block']} />}
        </div>
    );
});

export default memo(Input);
export { default as TextInput } from './Text';
