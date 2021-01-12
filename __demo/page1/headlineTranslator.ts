export type HEADLINE = string | null;
import * as r from 'react';

function translateHeadling(healine: HEADLINE): string {
    return healine.toUpperCase();
}

export { translateHeadling };