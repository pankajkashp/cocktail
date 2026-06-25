import React from 'react'
import { openingHours, socials } from '../constents'
import gsap from "gsap";
import { SplitText, ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

const Contact = () => {
useGSAP(()=>{
    const titleSplit=SplitText.create('#contact h2',{type:'word'});

    const timeline=gsap.timeline({
        scrollTrigger:{
            trigger:'#contact',
            start:'top center',
        },
        ease:"power1.inout"
    })

    timeline.from(titleSplit.word,{
        opacity:0,
        yPercent:100,
        stagger:0.02
        
    })

    .from('#contact h3 ,#contact p',{
        opacity:0,yPercent:100,stagger:0.02
    })
    .to('#f-right-leaf',{
        y:'-50',duration:1, ease:'power1.inOut'
    })
})
 
  return (
    <footer id="contact">
        <img src="images/footer-right-leaf.png" alt="leaf-right" id="f-right-leaf"/>
        <img src="images/footer-left-leaf.png" alt="leaf-right" id="f-left-leaf"/>

        <div className="content">
            <h2>Where to find us</h2>

            <div>
                <h3>Visit Our Bar</h3>
                <p>(+91) 7878787878</p>
                <p>cocktail@gmail.com</p>
            </div>
            <div>
                <h3>Open Every Day</h3>
                {openingHours.map((time)=>(
                    <p key={time.day}>
                        {time.day}:{time.time}
                    </p>
                ))}
            </div>

            <div>
                <h3>Socials</h3>
                <div className="flex-center gap-5">
                    {socials.map((social)=>(
                        <a key={social.name}
                        href={social.url}
                        target='_blank'
                        rel="noopener noreferrer"
                        arai-label={social.name}
                        >
                            <img src={social.icon}/>
                        </a>
                    ))}
                </div>
            </div>
        </div>
        </footer>
  )
}

export default Contact