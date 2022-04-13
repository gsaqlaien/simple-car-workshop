import React from 'react';
import Expert from './Expert';

import expert1 from '../../../images/experts/expert1.png';
import expert2 from '../../../images/experts/expert2.png';
import expert3 from '../../../images/experts/expert3.png';
import expert4 from '../../../images/experts/expert4.png';
import expert5 from '../../../images/experts/expert5.png';
import expert6 from '../../../images/experts/expert6.png';

const experts = [
    { id: 1, name: "jason smith", img: expert1 },
    { id: 2, name: "mason mount", img: expert2 },
    { id: 3, name: "Samuel Smith", img: expert3 },
    { id: 4, name: "Giorgio geovanni", img: expert4 },
    { id: 5, name: "Alan Smith", img: expert5 },
    { id: 6, name: "jason Charles", img: expert6 },
]

const Experts = () => {
    return (
        <div id="exparts" className='container'>
            <h2 className='text-info text-center'>OUR EXPERTS: {experts.length}</h2>
            <div className='row '>
                {
                    experts.map(expert =>
                        <Expert
                            key={expert.id}
                            expert={expert}
                        ></Expert>
                    )
                }
            </div>
        </div>
    );
};

export default Experts;