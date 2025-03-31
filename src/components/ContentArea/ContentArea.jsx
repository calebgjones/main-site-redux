import './ContentArea.css';
import Content from './Content.js';
import Links from '../Embeds/LinkData.js';

function ContentArea() {
    const contentArray = Content;
    return (
        <>
           {contentArray.map((content, index) => (
    <div key={index} className='contentArea' id={`${content.section}`}>
        <div className={`contentContainer-${content.id}`} style={{ zIndex: 2 }}>
            <div>
                <h1 className="contentHeader">{content.header}</h1>
                <p className="contentBody">
                    {content.body.split('\n').map((line, i) => (
                        <span key={i}>
                            {line}
                            <br />
                        </span>
                    ))}
                        <div className='Links'>
                        <ul className='linkContainer'>
                            {content.links?.map((links, i) => (
                                <a key={i} className='linkActual' href={`${links.url}`} target='_blank' >
                                <li className='link' >
                                    {links.title}
                                </li>
                                </a>
                            ))}
                        </ul>
                        </div>
                        <div>
                        <ul className='iframeContainer'>
                            {content.iframes?.map((iframes, i) => (
                                <li className='iframe' key={i}>
                                    <iframe className='iframeActual' src={`${iframes.url}`} target='_blank' alt={`${iframes.title}`}></iframe>
                                </li>
                            ))}
                        </ul>
                    </div>
                </p>
            </div>
        </div>
    </div>
))}

            {/* <div className='linkContainer'>
                <ul>
                    <a href={`${Links[0].link}`}><li>Hello</li></a>
                </ul>
            </div> */}
        </>
    )};
export default ContentArea;