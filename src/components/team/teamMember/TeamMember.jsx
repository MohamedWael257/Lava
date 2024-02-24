import React, { memo, useEffect, useState } from 'react'
import './TeamMember.css'
import data from '../../../../public/data.json'
const TeamMember = memo(() => {
    const [members, setMembers] = useState([])
    useEffect(() => {
        if (data) {
            setMembers(data.team_member)
        }
    }, [data])
    // console.log(members);
    return (
        <>
            <section className="team-member">
                <h2>we are the best</h2>
                <h3>dream team</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis,
                    pulvinar dapibus leo.
                </p>
                <div className='members'>
                    {
                        members &&
                        members.map(member => {
                            return (
                                <div className='member' key={member.id}>
                                    <img src={member.img} className="member-img" alt="" />
                                    <h3 className="member-name">{member.name}</h3>
                                    <p className="member-track">{member.track}</p>
                                </div>
                            )
                        })
                    }
                </div>
                {/* <div className="members">
                    <div className="member">
                        <img src="images/Team-Image2.png" className="member-img" alt="" />
                        <h3 className="member-name">mohamed wael</h3>
                        <p className="member-track">full stack developer</p>
                    </div>
                    <div className="member">
                        <img src="images/Team-Image2.png" className="member-img" alt="" />
                        <h3 className="member-name">mohamed wael</h3>
                        <p className="member-track">full stack developer</p>
                    </div>
                    <div className="member">
                        <img src="images/Team-Image2.png" className="member-img" alt="" />
                        <h3 className="member-name">mohamed wael</h3>
                        <p className="member-track">full stack developer</p>
                    </div>
                    <div className="member">
                        <img src="images/Team-Image2.png" className="member-img" alt="" />
                        <h3 className="member-name">mohamed wael</h3>
                        <p className="member-track">full stack developer</p>
                    </div>
                    <div className="member">
                        <img src="images/Team-Image2.png" className="member-img" alt="" />
                        <h3 className="member-name">mohamed wael</h3>
                        <p className="member-track">full stack developer</p>
                    </div>
                    <div className="member">
                        <img src="images/Team-Image2.png" className="member-img" alt="" />
                        <h3 className="member-name">mohamed wael</h3>
                        <p className="member-track">full stack developer</p>
                    </div>
                    <div className="member">
                        <img src="images/Team-Image2.png" className="member-img" alt="" />
                        <h3 className="member-name">mohamed wael</h3>
                        <p className="member-track">full stack developer</p>
                    </div>
                </div> */}
            </section>
        </>
    )
})

export default TeamMember