
const HallMember = (member) => {
    return (
        <>
            <div className="membercard">
                    <img src={member.imageUrl} alt={`Foto de ${member.name}`} className="member-photo" />
                    <h3 className="member-name">{member.name}</h3>
            </div>
        </>
    );
}

export default HallMember;