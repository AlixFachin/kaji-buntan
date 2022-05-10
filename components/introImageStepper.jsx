import { autoPlay } from 'react-swipeable-views-utils';
import { useTheme } from '@mui/material/styles';
import { useState } from 'react';
import {Box, MobileStepper, Paper, Typography, Button } from '@mui/material';
import SwipeableViews from 'react-swipeable-views';
import illust1 from '../public/images/illust-1.png';
import illust2 from '../public/images/illust-2.png';
import illust3 from '../public/images/illust-3.png';
import illust4 from '../public/images/illust-4.png';
import Image from 'next/image';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const images = [
  {
    imgPath: illust1,
  },
  {
    imgPath: illust2,
  },
  {
    imgPath: illust3,
  },
  {
    imgPath: illust4,
  },
];
  
  

export default function IntroImageStepper() {
    const theme = useTheme();
    const [activeStep, setActiveStep] = useState(0);
    const maxSteps = images.length;
  
    const handleStepChange = (step) => {
      setActiveStep(step);
    };
    return (
    <Box sx={{ maxWidth: 800, mt: 2 }}>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        interval={5000}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={index}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Image alt="introduction" src={step.imgPath} width={1024} height={1024}></Image>
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        sx={{justifyContent: "center", my: 1}}
      />
    </Box>
  );
}