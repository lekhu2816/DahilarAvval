import React from 'react'
import './about.css'
import InfoCard from '../../component/infoCard/infoCard'
import { villageInfo } from '../../content'
const About = () => {
  return (
    <div className='about'>
        <h1 className='heading'>About</h1>
    <div className="overview">
    Dahilar Awwal Gram Panchayat is a Rural Local Body in Ghatampur Panchayat Samiti part of Kanpur Nagar Zila Parishad. There are total 3 Villages under Dahilar Awwal Gram Panchayat jurisdiction.The total geographical area of village is 441.58 hectares.It is situated 23km away from sub-district headquarter Ghatampur (Tehsildar office) and 67km away from district headquarter Kanpur Nagar. 
    </div>
    <div className="section-info">
      {
        villageInfo.map((info,index)=>{
            return(
          <InfoCard key={index} info={info}/>
            )
        })
      }
    </div>
    </div>
  )
}

export default About