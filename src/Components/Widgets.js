import React from 'react';
import './Widgets.css';
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
function Widgets() {
    const newsArticle = (heading, subtitle)=>(
       <div className="widgets__article">
           <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
           </div>
           <div className="widgets__articleRight">
               <h4>{heading}</h4>
               <p>{subtitle}</p>
           </div>
       </div>
    )
    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>
            {newsArticle("PAPA React is back", "Top news -9909 readers")}
            {newsArticle("Tesla Owners Silicon Valley", "handles a busy left turn like a champ.")}
            {newsArticle("Elon Musk", "Star Light, Star Bright, Turn up your brightness to see the stars")}
            {newsArticle("Reactjs", "React is declarative, efficient, and flexible Javascript library")}
            {newsArticle("New York Post", "ESPN colleagues react to Tom Rinaldi's exit: This one 'hurts' ")}
            {newsArticle("Javascript New'zz", "Confliction on Angular and NgXS lifecycle")}
            {newsArticle("Research", "Learning to Lead..")}
          

        </div>
    )
}

export default Widgets
