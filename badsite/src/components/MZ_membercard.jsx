import React from 'react';

const MemberCard = ({member}) => {
    return (
        <div className="member-card">
        <img src={member.imageUrl} alt={`Foto de ${member.name}`} className="member-photo" />
        <h3 className="member-name">{member.name}</h3>
        {/* <p className="member-description">{member.description}</p> */}
        </div>
    );
}

export default MemberCard;