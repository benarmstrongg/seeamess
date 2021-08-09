import styled from 'styled-components';

const _export = {
    Main: styled.div`
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        overflow-x: scroll;
        width: 100%;
    `,
    Tab: styled.div`
        padding: 10px;
        cursor: pointer;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        white-space: nowrap;
        border-bottom: 1px solid #f1f1f1;
        border-right: 1px solid #f1f1f1;
        border-radius: 3px;
        user-select: none;

        &.active {
            background-color: lightgray;
        }

        &:hover {
            background-color: gray;
        }
    `,
    Info: styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;

        svg {
            margin-right: 5px;
        }
    `,
    Close: styled.div`
        margin-left: 5px;
        width: 0.75rem;
        height: 0.75rem;

        &:hover path {
            color: black;
        }

        path {
            color: lightgray;
        }
    `
}

export default _export;