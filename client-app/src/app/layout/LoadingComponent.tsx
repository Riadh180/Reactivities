import React from "react";
import { Dimmer, Loader } from "semantic-ui-react";

const LoadingComponent: React.FC<{
  inverted?: boolean;
  content?: string;
}> = ({ content, inverted = false }) => {
  return (
    <Dimmer active inverted={inverted}>
      <Loader size="big" content={content}></Loader>
    </Dimmer>
  );
};

export default LoadingComponent;
