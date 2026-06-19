import classNames from 'classnames';
import {FC, memo} from 'react';

import {HeaderLayoutProps} from '../../../data/Utils/UtilImportPropsDef';
import {getHeaderBorder, getHeaderClass} from '../../../utils/Layout/HeaderLayoutSub';


const HeaderLayout: FC<HeaderLayoutProps> = memo(
  ({
     children,
     ClassName,
     UseVariantText,
     UseTextColor,
     SetBorder,
     TitleSuffixClassName,
     TitleSuffix,
    SetHover
   }) => {
    const headerClass = getHeaderClass(UseVariantText, UseTextColor, ClassName, SetHover);
    const {borderRender, borderColorClass} = getHeaderBorder(SetBorder);

    return (


      <header className={headerClass || undefined}>
        <div className="relative h-max">
          {children}

          {borderRender
            ? <span
              className={classNames(
                'absolute inset-x-0 -bottom-1 border-b-2',
                borderColorClass,
              )}
            />
            : null}
        </div>

        {TitleSuffix ? (
          <div className={TitleSuffixClassName}>
            {TitleSuffix}
          </div>
        ) : null}
      </header>
    );
  },
);

HeaderLayout.displayName = 'HeaderLayout';
export default HeaderLayout;