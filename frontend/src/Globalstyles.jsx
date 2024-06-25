import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --ego-white: #fff;
    --ego-green: #687943;
    --ego-lgt-green: #CCE0A1;
    --ego-beige: #DCDED0;
    --ego-purple: #C590FB;
    --ego-error: #C590FB;
    --ego-light: #fefff9;
    --ego-light-tint:#FDFFF1;
    --ego-dark: #242B17;
    --ego-gradient: linear-gradient(100deg, rgba(220,222,208,1) 0%, rgba(204,224,161,1) 100%);
    --ego-gradient-reversed: linear-gradient(100deg, rgba(204,224,161,1) 0%, rgba(220,222,208,1) 100%);
   --ego-gradient-cutoff-dt: linear-gradient(90deg, rgba(220,222,208,1) 0%, rgba(204,224,161,1) 80%, #ffffff 20%);
    --ego-gradient-cutoff-mob: linear-gradient(180deg, rgba(220,222,208,1) 0%, rgba(204,224,161,1) 90%, #ffffff 10%);
    --ego-gradient-trans: linear-gradient(100deg, rgba(220,222,208,0.4) 0%, rgba(204,224,161,0.4) 100%);


  }


  .gradient{
  background: rgb(220,222,208);
background: -moz-linear-gradient(180deg, rgba(220,222,208,1) 0%, rgba(204,224,161,1) 100%);
background: -webkit-linear-gradient(180deg, rgba(220,222,208,1) 0%, rgba(204,224,161,1) 100%);
background: linear-gradient(180deg, rgba(220,222,208,1) 0%, rgba(204,224,161,1) 100%);
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#dcded0",endColorstr="#cce0a1",GradientType=1);}

  body {
    background:  var(--primary-color);
    font-family: 'open-sans-regular', sans-serif;

    .open-sans-regular {
      font-family: "Open Sans", sans-serif;
      font-optical-sizing: auto;
      font-weight: 400;
      font-style: normal;
        }

  }



`;

export default GlobalStyle;
