import isEmpty from 'lodash.isempty';
import { defaultColors, defaultScreens } from '../utils';

export class ThemeScanner {
  private readonly themeConfig: any;

  constructor(tailwindConfig: any) {
    this.themeConfig = tailwindConfig.theme;
  }

  getThemeColors = () => {
    const themeColors = isEmpty(this.themeConfig?.colors) ? defaultColors : this.themeConfig?.colors;
    const extendedThemeColors = this.themeConfig?.extend?.colors;
    return extendedThemeColors ? { ...themeColors, ...extendedThemeColors } : themeColors;
  };

  getThemeBreakpoints = () => {
    const themeBreakpoints = isEmpty(this.themeConfig?.screens) ? defaultScreens : this.themeConfig?.screens;
    const extendedThemeBreakpoints = this.themeConfig?.extend?.screens;
    const allConfigBreakpoints = extendedThemeBreakpoints
      ? { ...themeBreakpoints, ...extendedThemeBreakpoints }
      : themeBreakpoints;
    return Object.keys(allConfigBreakpoints);
  };
}
