import './ContentArea.css';
import Content from './Content.js';


function ContentArea() {
    const contentArray = Content;
    return (
        <div className='contentArea'>
            {contentArray.map((content, index) => (
                <div key={index} className={`contentContainer${content.id}`} id={`${content.section}`} style={{ zIndex: `2` }}>
                    <div>
                        <h1 className="contentHeader">{content.header}</h1>
                        <p className="contentBody">{content.body.split('\n').map((line, i) => (
                            <span key={i}>
                                {line}
                                <br />
                            </span>
                        ))}</p>
                    </div>
                </div>
            ))}
        </div>
    )};
export default ContentArea;