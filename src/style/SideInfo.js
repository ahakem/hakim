import styled from 'styled-components';
const Name = styled.b`
  font-size:24px;
    font-weight: bold
`;

const SideInfo = styled.aside`
  border-radius: 14px;
  box-shadow: 0 1.5px 3px 0 rgba(0, 0, 0, 0.16);
  background-color: ${props => (props.colors.box)};
  min-height:200px;
    text-align: center;
  @media screen and (min-width: 40em) {
    width: 210px;
  }

  @media screen and (min-width: 64em) {
    width: 210px;
  }
    .profile-photo{
      width: 130px;
      margin-top:-70px;
      border-radius: 18px;
    }
`;


export default SideInfo;