import styled from 'styled-components';

const Image = styled.img`
    width: 70px;
    height: 70px;
    border-radius: 50%;
`

const Description = styled.span`
    font-size: 18px;`

const Division1 = styled.div`
    display: flex;
    flex-direction: row;
`

const Division2 = styled(Division1)`
    flex-direction: column;
    justify-content: center;
    margin-left: 10px;
`

const Profile = ({urlImage, text1, text2}) => {
    return (
    <>
    <Division1>
        <Image src={urlImage}></Image>
            <Division2>
                <Description>{text1}</Description>
                <Description>{text2}</Description>
            </Division2>
    </Division1>
    </>
    )
}

export default Profile;