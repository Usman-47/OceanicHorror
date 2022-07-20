import React, { useEffect, useRef } from "react";
import Style from "./Style";
import { gsap } from "gsap";
import Sky from "../../assets/Sky.gif";
import Mountain from "../../assets/Mountain_Frame.png";
import Phase3 from "../../assets/Phase3.png";
import Phase2 from "../../assets/Phase2.png";
import Island from "../../assets/Island.png";
import Phase4 from "../../assets/Phase4.png";
import Phase8 from "../../assets/Phase8.png";
import Phase10 from "../../assets/Phase10.png";
import Submarine from "../../assets/Submarine.png";
import Underwater_Submarine from "../../assets/Underwater_Submarine.svg";
import War_Ship from "../../assets/War_Ship.svg";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Card from "../../components/Card/Index";
import FrontMountains from "../../assets/Front_Mountain.svg";
import BackMountains from "../../assets/back_Mountain.svg";
import Phase1Truck from "../../assets/Phase1_Truck.svg";
import Phase2Tanker from "../../assets/Phase2_Tanker.svg";
import Phase2Tanker1 from "../../assets/Phase2_Tanker1.svg";
import Phase1Tractor from "../../assets/Phase1_Tractor.svg";
import Phase1Windmill from "../../assets/Phase1_Windmill.gif";
import Windmill from "../../assets/windmill.gif";
import Phase2Birds1 from "../../assets/Phase2_birds1.gif";
import Phase2Birds from "../../assets/Phase2_birds.gif";
import Phase2Windmill from "../../assets/Phase2_windmill.gif";
import Smoke from "../../assets/smoke.gif";
import Cloud1 from "../../assets/Cloud1.svg";
import Cloud2 from "../../assets/Cloud2.svg";
import Cloud3 from "../../assets/Cloud3.svg";
import Phase1Helicaptor from "../../assets/Phase1_helicaptor.svg";
import "gsap/CSSPlugin";
gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
const Index = () => {
  const warRef = useRef();
  useEffect(() => {
    const tween = gsap.timeline({
      scrollTrigger: {
        scrub: 1.5,
        start: "12% 12%",
        end: "+=1500px",
    // onUpdate: self => {
    //   gsap.to("#warShip", {rotation: () => self.direction === 1 ? 0 : -180, overwrite: 'auto'});
    //   },
    }
    });
    const submarine = gsap.timeline({
      scrollTrigger: {
        scrub: 1,
        start: "1500px",
        end: "+=2000px",
      },
    });
    const tee = gsap.timeline();
    tween.to("#warShip", {
      motionPath: {
        path: [
          { x: 0, y: 0 },
          { x: -120, y: 90 },
          { x: -350, y: 160 },
          { x: -180, y: 230 },
          { x: -280, y: 350 },
          { x: -100, y: 450 },
          { x: -120, y: 720 },
          { x: 220, y: 800 },
          { x: -170, y: 970 },
          { x: 280, y: 1450 },
        ],
        align: "self",
        alignOrigin: [0.5, 0.5],
        autoRotate: 90,
      },
      duration: 10,
      immediateRender: true,
      ease: "none",
    });
    submarine.to("#submarine", {
      x: 0,
      y: 0,
      delay: 10,
    });
    submarine.to("#submarine", {
      x: -220,
      y: 40,
      rotate: -30,
      duration: 10,
    });
    submarine.to("#submarine", {
      x: -210,
      y: 240,
      rotate: -65,
      duration: 5,
    });
    submarine.to("#submarine", {
      x: -510,
      y: 320,
      rotate: -20,
      duration: 3,
    });
    submarine.to("#submarine", {
      x: -600,
      y: 560,
      rotateY: -130,
      rotateZ: 55,
      duration: 5,
    });
    submarine.to("#submarine", {
      x: 90,
      y: 850,
      rotate: 10,
      duration: 5,
      opacity: 0,
    });
    submarine.to(".Underwater_Submarine", {
      x: 0,
      y: 0,
      opacity: 1,
    });
    submarine.to(".Underwater_Submarine", {
      x: -400,
      y: 500,
      duration: 5,
    });
    gsap.to("#backMountain",{
        scrollTrigger:{
          scrub:1
        },
        y:500
    });
    gsap.to(".cloud1",{
        scrollTrigger:{
          scrub:1
        },
        x:500
    });
    tee.to(".truck",{
        motionPath:{
            path:[{x:0},{x:160}],
            align:'self',
            alignOrigin: [0.5, 0.5],

        },
     duration:10,
      repeat:-1,
       yoyo:true,
    })
    tee.to(".tractor",{
        motionPath:{
            path:[{x:0,y:0},{x:130,y:80},],
            align:'self',
            alignOrigin: [0.5, 0.5],
            // autoRotate:true
        },
     duration:10,
      repeat:-1,
      immediateRender:true,
       yoyo:true,
    });
    tee.to(".tanker",{
        motionPath:{
            path:[{x:0,y:0},{x:-18,y:-40},{x:-90,y:-90}],
            align:'self',
            alignOrigin: [0.5, 0.5],
            // autoRotate:-70
        },
      repeat:-1,
      immediateRender:true,
       yoyo:true,
       duration:30
    });
    tee.to(".birds1",{
        x:200,
        y:90,
        duration:20,
        repeat:-1,
        yoyo:true  
      });
    tee.to(".birds",{
        x:200,
        y:-90,
        duration:20,
        repeat:-1,
        yoyo:true  
      });
    tee.to(".helicaptor",{
        motionPath:{
            path:[{x:0,y:10},{x:-130,y:40},{x:-200,y:-10},{x:-400,y:-100},{x:-400,y:-300}],
            align:'self',
            alignOrigin: [0.5, 0.5],
            // autoRotate:true
        },
     duration:10,
      repeat:-1,
      immediateRender:true,
       yoyo:true,
       scale: (3.0),
    });
   
  }, []);

  return (
    <Style>
      <div className="sky_image"><img src={Sky} alt="Sky_Image"/> </div>

      <div className="moutian_frame">
        {/* <img src={Mountain} alt="Mountian_frame"/> */}
        <img
          src={BackMountains}
          alt="Mounatins"
          className="back"
          id="backMountain"
        />
        <img src={Cloud1} alt="Clod_1" className="cloud1" />
        {/* <img src={Cloud2} alt="Clod_1" className='cloud2'/>
         <img src={Cloud3} alt="Clod_1" className='cloud3'/> */}
      </div>
      <div className="Water_image" id="content">
        <div className="moutian_frames">
          <img
            src={FrontMountains}
            alt="Mountains"
            className="front"
            id="forntMountain"
          />
        </div>

        <div ref={warRef} className="warShip" id="warShip">
          <img src={War_Ship} alt="War Ship" />
        </div>
        <div className="phase3">
          <img src={Phase3} alt="Phase3" />
          <img src={Phase1Truck} alt="Truck" className='truck'/>
            <img src={Phase1Tractor} alt="Tractor" className='tractor'/>
            <img src={Smoke} alt="Smoke" className='smoke'/>
            <img src={Smoke} alt="Smoke" className='smoke1'/>
            <img src={Smoke} alt="Smoke" className='smoke2'/>
            <img src={Smoke} alt="Smoke" className='smoke3'/>
            <img src={Smoke} alt="Smoke" className='smoke4'/>
            <img src={Windmill} alt="Windmall" className='windmall'/>
            <img src={Phase1Helicaptor} alt="Helicaptor" className='helicaptor'/>
            <img src={Phase1Windmill} alt="WindMill" className="windmill"/>
        </div>
        <div className="phase2">
          <img src={Phase2} alt="Phase2" />
          <img src={Smoke} alt="Smoke" className='smoke'/>
            <img src={Smoke} alt="Smoke" className='smoke1'/>
            <img src={Phase2Windmill} alt="WindMill" className='windmill'/>
            <img src={Phase2Birds1} alt="Birds" className='birds1'/>
            <img src={Phase2Birds} alt="Birds" className='birds'/>
            <img src={Phase2Tanker} alt="Tanker" className='tanker'/>
            <img src={Phase2Tanker1} alt="Tanker" className='tanker1'/>
        </div>
        <div className="island">
          <img src={Island} alt="Island" />
        </div>
        <div className="phase4">
          <img src={Phase4} alt="Phase4" />
        </div>
        <div className="phase8">
          <img src={Phase8} alt="Phase8" />
        </div>
        <div className="phase10">
          <img src={Phase10} alt="Phase10" />
        </div>
        <div className="submarine" id="submarine">
          <img src={Submarine} alt="Submarine" />
        </div>
        <div className="Underwater_Submarine" id="#underWater">
          <img src={Underwater_Submarine} alt="Underwater_Submarine" />
        </div>
      </div>
    </Style>
  );
};

export default Index;
