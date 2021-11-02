import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import Slider from '@mui/material/Slider';
import './index.css';
import BackgroundImage from './Images/Background.png';

const PageLayout = () => {
  const [buttonClicks, setButtonClicks] = useState(0);
  const [showWidgit, setShowWidgit] = useState(false);

  const [slider1, setSlider1] = useState(0);
  const [slider2, setSlider2] = useState(0);
  const [slider3, setSlider3] = useState(0);
  const [slider4, setSlider4] = useState(0);
  const [slider5, setSlider5] = useState(0);
  const [slider6, setSlider6] = useState(0);
  const [slider7, setSlider7] = useState(0);
  const [widgetButton, setWidgetButton] = useState(0);

  const [widgetImage1, setWidgetImage1] = useState('');
  const [widgetImage2, setWidgetImage2] = useState('');

  useEffect(() => {
    setWidgetImage1(`https://gba-backend.jundeliu.com:8080/Page3Plot1/${slider1}/${slider2}/${slider3}/${slider4}/${slider5}/${slider6}/${slider7}`)
  }, [widgetButton])
  useEffect(() => {
    setWidgetImage2(`https://gba-backend.jundeliu.com:8080/Page3Plot2/${slider1}/${slider2}/${slider3}/${slider4}/${slider5}/${slider6}/${slider7}`)
  }, [widgetButton])

  const MainTitle = () => {
    return(
      <div className="main-title-div text-center text-5xl mx-36 py-6 px-10 shadow-3xl rounded-2xl bg-sky-300 bg-opacity-80 text-blueGray-800 hover:bg-rose-400 hover:text-blueGray-100 transition duration-1000">
        Part Two &nbsp;&nbsp;&nbsp;&nbsp; Explore Social Disparity
      </div>
    )
  }
  const IntroParagraph = () => {
    return(
      <div className="intro-paragraph-div text-center text-3xl mx-48 px-24 py-10 leading-relaxed rounded-3xl shadow-3xl bg-blueGray-700 bg-opacity-40 text-coolGray-200 hover:bg-sky-300 hover:text-coolGray-900 transition duration-1000">
        We've learned that one of the many strengths of GBA is its connectivity. Different cities, each with its unique functioning, come together to form a megacity. However, if there is a significant disparity in living standards between cities, it would undoubtedly hinder the freedom of human traffic among cities. On this page, you can explore the social disparity between GBA cities by playing a little game. Imagine you are a finance officer for the GBA and your duty is to allocate government budget to various sectors, such as Health, Education, Social Welfare etc. First, you can decide which sectors need more government actions, and then you can prioritise those sectors by assigning them a higher importance rating. Finally, click "Generate Plot" to see the social disparity score based on your specification. The higher the social disparity score, the more well-to-do a city is. For example, if you believe a well-educated society would be more prosperous, you can assign education a higher rating (4 or 5 stars). What's there to wait? Click "Proceed to Wdigit" to continue!
      </div>
    )
  }

  const Widget = () => {
    return(
      <div className="main-widget-div grid grid-cols-4 gap-0">
        <div className="p-4 mx-0 rounded-3xl leading-loose text-2xl text-warmGray-200 shadow-3xl bg-blueGray-800 bg-opacity-60">
          Specify the importance for each factor on a scale of 0 to 100 :
          <br></br>
          (0: No Importance
          <br></br>
          100: Extremely Important)
          <br></br>
          <br></br>
          1. Health Care :
          <Slider color="primary" defaultValue={slider1} onChange={(event, newValue) => {setSlider1(newValue);}} valueLabelDisplay="auto" step={10} marks min={0} max={100} />
          <br></br>
          2. Education :
          <Slider color="primary" defaultValue={slider2} onChange={(event, newValue) => {setSlider2(newValue);}} valueLabelDisplay="auto" step={10} marks min={0} max={100} />
          <br></br>
          3. Social Welfare :
          <Slider color="primary" defaultValue={slider3} onChange={(event, newValue) => {setSlider3(newValue);}} valueLabelDisplay="auto" step={10} marks min={0} max={100} />
          <br></br>
          4. Employment :
          <Slider color="primary" defaultValue={slider4} onChange={(event, newValue) => {setSlider4(newValue);}} valueLabelDisplay="auto" step={10} marks min={0} max={100} />
          <br></br>
          5. Economical Development :
          <Slider color="primary" defaultValue={slider5} onChange={(event, newValue) => {setSlider5(newValue);}} valueLabelDisplay="auto" step={10} marks min={0} max={100} />
          <br></br>
          6. Technological Development :
          <Slider color="primary" defaultValue={slider6} onChange={(event, newValue) => {setSlider6(newValue);}} valueLabelDisplay="auto" step={10} marks min={0} max={100} />
          <br></br>
          7. Environmental Protection :
          <Slider color="primary" defaultValue={slider7} onChange={(event, newValue) => {setSlider7(newValue);}} valueLabelDisplay="auto" step={10} marks min={0} max={100} />
          <br></br>
          <button type="button" onClick={() => {setWidgetButton(widgetButton + 1);}} className="w-60 transition duration-1000 bg-rose-600 text-gray-100 hover:bg-green-300 hover:text-gray-800 px-4 py-2 mx-24 my-2 rounded-2xl text-2xl">Generate Plot</button>
        </div>
        <div className="col-span-3 mx-24">
          <div className="mt-8 mb-8 shadow-3xl rounded-3xl bg-purple-900 bg-opacity-50 p-0">
            <img src={widgetImage1} onError={(event) => event.target.style.display = 'none'}></img>
          </div>
          <div className="mt-16 mb-8 shadow-3xl rounded-3xl bg-purple-900 bg-opacity-50 p-0">
            <img src={widgetImage2} onError={(event) => event.target.style.display = 'none'}></img>
          </div>
        </div>
      </div>
    )
  }

  return(
    <div className="container-2xl w-screen h-xl bg-contain" style={{backgroundImage: `url(${BackgroundImage})`}}>
      <CSSTransition in={buttonClicks<1} appear={true} timeout={700} onExited={() => {setShowWidgit(true);}} classNames="main-title" unmountOnExit>
        <MainTitle />
      </CSSTransition>
      <CSSTransition in={buttonClicks<1} appear={true} timeout={700} onExited={() => {setShowWidgit(true);}} classNames="intro-paragraph" unmountOnExit>
        <IntroParagraph />
      </CSSTransition>
      <CSSTransition in={buttonClicks<1} appear={true} timeout={700} onExited={() => {setShowWidgit(true);}} classNames="main-button" unmountOnExit>
        <div>
          <button type="button" className="main-button-div bg-opacity-80 rounded-xl p-6 text-2xl bg-rose-600 text-gray-100 z-50 hover:bg-gray-100 hover:text-gray-600 shadow-3xl transition duration-1000 font-bold" onClick={()=>{setButtonClicks(buttonClicks + 1);}}>Proceed to the Widget</button>
          <div className="main-button-ring ring-2 rounded-xl p-6 text-2xl ring-rose-600 text-transparent z-40">Proceed to the Widget</div>
        </div>
      </CSSTransition>
      <CSSTransition in={showWidgit} timeout={500} classNames="main-widget" unmountOnExit>
        <Widget />
      </CSSTransition>
    </div>
  )
}

ReactDOM.render(
  <PageLayout />,
  document.getElementById('root')
);