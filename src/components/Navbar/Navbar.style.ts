'use client';
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  margin: 0 auto;

  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`;

export const FadeWrapper = styled.div`
  @-webkit-keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  -webkit-animation: fadeIn 0.8s !important;
  animation: fadeIn 0.8s !important;
`;

export const FloatRightWrapper = styled.div`
  @-webkit-keyframes float-right {
    0% {
      -webkit-transform: translatex(30px);
      transform: translatex(30px);
    }
    100% {
      -webkit-transform: translatex(0px);
      transform: translatex(0px);
    }
  }

  -webkit-animation: float-right 0.8s !important;
  animation: float-right 0.8s !important;
`;

export const FloatLeftWrapper = styled.div`
  @-webkit-keyframes float-left {
    0% {
      -webkit-transform: translatex(-30px);
      transform: translatex(-30px);
    }
    100% {
      -webkit-transform: translatex(0px);
      transform: translatex(0px);
    }
  }

  -webkit-animation: float-left 0.8s !important;
  animation: float-left 0.8s !important;
`;

export const FloatUpWrapper = styled.div`
  @-webkit-keyframes floatUp {
    0% {
      -webkit-transform: translatey(5px);
      transform: translatey(30px);
    }
    100% {
      -webkit-transform: translatey(0px);
      transform: translatey(0px);
    }
  }

  -webkit-animation: floatUp 0.5s !important;
  animation: floatUp 0.5s !important;
`;

export const FloatInWrapper = styled.div`
  @-webkit-keyframes floatIn {
    0% {
      -webkit-transform: translatey(-30px);
      transform: translatey(-30px);
    }
    100% {
      -webkit-transform: translatey(0px);
      transform: translatey(0px);
    }
  }

  -webkit-animation: floatIn 0.5s !important;
  animation: floatIn 0.5s !important;
`;

export const SlideDownWrapper = styled.div`
  @-webkit-keyframes slideDown {
    0% {
      top: 0px;
    }
    50% {
      top: 50px;
    }
    75% {
      top: 40px;
    }
    100% {
      top: 0px;
    }
  }

  -webkit-animation: slideDown 0.8s !important;
  animation: slideDown 0.8s !important;
`;

export const LoaderSpinner1 = styled.div`
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  border: 16px solid #f3f3f3;
  /* Light grey */
  border-top: 16px solid #4949f3;
  /* Blue */
  border-radius: 50%;
  width: 80px;
  height: 80px;
  animation: spin 1s linear infinite;
`;

export default Wrapper;
