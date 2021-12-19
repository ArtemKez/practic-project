import React from 'react';
import { Link } from 'react-router-dom';
import articles from './agencyData.json';
import styles from './AgencyLevel.module.sass';

const iconColors=[
  {color:'#ff0000', backgroundColor:'#ff000033'},
  {color:'#00ff00', backgroundColor:'#00ff0033'},
  {color:'#0000ff', backgroundColor:'#0000ff33'}
]

const AgencyLevel = () => {
  return (
    <section>
      <h2 className={styles.h2_color_style}>Agency Level Experience</h2>
      <div className={styles.agency_wrapper}>
        {
          articles.map((article, index)=>(
              <article className={styles.sectionBlock} key={index}>
                <div className={styles.iconStyle} style={iconColors[index]}>
                  <i className={`${article.icon} fa-2x`}></i>
                </div>
                <h3 className={styles.h3_color_style}>{article.title}</h3>
                <p className={styles.p_color_style}>{article.description}
                  <Link className={styles.a_style} to={article.link}> Learn More.</Link>
                </p>
              </article>
          ))
        }
      </div>
    </section>
  );
}

export default AgencyLevel;
