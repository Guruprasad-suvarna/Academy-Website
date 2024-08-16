// import React, { useState } from 'react';
// import './Deep.css';

// const Deep = () => {
//     const [showMenu, setShowMenu] = useState(false);



//     return (
        
//         <nav className='deep-nav'>
//             <ul>
//                 <li onClick={() => setShowMenu(!showMenu)}>
//                     <a className='deep-nava'>DeepDiveSession </a>
//                     <br></br>
//                     <br></br>
//                     <br></br>
//                     <ul className={showMenu ? 'show' : ''}>
//                         <li><a>Hedis</a>
//                             <ul>
//                                 <li><a>Kt Day(1)</a></li>
//                                 <li><a>Kt Day(2)</a></li>
//                                 <li><a>Kt Day(3)</a></li>
//                                 <li><a>Kt Day(4)</a></li>
//                                 <li><a>Kt Day(5)</a></li>
//                                 <li><a>Kt Day(6)</a></li>
//                                 <li><a>Kt Day(7)</a></li>
//                                 <li><a>Kt Day(8)</a></li>
//                                 <li><a>Kt Day(9)</a></li>
//                             </ul>
//                         </li>
//                         <li><a>Fee Schedule</a>
//                             <ul>
//                                 <li><a>Kt Day(1)</a></li>
//                             </ul>
//                         </li>
//                         <li><a>Analytic Enablement</a>
//                             <ul>
//                                 <li><a>Kt Day(1)</a></li>
//                             </ul>
//                         </li>
//                         <li><a>EDI CMS Defacto and Astrata</a>
//                             <ul>
//                                 <li><a>CMS Defacto and Astrata</a></li>
//                                 <li><a>EDI (Data Migration)</a></li>
//                             </ul>
//                         </li>
//                     </ul>
//                 </li>
//             </ul>
//         </nav>
    
//     );
// };

// export default Deep;




import React, { useState } from 'react';
import './Deep.css';

