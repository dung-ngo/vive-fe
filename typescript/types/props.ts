export type TInitialLayout = {
  background: {
    type: 'video' | 'image' | 'solid-color';
    src: string;
    position?: string;
  };
  headerContent?: {
    title: string;
    subTitle?: string;
  };
};
