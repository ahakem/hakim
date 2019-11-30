import styled from 'styled-components';

const SiteBody = styled.div`
  margin: 130px 24px;
  display: flex;
  flex-direction: column;
  position: relative;
  @media screen and (min-width: 40em) {
    max-width: 1000px;
    margin: 100px auto;
    flex-direction: row;
  }
`;


export default SiteBody;