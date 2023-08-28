import Image from 'next/image'
import Link from 'next/link';
import React from 'react';
import ScoreCard from '../../public/assets/projects/scorecardImgs.jpg';
import BuyConnect from '../../public/assets/projects/buyconnect.jpg';
import TraderaXpress from '../../public/assets/projects/tradexpress.jpg';
import ProjectItem from './ProjectItem';

const ProjectsComponent
 = () => {
  return (
    <div id='projects' className='w-full bg-slate-100'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-2xl font-bold  tracking-widest uppercase text-[#5651e5] '>My Projects
            </p> 
            
            <h3 className='py-4 '>Projects Worked On</h3> 
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>

            <ProjectItem title='ScoreCard' backgroundImg={ScoreCard} projectUrl='/scoreCard' />
            <ProjectItem title='BuyConnect' backgroundImg={BuyConnect} projectUrl='/buyConnect' />
            <ProjectItem title='TraderaXpress' backgroundImg={TraderaXpress} projectUrl='/traderaxpress' />
            

            </div>
        </div>

    </div>
  )
}

export default ProjectsComponent
