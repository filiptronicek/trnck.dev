import React from "react";

const ExternalLink = (props: { href: string; children?: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal; }) => {
  return (
    <>
      <a href={props.href} className="underline" target="_blank" rel="noopener noreferrer">
        {props.children ? props.children : props.href}
      </a>
    </>
  );
};

export default ExternalLink;
