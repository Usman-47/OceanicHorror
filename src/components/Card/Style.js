import styled from "styled-components";

const Style = styled.div`
  width: 460px;
  /* height: 298px; */
  background: rgba(8, 18, 24, 0.85);
  box-shadow: inset -15px -15px 30px rgba(12, 45, 64, 0.2);
  border-radius: 10px;
  padding: 10px 20px;
  .tradient {
    width: 22.85px !important;
    height: 32px !important;
  }
  .heading {
    display: flex;
    gap: 24px;
  }
  .data {
    padding-top: 26px;

    &-row{
        display: flex;
        gap: 18px;
        h5 {
      font-family: "Lato";
      font-style: normal;
      font-weight: 400;
      font-size: 15px;
      line-height: 140%;
      color: #fff;
    }
    }
   
  }
`;

export default Style;
