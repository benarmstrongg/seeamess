import styled from 'styled-components';

export default styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    overflow-x: scroll;
    width: 100%;

    .Tab {
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

        &.active {
            background-color: lightgray;
        }

        &:hover {
            background-color: gray;
        }

        svg {
            margin-left: 5px;
            width: 0.75rem;
            height: 0.75rem;

            &:hover path {
                color: black;
            }

            path {
                color: lightgray;
            }
        }
    }
`;