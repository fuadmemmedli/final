import React from 'react'
import {Helmet} from "react-helmet";
const Add = () => {
  return (
    <div>
          <Helmet>
                <meta charSet="utf-8" />
                <title>ADD PAGE</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
        <div className="add">
            <div className="add__continer">

            <input type="text" placeholder='Ad'/><br />
            <input type="text" placeholder='Qiymet' /><br />
            <input type="text" placeholder='Img'/><br />
            <button>ADD</button>
            </div>
        </div>
    </div>
  )
}

export default Add