const Deep = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <div className="scrollable-page">
            <nav className='deep-nav'>
                <ul>
                    <li onClick={() => setShowMenu(!showMenu)}>
                        <a className='deep-nava'>DeepDiveSession </a>
                        <br></br>
                        <br></br>
                        
                        <ul className={showMenu ? 'show' : ''}>
                            <li><a>Hedis</a>
                                <ul>
                                    <li><a href='https://hexawareonline.sharepoint.com/:v:/r/teams/ACFCAmeriHealthInduction/Shared%20Documents/General/03%20ACFC%20Tech%20Landscape/2%20Deep-dive%20tech-training%20sessions/02%20HEDIS%20Deep%20Dive/HEDIS%20KT%20(DAY%201).mp4?csf=1&web=1&e=Kk2aAK'>Kt Day(1)</a></li>
                                    <li><a href='https://hexawareonline.sharepoint.com/:v:/r/teams/ACFCAmeriHealthInduction/Shared%20Documents/General/03%20ACFC%20Tech%20Landscape/2%20Deep-dive%20tech-training%20sessions/02%20HEDIS%20Deep%20Dive/HEDIS%20KT%20(DAY%202).mp4?csf=1&web=1&e=BbjgYL'>Kt Day(2)</a></li>
                                    <li><a href='https://hexawareonline.sharepoint.com/:v:/r/teams/ACFCAmeriHealthInduction/Shared%20Documents/General/03%20ACFC%20Tech%20Landscape/2%20Deep-dive%20tech-training%20sessions/02%20HEDIS%20Deep%20Dive/HEDIS%20KT%20(DAY%203).mp4?csf=1&web=1&e=iAvl2w'>Kt Day(3)</a></li>
                                    <li><a href='https://hexawareonline.sharepoint.com/:v:/r/teams/ACFCAmeriHealthInduction/Shared%20Documents/General/03%20ACFC%20Tech%20Landscape/2%20Deep-dive%20tech-training%20sessions/02%20HEDIS%20Deep%20Dive/HEDIS%20KT%20(DAY%204).mp4?csf=1&web=1&e=ljIIbE'>Kt Day(4)</a></li>
                                    <li><a href='https://hexawareonline.sharepoint.com/:v:/r/teams/ACFCAmeriHealthInduction/Shared%20Documents/General/03%20ACFC%20Tech%20Landscape/2%20Deep-dive%20tech-training%20sessions/02%20HEDIS%20Deep%20Dive/HEDIS%20KT%20(DAY%205).mp4?csf=1&web=1&e=CpyR1m'>Kt Day(5)</a></li>
                                    <li><a href='https://hexawareonline.sharepoint.com/:v:/r/teams/ACFCAmeriHealthInduction/Shared%20Documents/General/03%20ACFC%20Tech%20Landscape/2%20Deep-dive%20tech-training%20sessions/02%20HEDIS%20Deep%20Dive/HEDIS%20KT%20(DAY%206).mp4?csf=1&web=1&e=4xGhHU'>Kt Day(6)</a></li>
                                    <li><a href='https://hexawareonline.sharepoint.com/:v:/r/teams/ACFCAmeriHealthInduction/Shared%20Documents/General/03%20ACFC%20Tech%20Landscape/2%20Deep-dive%20tech-training%20sessions/02%20HEDIS%20Deep%20Dive/HEDIS%20KT%20(DAY%207).mp4?csf=1&web=1&e=isbeyR'>Kt Day(7)</a></li>
                                    <li><a href='https://hexawareonline.sharepoint.com/:v:/r/teams/ACFCAmeriHealthInduction/Shared%20Documents/General/03%20ACFC%20Tech%20Landscape/2%20Deep-dive%20tech-training%20sessions/02%20HEDIS%20Deep%20Dive/HEDIS%20KT%20(DAY%208).mp4?csf=1&web=1&e=bXGJyg'>Kt Day(8)</a></li>
                                    <li><a href='https://hexawareonline.sharepoint.com/:v:/r/teams/ACFCAmeriHealthInduction/Shared%20Documents/General/03%20ACFC%20Tech%20Landscape/2%20Deep-dive%20tech-training%20sessions/02%20HEDIS%20Deep%20Dive/HEDIS%20KT%20(DAY%209).mp4?csf=1&web=1&e=HTlsAh'>Kt Day(9)</a></li>
                                
                                </ul>
                            </li>
                            <li><a>Fee Schedule</a>
                                <ul>
                                     <li><a href='https://hexawareonline.sharepoint.com/:v:/r/teams/ACFCAmeriHealthInduction/Shared%20Documents/General/03%20ACFC%20Tech%20Landscape/2%20Deep-dive%20tech-training%20sessions/01%20Fee%20Schedule%20Deep%20Dive/Fee%20Schedule%20KT%20(DAY%201).mp4?csf=1&web=1&e=korCbj'>Kt Day(1)</a></li>
                                </ul>
                            </li>
                            <li><a>Analytic Enablement</a>
                                <ul>
                                     <li><a href='https://hexawareonline.sharepoint.com/:v:/r/teams/ACFCAmeriHealthInduction/Shared%20Documents/General/03%20ACFC%20Tech%20Landscape/2%20Deep-dive%20tech-training%20sessions/03%20Analytical%20Enablement%20Deep%20Dive/Analytical%20Enablement%20KT%20(DAY%201).mp4?csf=1&web=1&e=NXOQoc'>Kt Day(1)</a></li>
                                </ul>
                            </li>
                            <li><a>EDI CMS Defacto and Astrata</a>
                                <ul>
                                    <li><a href='https://hexawareonline.sharepoint.com/:v:/r/teams/ACFCAmeriHealthInduction/Shared%20Documents/General/03%20ACFC%20Tech%20Landscape/2%20Deep-dive%20tech-training%20sessions/06%20EDI%20CMS%20Defacto%20and%20Astrata/CMS%20Defacto%20and%20Astrata.mp4?csf=1&web=1&e=I1sXAZ'>CMS Defacto and Astrata</a></li>
                                    <li><a href='https://hexawareonline.sharepoint.com/:v:/r/teams/ACFCAmeriHealthInduction/Shared%20Documents/General/03%20ACFC%20Tech%20Landscape/2%20Deep-dive%20tech-training%20sessions/06%20EDI%20CMS%20Defacto%20and%20Astrata/EDI%20(Data%20Migration).mp4?csf=1&web=1&e=gUeAxE'>EDI (Data Migration)</a></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Deep;
