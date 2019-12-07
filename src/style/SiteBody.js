import styled from 'styled-components';

const SiteBody = styled.div`
  margin:24px 16px;
  display: flex;
  flex-direction: column;
  position: relative;
  @media screen and (min-width: 40em) {
    max-width: 1024px;
    margin: 100px auto;
    flex-direction: row;
  }
`;


export default SiteBody;