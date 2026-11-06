import { Fragment } from "react";
import Reveal from "./Reveal.jsx";
import { address } from "../data/site.js";

export default function Address({ style }) {
  return (
    <Reveal as="p" className="addr" style={style}>
      {address.map((line, i) => (
        <Fragment key={line}>
          {i > 0 && <br />}
          {line}
        </Fragment>
      ))}
    </Reveal>
  );
}
