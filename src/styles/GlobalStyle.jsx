import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root{
    /* 색상 변수 */
    --gray-10: #FFFFFF;
    --gray-20: #F9F9F9;
    --gray-30: #CFCFCF;  
    --gray-40: #818181;  
    --gray-50: #515151; 
    --gray-60: #000000;  
    
    --brown-10: #F5F1EE;  
    --brown-20: #E4D5C9;  
    --brown-30: #C7BBB5;  
    --brown-40: #542F1A;  
    --brown-50: #341909;  
    
    --blue-50: #1877F2;  
    --yellow-50: #FEE500;  
    --red-50: #B93333;  
    
    /*폰트 변수*/
    --font-size-40: 40px;
    --font-size-32: 32px;
    --font-size-24 :24px;
    --font-size-20: 20px;
    --font-size-18: 18px;
    --font-size-16: 16px;
    --font-size-14: 14px;
    
    --font-lh-100: 100%;
    --font-lh-40: 40px;
    --font-lh-30: 30px;
    --font-lh-25: 25px;
    --font-lh-24: 24px;
    --font-lh-22: 22px;
    --font-lh-18: 18px;
    
    --shadow-1: 0 4px 4px 0 rgba(140, 140, 140, 0.25);
    --shadow-2: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    --shadow-3: 0 16px 20px 0 rgba(48, 48, 48, 0.62);
  }
    
  @font-face {
    /*Pretendard폰트*/
    font-family: "Pretendard-Regular";
    src: url("https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff")
        format("woff");
    font-weight: 400;
    font-style: normal;
  }

  /* CSS reset */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font: inherit;
  }

  body {
    font-family: 'Pretendard', sans-serif;
    background: var(--gray-20);
  }

  ul,li{
    list-style:none
  }

  img {
    display: block;
    max-width: 100%;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    border: none;
    background: none;
    border-radius: 0;
    cursor: pointer;
  }
`;
