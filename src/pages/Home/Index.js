import React, { useEffect, useState} from "react";
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
import WarShip from "../../assets/WarShip.svg";
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
import Camel from "../../assets/Camel.gif";
import Camel2 from "../../assets/Camel2.gif";
import Phase2Windmill from "../../assets/Phase2_windmill.gif";
import Smoke from "../../assets/smoke.gif";
import Cloud1 from "../../assets/Cloud1.svg";
import F18 from "../../assets/F18.svg";
import IslandTruck2 from "../../assets/IslandTruck2.svg";
import IslandTruck1 from "../../assets/IslandTruck1.svg";
import AircraftCarrier from "../../assets/AircraftCarrier.svg";
import Phase1Helicaptor from "../../assets/Phase1_helicaptor.svg";
import Helicaptor from "../../assets/helicaptor.gif";
import WindWhite from "../../assets/WindWhite.gif";
import Scuba from "../../assets/Scuba.gif";
import Dragon from "../../assets/Dragon.gif";
import Dragon2 from "../../assets/Dragon2.gif";
import Phase4Truck from "../../assets/Phase4Truck.svg";
import OilBoat from "../../assets/OilBoat.svg";
import Boat1 from "../../assets/boat1.svg";
import Boat2 from "../../assets/boat2.svg";
import Boat3 from "../../assets/boat3.svg";
import Bubbles from "../../assets/Bubbles.svg";
import Phase4helicaptor from "../../assets/Phase4helicaptor.svg";
import Tractor10 from "../../assets/Tractor10.png";
import "gsap/CSSPlugin";
gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
gsap.registerEffect({
  name: "zoom",
  effect: (targets, config) => {
    const vars = {transformOrigin: "0px 0px", ...config},
          { scale, origin } = config,
          clamp = gsap.utils.clamp(-100 * (scale - 1), 0);
    delete vars.origin;
    vars.xPercent = clamp((0.5 - origin[0] * scale) * 100);
    vars.yPercent = clamp((0.5 - origin[1] * scale) * 100);
    vars.overwrite = "auto";
    return gsap.to(targets, vars);
  },
  extendTimeline: true,
  // defaults: {origin: [0.5, 0.5], scale: 2}
});
const Index = () => {
  const [index,setIndex]=useState(0);
  
  const zoomData = [
    {scale: 1, origin: [0, 0]},
    {scale: 1.5, origin: [0.25, .35]},
    {scale: 1.5, origin: [0.75, .4]},
    {scale: 1.5, origin: [0.65, .45]},
    {scale: 1.5, origin: [0.60, .47]},
    {scale: 1.5, origin: [0.75, .53]},
    {scale: 1.5, origin: [0.25, .6]},
  ];
  
  useEffect(() => {
    const tween = gsap.timeline({
      scrollTrigger: {
        scrub: 1.5,
        start: "12% 12%",
        end: "+=1500px",
    // onUpdate: self => {
    //   gsap.to("#warShip", {rotation: () => self.direction === 1 ? 0 : -180, overwrite: 'auto'});
    //   },
    onUpdate:(self)=>{
      
      if(self.progress>0.067 && self.progress<0.154){
      setIndex(1);
      }
      else if(self.progress>0.212 && self.progress<0.26){
        setIndex(2);
      }
      else if(self.progress>0.437 && self.progress<0.49){
        setIndex(3);
      }
      else if(self.progress>0.80 && self.progress<0.95){
        setIndex(4);
      }
      else{
        setIndex(0);
      }
    },
    }
    });
    const submarine = gsap.timeline({
      scrollTrigger: {
        scrub: 1,
        start: "1700px",
        end: "+=1800px",
        onUpdate:(self)=>{
          if(self.progress>0.38 && self.progress<0.6){
            setIndex(5);
            }
         else if(self.progress>0.75 && self.progress<0.80){
            setIndex(6);
            }
            else{
              setIndex(0);
            }
        }
      },
    });
    tween.to("#warShip", {
      motionPath: {
        path: [
          { x: 0, y: 0 },
          { x: -120, y: 90 },
          { x: -350, y: 160},
          { x: -180, y: 230 },
          { x: -280, y: 350 },
          { x: -100, y: 450 },
          { x: -120, y: 720 },
          { x: 220, y: 850 },
          { x: -190, y: 980 },
          { x: 300, y: 1450 },
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
    
    });
    submarine.to("#submarine", {
      x: -150,
      y: 40,
      rotate: -30,
      duration: 10,
    });
    submarine.to("#submarine", {
      x: -220,
      y: 240,
      rotate: -65,
      duration: 20,
    });
    submarine.to("#submarine", {
      x: -500,
      y: 400,
      rotate: 0,
      duration: 3,
    });
    submarine.to("#submarine", {
      x: -460,
      y: 760,
      duration: 5,
      rotateZ:-150,
      autoRotate:true
    });
    submarine.to("#submarine", {
      x: 90,
      y: 850,
       rotate: -170,
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
        x:300,
    });

    gsap.to(".truck",{
        motionPath:{
            path:[{x:0},{x:160}],
            align:'self',
            alignOrigin: [0.5, 0.5],

        },
     duration:10,
      repeat:-1,
       yoyo:true,
    })
    gsap.to(".tractor",{
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
    gsap.to(".tanker",{
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
    gsap.to(".birds1",{
        x:200,
        y:90,
        duration:20,
        repeat:-1,
        yoyo:true  
      });
    gsap.to(".birds",{
        x:200,
        y:-90,
        duration:20,
        repeat:-1,
        yoyo:true  
      });
    gsap.to(".helicaptor",{
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
   gsap.to(".f18",{
    motionPath:{
      path:[{x:0,y:10},{x:130,y:-40},{x:200,y:-10},{x:400,y:-100},{x:400,y:-300},{x:100,y:-200}],
      align:'self',
      alignOrigin: [0.5, 0.5],
      autoRotate:300
  },
duration:50,
repeat:-1,
immediateRender:true,
 scale: (2.0),
   });
   gsap.to('.militaryTruck',{
    x:150,
    y:95,
    duration:30,
    repeat:-1,
   });
   gsap.to('.militaryTruck2',{
    x:-180,
    y:0,
    duration:20,
    repeat:-1,
    rotate: 20,
   });
   gsap.to('.militaryTruck3',{
    x:400,
    y:70,
    duration:50,
    repeat:-1,
    rotate: -30,
   });
   gsap.to('.aircraftCarrier',{
    x:400,
    y:-95,
    duration:40,
    repeat:-1,
    rotation:-10
   });
   gsap.to(".camel",{
    motionPath:{
      path:[{x:300,y:5},{x:400,y:10},{x:600,y:30}],
      align:'self',
      alignOrigin: [0.5, 0.5],
      // autoRotate:0,
  },
    duration:200,
    repeat:-1,
    // rotate: -20,
   });
   gsap.to(".camel1",{
    x:-430,
    y:-20,
    duration:100,
    repeat:-1,
    rotate: -10
   });
   gsap.to(".baseTruck",{
    motionPath:{
      path:[{x:0,y:0},{x:150,y:30},{x:200,y:10},{x:510,y:70}],
      align:'self',
      alignOrigin: [0.5, 0.5],
      autoRotate:-30,
  },
    duration:30,
    repeat:-1,
    rotate: -20,
   });
   gsap.to(".helicaptor4",{
    motionPath:{
      path:[{x:0,y:0},{x:300,y:50},{x:600,y:120},{x:900,y:500},{x:600,y:450},{x:300,y:500},{x:100,y:450}],
      align:'self',
      alignOrigin: [0.5, 0.5],
      autoRotate:-10,
  },
    duration:20,
    repeat:-1,
    delay:2,
    scale: 1.0
   });
   gsap.to(".helicaptop41",{
    motionPath:{
      path:[{x:0,y:0},{x:300,y:50},{x:600,y:120},{x:900,y:-50},{x:700,y:-150},{x:500,y:-280},{x:300,y:-350}],
      align:'self',
      alignOrigin: [0.5, 0.5],
      autoRotate:-20,
  },
    duration:20,
    repeat:-1,
   });
   gsap.to(".boat",{
    motionPath:{
      path:[{x:300,y:100},{x:400,y:200},{x:450,y:350}],
      align:'self',
      alignOrigin: [0.5, 0.5],
      autoRotate:-30,
  },
    duration:30,
     repeat:-1,
   });
   gsap.to("#warShip1",{
    x:340,
    y:400,
    duration:20,
rotate: 20,
repeat:-1
   });
   gsap.to('.boat2',{
    x:-115,
    y:250,
    duration:25,
    rotateX: -20,
    repeat:-1,
    delay:10,
   });
   gsap.to('.boat1',{
    x:75,
    y:-168,
    duration:20,
    rotate: -20,
    repeat:-1,
    delay:5,
   });
   gsap.to('.boat3',{
    motionPath:{
      path:[{x:300,y:300},{x:420,y:350}]
    },
    duration:45,
    rotate: -20,
    repeat:-1,
   });
   gsap.to(".birds8",{
    x:-400,
    y:300,
    rotate: -50,
    duration:15,
    scale: 2.0,
    repeat:-1,
   });
   gsap.to(".tractor10",{
    motionPath:{
      path:[{x:0,y:0},{x:-30,y:-60},{x:-200,y:-160},{x:-205,y:-170}],
      align:"self",
      autoRotate:90,
    },
    // rotate: -20,
    duration:20,
    repeat:-1,
   });
   gsap.to(".dragon2",{
    motionPath:{
      path:[{x:0,y:0},{x:50,y:-120},{x:200,y:-290},{x:250,y:-400}],
      align:"self",
      autoRotate:90
    },
    duration:20,
    repeat:-1,
   });
   gsap.to(".scuba",{
    motionPath:{
       path:[{x:0,y:0},{x:-300,y:300},{x:-800,y:400},{x:-1200,y:200}],
       align:"self",
       autoRotate:-180,
    },
    duration:60,
    repeat:-1
   });
   gsap.to(".bubble",{
    y:-400,
    duration:10,
    repeat:-1,
    scaleY:1.5,
    opacity: 0.1,
   });
   gsap.to(".bubble1",{
    y:-400,
    duration:10,
    repeat:-1,
    scaleY:1.5,
    opacity: 0.1,
   })
  }, []);

useEffect(()=>{
  gsap.effects.zoom(".Water_image", {
    scale: zoomData[index].scale,
    origin: zoomData[index].origin,
    duration: 1,
    ease: "power1.inOut"
  });
},[index]);
 
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

        <div className="warShip" id="warShip">
          <img src={War_Ship} alt="War Ship" />
        </div>
        <div className="phase3">

          <img src={Phase3} alt="Phase3"  id="#img"/>
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
            {/* <img src={OilBoat} alt="Boat" className="boat"/> */}

            
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
          <img src={F18} alt="F-18" className="f18"/>
          <img src={AircraftCarrier} alt="Aircraft Carrire" className="aircraftCarrier"/>
          <img src={IslandTruck1} alt="Military Truck" className="militaryTruck"/>
          <img src={IslandTruck2} alt="Military Truck" className="militaryTruck2"/>
          <img src={IslandTruck1} alt="Military Truck" className="militaryTruck3"/>
        </div>
        <div className="phase4">
          <img src={Phase4} alt="Phase4" />
          <img src={Camel} alt="Camel" className="camel"/>
          <img src={Camel2} alt="Camel" className="camel1"/>
          <img src={Helicaptor} alt="Helicaptor" className="helicaptor4"/>
          <img src={Phase4Truck} alt="Truck" className="baseTruck"/>
          <img src={Phase4helicaptor} alt="Helicaptor" className="helicaptop41"/>
        </div>
        <div className="phase8">
          <img src={Phase8} alt="Phase8" />
          <img src={Phase2Birds} alt="Birds" className="birds8"/>
          <img src={Dragon} alt="Dragon" className="dragon"/>
          <img src={Dragon2} alt="Dragon" className="dragon2"/>
        </div>
        <div className="phase10">
          <img src={Phase10} alt="Phase10" />
          <img src={Phase1Windmill} alt="Wind Mill" className="windmill"/>
          <img src={Phase1Windmill} alt="Wind Mill" className="windmill1"/>
          <img src={Boat1} alt="Boat" className="boat1"/>
          <img src={Boat2} alt="Boat" className="boat2"/>
          <img src={Boat3} alt="Boat" className="boat3"/>
          <img src={WarShip} alt="War_Ship" className="warShip" id="warShip1"/>
          <img src={Tractor10} alt="Tractor" className="tractor10"/>
          <img src={WindWhite} alt="Wind_Mill" className="windWhite"/>
        </div>
        <div className="submarine" id="submarine">
          <img src={Submarine} alt="Submarine" />
        </div>
        <div className="Underwater_Submarine" id="#underWater">
          <img src={Underwater_Submarine} alt="Underwater_Submarine" />
        </div>
        <div className="scuba">
          <img src={Scuba} alt="Scuba" />
        </div>
        <div className="bubble">
          <img src={Bubbles} alt="Bubble"/>
        </div>
        <div className="bubble1">
          <img src={Bubbles} alt="Bubble"/>
        </div>
      </div>
    </Style>
  );
};

export default Index;
