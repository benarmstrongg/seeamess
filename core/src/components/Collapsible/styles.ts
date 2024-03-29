import styled from 'styled-components';

export default styled.div`
    // The main container element
  .Collapsible {
    // background-color: ;
    margin: 10px 0;
  }
  
  


  .Collapsible__contentOuter {
    //The content within the collaspable area
    .Collapsible__contentInner {
      display: block;
      padding: 10px;
      border: 1px solid lightgray;
      // border-top: 0;
      background-color: white;
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
      border-top-color: transparent;
    }

    // & + .Collapsible__trigger.is-open {
    //   .Collapsible__contentInner {
    //     border
    //   }
    // }
  }
  
  //The link which when clicked opens the collapsable area
  .Collapsible__trigger {
    display: block;
    font-weight: 400;
    font-size: 14px;
    text-decoration: none;
    position: relative;
    border: 1px solid lightgray;
    border-radius: 5px;
    padding: 10px;
    background: #f1f1f1;
    color: black;
    cursor: pointer;
    &:hover {
      background-color: lightgray;
    }

    &.is-open {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }
  }
`;