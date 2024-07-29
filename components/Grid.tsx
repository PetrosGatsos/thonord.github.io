'use client';
import React from 'react'
import { BentoGrid, BentoGridItem } from './BentoGrid'
import { cn } from '@/utils/cn'
import {gridItems} from '@/data/index'
import { useEffect, useState } from 'react'

const Grid = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(typeof document !== 'undefined');
  }, []);
  return (
    <section id="about">
        <BentoGrid>
            {gridItems.map(({id, title, description, className, img, imgClassName, titleClassName, spareImg} ) => (
                <BentoGridItem 
                id={id}
                key={id}
                title={title}
                description={description}
                className={className}
                img={img}
                imgClassName = {imgClassName}
                titleClassName={titleClassName}
                spareImg={spareImg}
                />
            ))}
        </BentoGrid>
    </section>
  )
}

export default Grid