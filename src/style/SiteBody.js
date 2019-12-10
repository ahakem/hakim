import styled from 'styled-components';

const SiteBody = styled.div`
  margin:24px 36px;
  display: flex;
  flex-direction: column;
  position: relative;
  @media screen and (min-width: 769px) {
    max-width: 960px;
    margin: 100px auto;
    
  }
  @media screen and (min-width: 1024px) {
    flex-direction: row;
  }
  @media screen and (min-width: 1025px) {
    max-width: 1024px;
    flex-direction: row;
  }
`;


export default SiteBody;