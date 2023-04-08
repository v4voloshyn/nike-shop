import * as ICONS from './index';

type IconListOptions = Record<keyof typeof ICONS, any>;

export const ICON_LIST = Object.entries(ICONS).reduce<IconListOptions>(
  (acc, [iconName, IconComponent]) => {
    acc[iconName.replace(/icon$/i, '') as keyof typeof ICONS] = IconComponent({});
    return acc;
  },
  {} as IconListOptions
);
