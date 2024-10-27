import { MouseEventHandler } from 'react';
export interface myfavouriteProps {
    iconColor: string;
    disabled?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}
declare const myfavourite: React.FC<myfavouriteProps>;
export default myfavourite;
