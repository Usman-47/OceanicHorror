import styled from "styled-components";
import Water from "../../assets/Water.png";
import Phase3 from "../../assets/Phase3.png";
const Style = styled.div`
  background: linear-gradient(180deg, #0c0c0c 0%, #1e1e1e 100%);
  .sky_image {
    width: 100%;
    height: 598px;
    /* overflow: hidden; */
    img {
      width: 100%;
      height: 100%;
    }
  }
  .Water_image {
    background: url(${Water});
    height: 4158.61px;
    width: 100%;
    background-repeat: no-repeat;
    opacity: 10;
    position: relative;
    background-size: cover;
    background-position: center;
    img {
      height: 100%;
      width: 100%;
    }
  }
  .moutian_frame {
    width: 100%;
    height: 652px;
    position: absolute;
    top: 25%;
    left: 0px;
    /* position: relative; */
    /* overflow: hidden;   */
    .back {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0%;
      left: 0%;
      object-fit: cover;
      opacity: 2;
    }
    .cloud1 {
      position: absolute;
      top: -10%;
      left: 0%;
    }
  }
  .phase3 {
    width: 60%;
    height: 437px;
    position: absolute;
    top: 4%;
    left: 0;
    opacity: 1;
   
    .truck {
      width: 20px;
      height: 15px;
      position: absolute;
      top: 57%;
      left: 15%;
    }
    .tractor {
      width: 19px;
      height: 23px;
      position: absolute;
      top: 58%;
      left: 20%;
    }
    .smoke {
      width: 28px;
      height: 35px;
      position: absolute;
      top: 25%;
      right: 30.7%;
    }
    .smoke1 {
      width: 28px;
      height: 35px;
      position: absolute;
      top: 25%;
      right: 30%;
    }
    .smoke2 {
      width: 70px;
      height: 35px;
      position: absolute;
      top: 27.7%;
      right: 29.8%;
    }
    .smoke3 {
      width: 70px;
      height: 35px;
      position: absolute;
      top: 27.7%;
      right: 31.7%;
    }
    .smoke4 {
      width: 70px;
      height: 35px;
      position: absolute;
      top: 27.7%;
      right: 33.7%;
    }
    .windmall {
      width: 58px;
      height: 57px;
      position: absolute;
      top: 37%;
      right: 36%;
    }
    .helicaptor {
      width: 32;
      height: 21px;
      position: absolute;
      top: 70%;
      right: -7.7%;
    }
    .windmill {
      width: 70px;
      height: 90px;
      position: absolute;
      top: 22.5%;
      left: 42.7%;
    }
    .boat {
      width: 151px;
      height: 109px;
      position: absolute;
      bottom: 0;
      left: 2%;
    }
  }
  .phase2 {
    width: 90%;
    height: 900px;
    position: absolute;
    transform: rotateX(-5deg);
    top: 9.3%;
    right: 0;
    .smoke {
      width: 40px;
      height: 35px;
      position: absolute;
      top: 14.05%;
      right: 24.1%;
    }
    .smoke1 {
      width: 40px;
      height: 35px;
      position: absolute;
      top: 14.3%;
      right: 24.9%;
    }
    .windmill {
      width: 100px;
      height: 100px;
      position: absolute;
      top: 7%;
      right: 35%;
    }
    .birds1 {
      position: absolute;
      width: 156px;
      height: 99px;
      top: 16%;
      right: 31%;
    }
    .birds {
      position: absolute;
      width: 94px;
      height: 78px;
      top: 7%;
      right: 24%;
    }
    .tanker {
      position: absolute;
      width: 30px;
      height: 30px;
      top: 32%;
      right: 14%;
      transform: rotate(-30deg);
    }
    .tanker1 {
      width: 41.63px;
      height: 32px;
      position: absolute;
      top: 14%;
      right: 22%;
    }
  }
  .island {
    width: 75%;
    height: 322px;
    position: absolute;
    top: 21%;
    left: 0;
    .f18 {
      position: absolute;
      width: 51px;
      height: 36px;
      top: -5%;
      left: 5%;
    }
    .aircraftCarrier {
      position: absolute;
      width: 392.1px;
      height: 242px;
      top: 90%;
      left: 0%;
      transform: rotate(-10deg);
    }
    .militaryTruck {
      width: 30px;
      height: 30px;
      position: absolute;
      top: 41%;
      left: 38%;
    }
    .militaryTruck2 {
      width: 35px;
      height: 25px;
      position: absolute;
      top: 62%;
      right: 25%;
      transform: rotate(-30deg);
    }
    .militaryTruck3 {
      width: 20px;
      height: 25px;
      position: absolute;
      top: 52%;
      left: 8%;
    }
  }
  .phase4 {
    width: 100%;
    height: 922px;
    position: absolute;
    top: 32%;
    left: 0;
    .camel {
      width: 168px;
      height: 36px;
      position: absolute;
      top: 27%;
      left: 1%;
      transform: rotate(10deg);
    }
    .camel1 {
      width: 168px;
      height: 36px;
      position: absolute;
      top: 13%;
      left: 45%;
      transform: rotate(10deg);
    }
    .helicaptor4 {
      position: absolute;
      width: 120px;
      height: 80px;
      top: 19%;
      left: 4%;
    }
    .baseTruck {
      width: 27px;
      height: 24px;
      position: absolute;
      top: 53%;
      left: 23%;
      /* transform: rotate(-10deg); */
    }
    .helicaptop41 {
      width: 62px;
      height: 37px;
      position: absolute;
      top: 47%;
      left: 18%;
    }
  }
  .warShip {
    width: 156px;
    height: 168px;
    position: absolute;
    top: 5%;
    right: 25%;
    overflow: hidden;
  }
  .phase8 {
    width: 40%;
    height: 464px;
    position: absolute;
    top: 54%;
    right: 0;
    .birds8{
       position: absolute;
       top: 0;
       right: 5%;
       width: 10%;
       height: 90px;
      transform: rotate(-30deg);
    }
    .dragon{
      width: 100px;
      height: 100px;
      position: absolute;
      top: 40%;
      right: 30%;
      transform: rotate(30deg);
    }
    .dragon2{
      width: 100px;
      height: 100px;
      position: absolute;
      bottom: 10%;
      left: 10%;
    
    }
  }
  .phase10 {
    width: 58%;
    height: 1050px;
    position: absolute;
    top: 55%;
    left: 0;
    .windmill{
      position: absolute;
      width: 50px;
      height: 60px;
      top: 39.5%;
      right: 38%;
    }
    .windmill1{
      position: absolute;
      width: 80px;
      height: 95px;
      top: 82%;
      right: 8%;
    }
    .boat1{
      width: 82px;
      height: 78px;
      position: absolute;
      top: 60%;
      left: 15%;
    }
    .boat2{
      width: 70px;
      height: 46px;
      position: absolute;
      top: 55%;
      left: 35%;
    }
    .boat3{
      width: 72px;
      height: 45px;
      position: absolute;
      top: 53%;
      left: 10%;
    }
    .warShip{
      position: absolute;
      top: -15%;
      left: 2%;
      height: 72px;
      width: 105px;
    }
    .tractor10{
      width: 10px;
      height: 20px;
      position: absolute;
      bottom: 22%;
      right: 5%;
      transform: rotate(-20deg);
    }
    .windWhite{
      position: absolute;
      width: 60px;
      height: 90px;
      bottom: 13%;
      left: 5%;
    }
  }
  .submarine {
    width: 166px;
    height: 113px;
    position: absolute;
    top: 49.5%;
    right: 14.5%;
  }
  .Underwater_Submarine {
    width: 120px;
    height: 80px;
    position: absolute;
    top: 70%;
    right: 2%;
    opacity: 0;
  }
  .card1 {
    position: absolute;
    top: 5%;
    right: 5%;
  }
  .moutian_frames {
    width: 100%;
    height: 652px;
    position: absolute;
    top: -9%;
    left: 0px;
    object-fit: cover;
    overflow: hidden;
    .front {
      width: 107%;
      height: 100%;
      object-fit: cover;
      position: absolute;
      top: 0%;
      left: 0%;
      /* opacity: 1000; */
      /* overflow: hidden; */
    }
  }
 .scuba{
  width: 200px;
  height: 150px;
  position: absolute;
  bottom:15%;
  right: 3%;
  opacity:0.4;
 }
 .bubble{
  width: 50%;
  height: 400px;
  position: absolute;
  bottom: 2%;
  right: 0%;
  opacity: .3;
 }
 .bubble1{
  width: 50%;
  height: 400px;
  position: absolute;
  bottom: 2%;
  left: 0%;
  opacity: .3;
 }

`;

export default Style;
