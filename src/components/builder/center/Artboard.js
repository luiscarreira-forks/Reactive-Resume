import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { useSelector } from '../../../contexts/ResumeContext';
import TemplateContext from '../../../contexts/TemplateContext';
import Onyx from '../../../templates/Onyx';
import styles from './Artboard.module.css';

const Artboard = () => {
  const { selected, blocks, colors } = useContext(TemplateContext);
  const state = useSelector((store) => store);
  const { id, name } = state;

  return (
    <div>
      <Helmet>
        <title>{name} | Reactive Resume</title>
        <link rel="canonical" href={`https://rxresu.me/app/builder/${id}`} />
      </Helmet>

      <div id="artboard" className={styles.container}>
        {selected === 'Onyx' && (
          <Onyx data={state} layout={blocks} colors={colors} />
        )}
      </div>
    </div>
  );
};

export default Artboard;
