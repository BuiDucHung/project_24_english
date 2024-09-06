import { Button } from '@mui/material';
import styled from 'styled-components';

export const BtnLoginStyle = styled(Button)`
    height: 30px;
    padding: 6px 10px;
    border: none;
    border-radius: 50px;
    box-shadow: 0 2px 6px 0 rgba(219, 201, 206, .4);
    background-color: #fff;
    font-size: 14px;
    font-weight: 600;
    color: #7a7c8b;
    transition: .5s;
    text-transform: math-auto;
    &:hover {
        background-color: #f40c44;
        color: #fff;
        border: none;
    }
`
export const BtnregisterStyle = styled(Button)`
    height: 30px;
    padding: 6px 10px;
    border: none;
    margin-left: 8px;
    border-radius: 50px;
    box-shadow: 0 2px 6px 0 rgba(219, 201, 206, .4);
    background-color: #fff;
    font-size: 14px;
    font-weight: 600;
    color: #7a7c8b;
    transition: .5s;
    text-transform: math-auto;
    &:hover {
        background-color: #f40c44;
        color: #fff;
        border: none;
    }
`