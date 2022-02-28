import styled from 'styled-components';



const Title = styled.h1`
    font-size:40px;
`



const Header = ({title, mode}) => {
    return (
        <>
            <Title>{title}</Title>
        </>
    )
}

export default Header;