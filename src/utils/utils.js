import React, {useEffect} from 'react';
// Support functions
/*
 *
 * toFixed()
 *
 */
export const dosDecim = (number, maxToFix) => {
    let toFix = parseInt(number);
    return toFix.toFixed(2);
};
