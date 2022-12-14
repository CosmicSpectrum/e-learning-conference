import React, {useState} from "react";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import Main from '../../static-media/Main.png';
import selectedMain from '../../static-media/selectedMain2.png';
import about from '../../static-media/about.png';
import selectedAbout from '../../static-media/selectedAbout2.png';
import Schedule from '../../static-media/Schedule.png';
import selectedSchedule from '../../static-media/selectedSchedule2.png';
import Signup from '../../static-media/signup.png';
import { PageData } from "../../pages/HomePage/pageData";


const BarContainer = styled.div({
    width: "101%",
    height: "4.5rem",
    backgroundColor: "rgba(186,129,197,0.95)",
    position: 'fixed',
    left: 0,
    bottom: "-1px",
    display: 'flex',
    justifyContent: 'center'
})

const IconsContainer = styled.div({
    display: 'flex',
    alignItems: 'center',
    justifyContent: "space-between",
    width: "85%"
})

const Icon = styled.img({
    height: '4.6rem'
})

export default function Bar({scheduleRef}){
    const [selectedIcon ,setSelected] = useState(3);
    const navigate = useNavigate();
    const location = useLocation();

    const scrollToSchedule = ()=>{
        scheduleRef.current?.scrollIntoView({ behavior: 'smooth'})
    }

    return(
        <BarContainer>
            <IconsContainer>
                <Icon 
                    src={selectedIcon === 1 ? selectedAbout : about} 
                    onClick={()=>{setSelected(1); navigate('/about-us')}}
                />
                <Icon 
                    src={selectedIcon === 3 ? 
                            selectedMain : Main} 
                    onClick={()=>{setSelected(3); window.scrollTo({top: 0, behavior: 'smooth'}); navigate('/e-learning-conference')}}
                />
                <Icon 
                    src={Signup} 
                    onClick={()=>{window.location.href = PageData.additionalInfo.signupForm}}
                />
                <Icon 
                    src={selectedIcon === 2 ? 
                            selectedSchedule : Schedule} 
                    onClick={()=>{
                        setSelected(2); 
                        if(location.pathname === "/about-us"){
                            navigate('/e-learning-conference');
                            setTimeout(scrollToSchedule, 200)
                        }else{
                            scrollToSchedule();
                        }
                    }}
                />
            </IconsContainer>
        </BarContainer>
    )
}