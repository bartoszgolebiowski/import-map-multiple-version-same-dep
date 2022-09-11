import React from "react";
import _OLD from "lodash-old";
import _NEW from "lodash";

const Home = () => {
  return (
    <div>
      <p>
        {_OLD.toUpper("fooBar")} lodash version: {_OLD.VERSION}
      </p>
        <p>
        {_NEW.toUpper("fooBar")} lodash version: {_NEW.VERSION}
      </p>
    </div>
  );
};

export default Home;
