import React from "react";
import _ from "lodash";
import _NEW from "lodash-new";

const Home = () => {
  return (
    <div>
      <p>
        {_.toUpper("fooBar")} lodash version: {_.VERSION}
      </p>
      <p>
        {_NEW.toUpper("fooBar")} lodash version: {_NEW.VERSION}
      </p>
    </div>
  );
};

export default Home;
