import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
    <ContentLoader
        speed={2}
        width={280}
        height={465}
        viewBox="0 0 280 465"
        backgroundColor="#d5dbdd"
        foregroundColor="#ecebeb"
        {...props}
    >
        <circle cx="372" cy="99" r="31" />
        <rect x="3" y="243" rx="9" ry="9" width="274" height="26" />
        <rect x="0" y="294" rx="20" ry="20" width="280" height="88" />
        <rect x="13" y="405" rx="19" ry="19" width="91" height="46" />
        <rect x="120" y="405" rx="18" ry="18" width="152" height="45" />
        <circle cx="135" cy="117" r="116" />
    </ContentLoader>
)

export default Skeleton


