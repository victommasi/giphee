export const breakpointSizes = {
  mobileS: 320,
  mobileL: 425,
  mobileXL: 576,
  tablet: 768,
  laptop: 1024,
  desktop: 1440,
};

export const size = {
  mobileS: `${breakpointSizes.mobileS}px`,
  mobileL: `${breakpointSizes.mobileL}px`,
  mobileXL: `${breakpointSizes.mobileXL}px`,
  tablet: `${breakpointSizes.tablet}px`,
  laptop: `${breakpointSizes.laptop}px`,
  desktop: `${breakpointSizes.desktop}px`,
};

export const devices = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileL: `(min-width: ${size.mobileL})`,
  mobileXL: `(min-width: ${size.mobileXL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  desktop: `(min-width: ${size.desktop})`,
};
