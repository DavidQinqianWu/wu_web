import React from 'react';

export function selectHeader(type: number) {
    switch (type) {
        case 1:
            return <h1>this is h1</h1>;
        case 2:
            return <h2> this is h2</h2>;
        case 3:
            return <h3>this is h3</h3>;
        default:
            return <h4> this is h4</h4>;
    }
}
