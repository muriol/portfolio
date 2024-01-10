import React from "react";
// SEO 처리 기능 패키지
import { Helmet, HelmetProvider } from "react-helmet-async";

const Meta = (props) => {
    return(
        <HelmetProvider>
            <Helmet>
                <meta charset="utf-8"/>
                <title>{props.title}</title>
                {/* SEO 태그 */}
                <meta name="description" content={props.description}/>
                <meta name="keywords" content={props.keywords} />
                <meta name="author" content={props.author} />
                <meta name="subject" content={props.subject} />
                <meta name="copyright" content={props.copyright} />
                <meta name="content-language" content="ko" />
                <meta name="og:type" content="website" />
                <meta name="og:title" content={props.title} />
                <meta name="og:description" content={props.description} />
                <meta name="og:url" content={props.url} />
                <meta name="og:image" content={props.image} />
                <link rel="icon" href={props.icon} type="image/png" />
                <link rel="shortcut icon" href={props.shortcutIcon} type="image/png" />
                <link rel="apple-touch-icon" href={props.appleTouchIcon} type="image/png" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
                <link rel="stylesheet" href="https://db.onlinewebfonts.com/c/62d5cccc8148eeafcf408feefeb15376?family=Carandache+Office+Sans+Regular" />
            </Helmet>
        </HelmetProvider>
    );
};

export default Meta;