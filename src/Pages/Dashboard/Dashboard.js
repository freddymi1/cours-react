import Accordion from './Accordion/Accordion';
import Containts from './Containts/Containts'
export default function Dashboard(){
    return(
        <>
            <div className="bg-green-400">
                <Accordion 
                    content={<Containts/>}
                />
            </div>
        </>
    )
}