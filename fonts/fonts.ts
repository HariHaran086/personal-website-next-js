import localFont from 'next/font/local';

// Chillax font family (all weights)
export const chillax = localFont({
  src: [
    {
      path: './chillax/Chillax-Extralight.otf',
      weight: '200',
      style: 'normal',
    },
    {
      path: './chillax/Chillax-Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './chillax/Chillax-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './chillax/Chillax-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './chillax/Chillax-Semibold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './chillax/Chillax-Bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-chillax',
});

// Pilcrow Rounded font family (all weights)
export const pilcrowRounded = localFont({
  src: [
    {
      path: './Pilcrow/PilcrowRounded-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './Pilcrow/PilcrowRounded-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './Pilcrow/PilcrowRounded-Semibold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './Pilcrow/PilcrowRounded-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './Pilcrow/PilcrowRounded-Heavy.otf',
      weight: '900',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-pilcrow',
});

// Individual Chillax weights
export const chillaxExtralight = localFont({
  src: './chillax/Chillax-Extralight.otf',
  weight: '200',
  display: 'swap',
  variable: '--font-chillax-extralight',
});

export const chillaxLight = localFont({
  src: './chillax/Chillax-Light.otf',
  weight: '300',
  display: 'swap',
  variable: '--font-chillax-light',
});

export const chillaxRegular = localFont({
  src: './chillax/Chillax-Regular.otf',
  weight: '400',
  display: 'swap',
  variable: '--font-chillax-regular',
});

export const chillaxMedium = localFont({
  src: './chillax/Chillax-Medium.otf',
  weight: '500',
  display: 'swap',
  variable: '--font-chillax-medium',
});

export const chillaxSemibold = localFont({
  src: './chillax/Chillax-Semibold.otf',
  weight: '600',
  display: 'swap',
  variable: '--font-chillax-semibold',
});

export const chillaxBold = localFont({
  src: './chillax/Chillax-Bold.otf',
  weight: '700',
  display: 'swap',
  variable: '--font-chillax-bold',
});

// Individual Pilcrow weights
export const pilcrowRegular = localFont({
  src: './Pilcrow/PilcrowRounded-Regular.otf',
  weight: '400',
  display: 'swap',
  variable: '--font-pilcrow-regular',
});

export const pilcrowMedium = localFont({
  src: './Pilcrow/PilcrowRounded-Medium.otf',
  weight: '500',
  display: 'swap',
  variable: '--font-pilcrow-medium',
});

export const pilcrowSemibold = localFont({
  src: './Pilcrow/PilcrowRounded-Semibold.otf',
  weight: '600',
  display: 'swap',
  variable: '--font-pilcrow-semibold',
});

export const pilcrowBold = localFont({
  src: './Pilcrow/PilcrowRounded-Bold.otf',
  weight: '700',
  display: 'swap',
  variable: '--font-pilcrow-bold',
});

export const pilcrowHeavy = localFont({
  src: './Pilcrow/PilcrowRounded-Heavy.otf',
  weight: '900',
  display: 'swap',
  variable: '--font-pilcrow-heavy',
});