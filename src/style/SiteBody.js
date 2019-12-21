import styled from 'styled-components';

const SiteBody = styled.div`
  // margin:24px 36px;
  display: flex;
  flex-direction: column;
  position: relative;
  @media screen and (min-width: 769px) {
    
    
  }
  @media (min-width: 768px) and (max-width: 991.98px) { 
    // max-width: 650px;
    // margin: 100px auto;
  }
  @media screen and (min-width: 992px) {
    flex-direction: row;
    // margin: 100px auto;
    // max-width: 960px;
  }
  @media screen and (min-width: 1025px) {
    // max-width: 1024px;
    flex-direction: row;
    order:0;
  }
`;


export default SiteBody;