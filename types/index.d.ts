import './style.css';
import * as React from 'react';
import { LoadingProps, LoadingType } from 'react-loading';
interface CoverProps {
    on: boolean;
    opacity?: React.ReactText;
    color?: string;
    type?: LoadingType;
    size?: number;
    loadingProps?: LoadingProps;
    coverAdornment?: Function;
    inline?: boolean;
    cursor?: string;
}
declare const Cover: React.FunctionComponent<CoverProps>;
export default Cover;
