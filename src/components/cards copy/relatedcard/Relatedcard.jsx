import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import "./Relatedcard.scss";
const Relatedcard = ({ name, image1, image2, description, path }) => {
    const [hover, setHover] = useState(false);
  return (
      <>
          <section className='relatedcard-main'>
              <Link to={path} className='relatedcard-container'>
                  <section className='related-image'>
                      <img
                          onMouseEnter={() => {
                              setHover((prev) => !prev);
                          }}
                          src={hover? image1:image2}
                          alt={name} />
                  </section>
                  <section className='related-description'>
                      <p>{name}</p>
                      <span>{description}</span>
                  </section>
              </Link>
          </section>
      </>
  )
}

export default Relatedcard