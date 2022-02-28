import styled from 'styled-components';


const Section = styled.section`
    font-size: 30px;
    text-align: left;
    padding-top: 30px;
`;

const Paragraph = styled.p`
    font-size: 20px;
    text-align: left;
    margin-bottom: 20px;
`

const Division = styled.div`
    display: flex;
    flex-direction: column;
`

const List = ({article, subtitle}) => {
     return (
         <Division>
            <Section> {article} </Section>
            <Paragraph>{subtitle} </Paragraph>
        </Division>
    )
    }

export default List;