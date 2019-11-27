import styled from 'styled-components';

const SideInfo = styled.aside`
  border-radius: 7px;
  box-shadow: 0 1.5px 3px 0 rgba(0, 0, 0, 0.16);
  background-color: ${props => (props.colors.box)};
  min-height:200px;
  @media screen and (min-width: 40em) {
    width: 210px;
  }

  @media screen and (min-width: 64em) {
    width: 210px;
  }

`;


export default SideInfo;