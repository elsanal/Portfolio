import { Wrapper } from "../../Components/Style-Components/Wrapper";
import {ColCard, RowCard} from "../../Components/Style-Components/CardView";
import {Title} from "../../Components/Style-Components/Title";

function Loading(){
    return(
        <Wrapper>
            <RowCard>
            <ColCard width="100%">
                <div style={{height:'100%'}}>
                    <Title>Loading...</Title>
                </div>    
            </ColCard>
            </RowCard>
        </Wrapper>
    )
}

export default Loading