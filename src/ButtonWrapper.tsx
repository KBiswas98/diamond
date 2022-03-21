import React, { FC } from 'react';
type Props = {
    name: string;
};

export const ButtonWrapper: FC<Props> = ({ name }) => {
    return <button style={{ backgroundColor: 'orange' }}>{name}</button>;
};
