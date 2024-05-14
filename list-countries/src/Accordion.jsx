import { useState } from "react";

const Accordion = () => {
    const [accordion, setAccordion] = useState(null)

    const data = [
        {id: 1, body: 'This is section for Accordion 1'},
        {id: 2, body: 'This is section for Accordion 2'},
        {id: 3, body: 'This is section for Accordion 3'},
    ]
    return (
        <>
            <div className="container">
                <h4>Accordion</h4>
                <div className="row">
                    {data.map(d => <div>
                        <button onClick={() => setAccordion(d.id)}>Accordion {d.id}</button>
                    </div> )}
                </div>
                <div className="card">
                    {accordion && <p>This is section for Accordion {accordion}</p>}
                </div>

            </div>
        </>
    );
}

export default Accordion;