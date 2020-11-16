import React, { memo, forwardRef } from 'react';
import Input from './index';

const Text = forwardRef((props, ref) => <Input ref={ref} type="text" {...props} />);

export default memo(Text);
