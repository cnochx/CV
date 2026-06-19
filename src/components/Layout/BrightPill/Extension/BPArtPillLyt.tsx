
import {CSSProperties, FC, memo} from 'react';

import {PillLayoutProps} from '../../../../data/Utils/UtilImportPropsDef';
import {resolveImageSrc} from '../../../../UtilComp/SectionHelper';



const BPArtPillLyt: FC<PillLayoutProps> = memo(
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

BPArtPillLyt.displayName = 'BPArtPillLyt';
export default BPArtPillLyt;