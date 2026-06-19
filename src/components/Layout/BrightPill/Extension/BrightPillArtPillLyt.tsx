
import {CSSProperties, FC, memo} from 'react';

import {PillLayoutProps} from '../../../../data/Utils/UtilImportPropsDef';
import {resolveImageSrc} from '../../../../utils/SectionHelper';



const BrightPillArtPillLyt: FC<PillLayoutProps> = memo(
  ({children, ClassNameParent, ClassNameOverlay, ImgSrc}) => {
    const resolvedImgSrc = resolveImageSrc(ImgSrc)

    const imgStyle: CSSProperties | undefined = resolvedImgSrc
      ? {backgroundImage: `url(${resolvedImgSrc})`}
      : undefined;

    return (
      <div className={ClassNameParent}
           style={imgStyle}>
        <div className={ClassNameOverlay} />

        {children}

      </div>
    );
  },
);

BrightPillArtPillLyt.displayName = 'BrightPillArtPillLyt';
export default BrightPillArtPillLyt;